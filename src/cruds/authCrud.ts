import axios from "axios";
import { USER_LOGIN_URL, USER_SUGNUP_URL } from "../constants/apiUrls";
import { IRequestGoogle, IRequestLogin } from "../store/reducers/authReducer";
export function login(email: string, password: string) {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  return axios.post(USER_LOGIN_URL, formData);
}
export function loginWithGoogle(request: IRequestGoogle) {
  const formData = new FormData();
  formData.append("userName", request.userName);
  formData.append("OAuthToken", request.accessToken);
  formData.append("googleId", request.googleId);
  formData.append("email", request.email);
  return axios.post(USER_LOGIN_URL, formData);
}
export function signUp(arg: Partial<IRequestLogin>) {
  const formData = new FormData();
  formData.append("email", arg.email || "");
  formData.append("password", arg.password || "");
  formData.append("username", arg.name || "");
  return axios.post(USER_SUGNUP_URL, formData);
}
export function signUpgoogle(
  email: string,
  userName: string,
  password: string
) {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  formData.append("userName", userName);
  return axios.post(USER_SUGNUP_URL, formData);
}
