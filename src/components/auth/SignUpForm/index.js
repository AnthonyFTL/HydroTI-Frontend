import { useState } from "react";
import PropTypes from "prop-types";

import WithShadow from "../../../hoc/WithShadow";
import RoleRadioButtons from "../RoleRadioButtons";
import OutlinedInput from "../../Common/OutlinedInput";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  form: {
    padding: 20,
    display: "grid",
    rowGap: 20,
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
        />
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
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
