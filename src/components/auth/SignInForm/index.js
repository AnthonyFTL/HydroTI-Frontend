import { useState } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import WithShadow from "../../../hoc/WithShadow";
import OutlinedInput from "../../Common/OutlinedInput";
import Button from "@material-ui/core/Button";
import routes from "../../../router/routes";

const useStyles = makeStyles({
  form: {
    padding: 20,
    display: "grid",
    rowGap: 20,
    backgroundColor: "rgba(255,255,255,.9)",
    textAlign: "center",
  },
});

const SignInForm = ({ onSignIn }) => {
  const styles = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn({ email, password });
  };

  return (
    <WithShadow>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Sign In</h2>
        <OutlinedInput
          id="sign-in-email"
          helperTextId="sign-in-email-helper-text"
          label="Email"
          value={email}
          onChange={setEmail}
          fullWidth
        />
        <OutlinedInput
          id="sign-in-password"
          helperTextId="sign-in-password-helper-text"
          label="Password"
          value={password}
          onChange={setPassword}
          fullWidth
          type="password"
        />
        <Button type="submit" variant="contained" color="primary">
          Sign In
        </Button>
        <Link to={routes.SIGN_UP}>Go to Sign Up</Link>
      </form>
    </WithShadow>
  );
};

SignInForm.propTypes = {
  onSignIn: PropTypes.func,
};

SignInForm.defaultProps = {
  onSignIn: () => {},
};

export default SignInForm;
