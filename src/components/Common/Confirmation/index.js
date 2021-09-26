import PropTypes from "prop-types";

import { Snackbar, Button } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

const Confirmation = ({ title, text, open, onClose, onConfirm }) => (
  <Snackbar
    open={open}
    anchorOrigin={{ vertical: "top", horizontal: "center" }}
  >
    <Alert
      severity="warning"
      action={
        <>
          <Button color="inherit" size="small" onClick={onClose}>
            Cancelar
          </Button>
          <Button color="inherit" size="small" onClick={onConfirm}>
            Confirmar
          </Button>
        </>
      }
    >
      <AlertTitle style={{ textAlign: "left" }}>{title}</AlertTitle>
      {text}
    </Alert>
  </Snackbar>
);

Confirmation.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
};

Confirmation.defaultProps = {
  open: false,
  onClose: () => {},
  onConfirm: () => {},
};

export default Confirmation;
