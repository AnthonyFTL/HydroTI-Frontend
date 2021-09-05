import PropTypes from "prop-types";

import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab";

const SEVERITY = Object.freeze({
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
  SUCCESS: "success",
});

const Alert = ({ title, text, severity, onClose }) => (
  <MuiAlert severity={severity} onClose={onClose}>
    {title && <AlertTitle>{title}</AlertTitle>}
    {text}
  </MuiAlert>
);

Alert.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  severity: PropTypes.oneOf(Object.values(SEVERITY)),
  onClose: PropTypes.func,
};

Alert.defaultProps = {
  title: "",
  severity: SEVERITY.INFO,
  onClose: () => {},
};

export default Alert;
