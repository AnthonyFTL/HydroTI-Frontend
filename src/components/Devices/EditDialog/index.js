import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import Form from "./Form";
import Device from "../../../model/device";

const EditDialog = ({ device, open, onClose, onEdit }) => {
  return (
    <Dialog open={open} aria-labelledby="devices-edit-form-dialog" fullWidth>
      <DialogTitle id="devices-edit-form-dialog-title">
        Editar dispositivo
      </DialogTitle>
      <DialogContent>
        {Boolean(device) && (
          <Form id="devices-edit-form" device={device} onEdit={onEdit} />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancelar
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          form="devices-edit-form"
        >
          Editar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

EditDialog.propTypes = {
  device: PropTypes.instanceOf(Device),
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onEdit: PropTypes.func,
};

EditDialog.defaultProps = {
  open: false,
  onClose: () => {},
  onEdit: () => {},
};

export default EditDialog;
