import { createAction } from "../../utils/actionHelper";
import { takeLatest, call, put, takeEvery } from "redux-saga/effects";
import { login, loginWithGoogle, signUp } from "../../cruds/authCrud";
import { create } from "domain";
import { Action } from "redux";
import { truncate } from "fs";
enum ActionTypes {
  USER_LOGIN = "user/login",
  USER_LOGIN_SUCCESS = "user/loginSuccess",
  USER_LOGIN_ERROR = "user/loginError",

  USER_LOGIN_WITH_GOOGLE = "user/loginWithGoogle",
  USER_LOGIN_WITH_GOOGLE_SUCCESS = "user/loginWithGoogleSuccess",
  USER_LOGIN_WITH_GOOGLE_ERROR = "user/loginWithGoogleError",

  USER_SIGNUP = "user/signup",
  USER_SIGNUP_SUCCESS = "user/signupSuccess",
  USER_SIGNUP_ERROR = "user/signupError",

  USER_GOOGLE_SIGNUP = "user/googleSignup",
  USER_GOOGLE_SUGNUP_ERROR = "user/googleSignup",
}
export interface IUser {
  avatar: string | null;
  userName: string;
  email: string;
  accessToken: string;
}
export interface IState {
  user: Partial<IUser>;
  loginState: ILoadingState;
  googleLoginState: ILoadingState;
  signUpState: ILoadingState;
  googleSignState: ILoadingState;
}

interface IAction {
  payload: IUser;
  type: ActionTypes;
}
interface IUserResponse {
  status: string;
  user: IUser;
}
export interface IRequestGoogle {
  googleId: string;
  accessToken: string;
  email: string;
  userName: string;
}
export interface IRequestLogin {
  email: string;
  password: string;
  name?: string;
}

interface ILoadingState {
  loading: boolean;
  success: boolean;
  error: boolean;
}
const initLoadingState = {
  loading: false,
  success: false,
  error: false,
};
const initialState: IState = {
  user: {},
  googleLoginState: initLoadingState,
  loginState: initLoadingState,
  signUpState: initLoadingState,
  googleSignState: initLoadingState,
};

export const authReducer = (
  state = initialState,
  action: IAction
): typeof initialState => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN: {
      return {
        ...state,
        user: {},
        loginState: {
          loading: true,
          error: false,
          success: false,
        },
      };
    }
    case ActionTypes.USER_LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loginState: {
          loading: false,
          success: true,
          error: false,
        },
      };
    }
    case ActionTypes.USER_LOGIN_ERROR: {
      return {
        ...state,
        user: {},
        loginState: {
          error: true,
          loading: false,
          success: false,
        },
      };
    }
    case ActionTypes.USER_LOGIN_WITH_GOOGLE: {
      return {
        ...state,
        user: {},
        googleLoginState: {
          loading: true,
          success: false,
          error: false,
        },
      };
    }
    case ActionTypes.USER_LOGIN_WITH_GOOGLE_SUCCESS: {
      console.log("success");
      return {
        ...state,
        user: action.payload,
        googleLoginState: {
          loading: false,
          success: true,
          error: false,
        },
      };
    }
    case ActionTypes.USER_LOGIN_WITH_GOOGLE_ERROR: {
      return {
        ...state,
        user: {},
        googleLoginState: {
          loading: false,
          success: false,
          error: true,
        },
      };
    }
    case ActionTypes.USER_SIGNUP: {
      return {
        ...state,
        user: {},
        signUpState: {
          loading: true,
          success: false,
          error: false,
        },
      };
    }
    case ActionTypes.USER_SIGNUP_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        signUpState: {
          loading: false,
          success: true,
          error: false,
        },
      };
    }
    case ActionTypes.USER_SIGNUP_ERROR: {
      return {
        ...state,
        user: {},
        signUpState: {
          loading: false,
          success: false,
          error: true,
        },
      };
    }
    default: {
      return state;
    }
  }
};
export type TCustomActions = typeof actions;

export const actions = {
  userLogin: (payload: IRequestLogin) =>
    createAction(ActionTypes.USER_LOGIN, payload),
  userLoginSuccess: (payload: IUser) =>
    createAction(ActionTypes.USER_LOGIN_SUCCESS, payload),
  userLoginError: () => createAction(ActionTypes.USER_LOGIN_ERROR),
  userLoginWithGoogle: (payload: IRequestGoogle) =>
    createAction(ActionTypes.USER_LOGIN_WITH_GOOGLE, payload),
  userLoginWithGoogleSuccess: (payload: IUser) =>
    createAction(ActionTypes.USER_LOGIN_SUCCESS, payload),
  userLoginWithGoogleError: () =>
    createAction(ActionTypes.USER_LOGIN_WITH_GOOGLE_ERROR),
  userSignup: (payload: IRequestLogin) =>
    createAction(ActionTypes.USER_SIGNUP, payload),
  userSignupSuccess: (payload: IUser) =>
    createAction(ActionTypes.USER_SIGNUP_SUCCESS, payload),
  userSignupError: () => createAction(ActionTypes.USER_SIGNUP_ERROR),
};

function* loginSaga({ payload }: { payload: IRequestLogin }) {
  try {
    const { data }: { data: IUserResponse } = yield call(() => {
      return login(payload.email, payload.password);
    });
    yield put(actions.userLoginSuccess(data.user));
  } catch {
    yield put(actions.userLoginError());
  }
}
function* loginWithGoogleSaga({ payload }: { payload: IRequestGoogle }) {
  try {
    const data: IUserResponse = yield call(() => {
      return loginWithGoogle(payload);
    });
    yield put(actions.userLoginWithGoogleSuccess(data.user));
  } catch {
    yield put(actions.userLoginWithGoogleError());
  }
}
function* signupSaga({ payload }: { payload: IRequestLogin }) {
  try {
    const data: IUser = yield call(() => signUp({ ...payload }));
    yield put(actions.userSignupSuccess(data));
  } catch {
    yield put(actions.userSignupError());
  }
}
export function* saga() {
  yield takeEvery<ReturnType<typeof actions.userLogin>>(
    ActionTypes.USER_LOGIN,
    loginSaga
  );
  yield takeEvery<ReturnType<typeof actions.userLoginWithGoogle>>(
    ActionTypes.USER_LOGIN_WITH_GOOGLE,
    loginWithGoogleSaga
  );
  yield takeEvery<ReturnType<typeof actions.userSignup>>(
    ActionTypes.USER_SIGNUP,
    signupSaga
  );
}
