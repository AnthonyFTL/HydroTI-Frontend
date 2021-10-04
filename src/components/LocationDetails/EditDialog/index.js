import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import LocationDetails from "../../../model/locationDetails";

import Form from "./Form";
import { useState } from "react";

const initialErrors = { name: [], location: [], state: [] };

const EditDialog = ({ open, onClose, onEdit, details }) => {
  const [errors, setErrors] = useState(initialErrors);

  return (
    <Dialog
      open={open}
      aria-labelledby="locations-create-form-dialog"
      fullWidth
    >
      <DialogTitle id="locations-create-form-dialog-title">
        Editar ubicación
      </DialogTitle>
      <DialogContent>
        <Form
          setErrors={setErrors}
          id="locations-create-form"
          errors={errors}
          onEdit={onEdit}
          details={details}
        />
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
          disabled={Object.values(errors).some((e) => e.length > 0)}
        >
          Editar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

EditDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onEdit: PropTypes.func,
  details: PropTypes.instanceOf(LocationDetails).isRequired,
};

EditDialog.defaultProps = {
  open: false,
  onClose: () => {},
  onEdit: () => {},
};

export default EditDialog;
