import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import Form from "./Form";

const CreateDialog = ({ open, onClose, onCreate }) => {
  return (
    <Dialog
      open={open}
      aria-labelledby="locations-create-form-dialog"
      fullWidth
    >
      <DialogTitle id="locations-create-form-dialog-title">
        Crear ubicación
      </DialogTitle>
      <DialogContent>
        <Form id="locations-create-form" onCreate={onCreate} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancelar
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          form="locations-create-form"
        >
          Crear
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CreateDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onCreate: PropTypes.func,
};

CreateDialog.defaultProps = {
  open: false,
  onClose: () => {},
  onCreate: () => {},
};

export default CreateDialog;
