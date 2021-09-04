import PropTypes from "prop-types";

import { makeStyles, Typography } from "@material-ui/core";

import WithShadow from "../../../WithShadow";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  title: {
    marginBottom: 30,
  },
  card: {
    padding: 20,
    backgroundColor: "rgba(255,255,255,.9)",
    margin: 10,
    borderRadius: 10,
    width: 400,
  },
  form: {
    display: "grid",
    rowGap: 20,
  },
  button: {
    marginTop: 30,
    marginBottom: 30,
    display: "flex",
    justifyContent: "center",
  },
});

const AuthFormTemplate = ({
  title,
  submitText,
  handleSubmit,
  children,
  footer,
}) => {
  const styles = useStyles();

  return (
    <WithShadow className={styles.card}>
      <Typography className={styles.title} variant="h5" align="center">
        {title}
      </Typography>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        {children}
        <div className={styles.button}>
          <Button type="submit" variant="contained" color="primary">
            {submitText}
          </Button>
        </div>
      </form>
      {footer}
    </WithShadow>
  );
};

AuthFormTemplate.propTypes = {
  title: PropTypes.string,
  submitText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

AuthFormTemplate.defaultProps = {
  title: "",
  handleSubmit: () => {},
  footer: null,
};

export default AuthFormTemplate;
