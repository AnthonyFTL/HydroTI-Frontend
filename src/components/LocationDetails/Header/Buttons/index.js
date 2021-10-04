import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const LocationDetailsEditButton = ({ onEditClick }) => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={onEditClick}
          >
            Editar
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

LocationDetailsEditButton.propTypes = {
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default LocationDetailsEditButton;
