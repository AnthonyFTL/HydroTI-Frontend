import { useState } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import Form from "./Form";
import Device from "../../../model/device";
import Location from "../../../model/location";

const initialErrors = { name: [], location: [], state: [] };

const EditDialog = ({ device, open, onClose, onEdit, locations }) => {
  const [errors, setErrors] = useState(initialErrors);

  const handleClose = () => {
    setErrors(initialErrors);
    onClose();
  };

  return (
    <Dialog open={open} aria-labelledby="devices-edit-form-dialog" fullWidth>
      <DialogTitle id="devices-edit-form-dialog-title">
        Editar dispositivo
      </DialogTitle>
      <DialogContent>
        {Boolean(device) && (
          <Form
            id="devices-edit-form"
            device={device}
            onEdit={onEdit}
            errors={errors}
            setErrors={setErrors}
            locations={locations}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancelar
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          form="devices-edit-form"
          disabled={Object.values(errors).some((e) => e.length > 0)}
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
  locations: PropTypes.arrayOf(PropTypes.instanceOf(Location)),
};

EditDialog.defaultProps = {
  open: false,
  onClose: () => {},
  onEdit: () => {},
  locations: [],
};

export default EditDialog;
