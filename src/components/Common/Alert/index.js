import PropTypes from "prop-types";

import severity from "../../../model/severity";
import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab";

const Alert = ({ title, text, severity, onClose }) => (
  <MuiAlert severity={severity} onClose={onClose}>
    {title && <AlertTitle>{title}</AlertTitle>}
    {text}
  </MuiAlert>
);

Alert.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  severity: PropTypes.oneOf(Object.values(severity)),
  onClose: PropTypes.func,
};

Alert.defaultProps = {
  title: "",
  severity: severity.INFO,
  onClose: () => {},
};

export default Alert;
