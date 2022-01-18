import { Button, Input, Checkbox } from "../../components";
import { useStyles } from "./hooks/useStyles";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { Link, useHistory } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { actions as authActions } from "../../store/reducers/authReducer";
import { IAppreducers } from "../../store/rootReducer";
import { useCallback, useEffect, useState } from "react";
import { CLIENT_ID } from "../../constants";
import { fetchTasks } from "../../cruds/tasksCrud";
const Login: React.FC<TPropsFromRedux> = ({
  loadingState,
  googleLoadingState,
  user,
  login,
  loginWithGoogle,
}) => {
  const styles = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState<string>("htecgf@gmail.com");
  const [password, setPassword] = useState<string>("197414@ello");
  const loginIntoSystem = useCallback(() => {
    login({ email: email, password: password });
  }, [email, password]);
  const googleLogin = useCallback(
    (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
      const result = response as GoogleLoginResponse;
      const profile = result.getBasicProfile();
      loginWithGoogle({
        email: profile.getEmail(),
        userName: profile.getName(),
        googleId: result.googleId,
        accessToken: result.accessToken,
      });
    },
    []
  );
  useEffect(() => {
    if (loadingState.success) {
      history.push("/home");
    }
  }, [loadingState, googleLoadingState]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Login</h1>
        <section className={styles.section}>
          <GoogleLogin
            clientId={CLIENT_ID}
            render={(renderProps) => (
              <Button
                full
                loading={googleLoadingState.loading}
                text="Login with Google"
                leftIcon="Google"
                outline
                onClick={renderProps.onClick}
              />
            )}
            onSuccess={googleLogin}
          ></GoogleLogin>
        </section>
        <section className={styles.section} style={{ marginTop: 60 }}>
          <Input
            value={email}
            label="Name"
            placeholder="Enter your name..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          style={{ marginTop: 30 }}
          type="password"
          placeholder="Enter your password..."
        />
        <Checkbox label="Remember me" />
        <section className={styles.section}>
          <Button
            full
            loading={loadingState.loading}
            text="Login"
            onClick={() => loginIntoSystem()}
          />
        </section>
        <section className={styles.section} style={{ textAlign: "center" }}>
          <Link to="/signup">Forgot password?</Link>
        </section>
        <section style={{ textAlign: "center" }} className={styles.section}>
          <div>Don't have an account?</div>
          <div>
            <Link to="/signup">Sign up</Link>
          </div>
        </section>
      </div>
    </div>
  );
};
const connector = connect(
  (state: IAppreducers) => ({
    user: state.auth.user,
    loadingState: state.auth.loginState,
    googleLoadingState: state.auth.googleLoginState,
  }),
  {
    login: authActions.userLogin,
    loginWithGoogle: authActions.userLoginWithGoogle,
  }
);

type TPropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Login);
