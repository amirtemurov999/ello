import { Button, Input, Checkbox } from "../../components";
import { useStyles } from "../Login/hooks/useStyles";
import {
  GoogleLogin,
  GoogleLoginProps,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import { IAppreducers } from "../../store/rootReducer";
import { connect, ConnectedProps } from "react-redux";
import { actions as authActions } from "../../store/reducers/authReducer";
import { CLIENT_ID } from "../../constants";
const Signup: React.FC<TPropsFromRedux> = ({ signupState, userSignup }) => {
  const styles = useStyles();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onSuccess = useCallback((response) => {
    const result = response as GoogleLoginResponse;
    console.log(result.getBasicProfile());
  }, []);

  const signUp = useCallback(() => {
    userSignup({ email: email, password: password, name: name });
  }, [name, email, password]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Sign up</h1>
        {signupState.loading}
        <section className={styles.section}>
          <GoogleLogin
            clientId={CLIENT_ID}
            render={(renderProps) => (
              <Button
                full
                text="Sign up with Google"
                leftIcon="Google"
                outline
                onClick={renderProps.onClick}
              />
            )}
            onSuccess={onSuccess}
          ></GoogleLogin>
        </section>
        <section className={styles.section} style={{ marginTop: 60 }}>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
            placeholder="Enter your name..."
          />
        </section>
        <section className={styles.section}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            placeholder="Enter your email..."
          />
        </section>
        <section className={styles.section}>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            style={{ marginTop: 30 }}
            type="password"
            placeholder="Enter your password..."
          />
        </section>

        <section className={styles.section}>
          <Button full text="Login" onClick={signUp} />
        </section>
        <section style={{ textAlign: "center" }} className={styles.section}>
          <div>Already have and account?</div>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

const connector = connect(
  (state: IAppreducers) => ({
    signupState: state.auth.signUpState,
  }),
  {
    userSignup: authActions.userSignup,
  }
);

type TPropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Signup);
