import { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Confirmation from "../../../Common/Confirmation";

const Buttons = ({ onEditClick, onDeleteClick }) => {
  const [confirmationIsOpen, setConfirmationIsOpen] = useState(false);

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={onEditClick}
          >
            Editar
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={() => setConfirmationIsOpen(true)}
          >
            Eliminar
          </Button>
        </Grid>
      </Grid>
      <Confirmation
        text="¿Está seguro que desea eliminar el area verde?"
        title="Eliminar area verde"
        open={confirmationIsOpen}
        onClose={() => setConfirmationIsOpen(false)}
        onConfirm={() => onDeleteClick()}
      />
    </>
  );
};

Buttons.propTypes = {
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default Buttons;
