import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import * as auth from "./reducers/authReducer";
export interface IAppreducers {
  auth: auth.IState;
}
export const rootReducer = combineReducers<IAppreducers>({
  auth: auth.authReducer,
});

export function* rootSaga() {
  yield all([auth.saga].map((saga) => fork(saga)));
}
