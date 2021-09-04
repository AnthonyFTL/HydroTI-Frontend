import { useState } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import WithShadow from "../../../hoc/WithShadow";
import RoleRadioButtons from "../RoleRadioButtons";
import OutlinedInput from "../../Common/OutlinedInput";
import Button from "@material-ui/core/Button";
import routes from "../../../router/routes";

const useStyles = makeStyles({
  form: {
    padding: 20,
    display: "grid",
    rowGap: 20,
    backgroundColor: "rgba(255,255,255,.9)",
    width: 250,
    textAlign: "center",
  },
});

const SignUpForm = ({ onSignUp }) => {
  const styles = useStyles();

  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp({ role, email, password });
  };

  return (
    <WithShadow>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Sign Up</h2>
        <RoleRadioButtons value={role} onChange={setRole} />
        <OutlinedInput
          id="sign-up-email"
          helperTextId="sign-up-email-helper-text"
          label="Email"
          value={email}
          onChange={setEmail}
          fullWidth
        />
        <OutlinedInput
          id="sign-up-password"
          helperTextId="sign-up-password-helper-text"
          label="Password"
          value={password}
          onChange={setPassword}
          fullWidth
          type="password"
        />
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
        <Link to={routes.SIGN_IN}>Go to Sign In</Link>
      </form>
    </WithShadow>
  );
};

SignUpForm.propTypes = {
  onSignUp: PropTypes.func,
};

SignUpForm.defaultProps = {
  onSignUp: () => {},
};

export default SignUpForm;
