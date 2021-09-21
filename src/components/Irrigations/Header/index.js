import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const Header = ({ onAddClick }) => (
  <Box display="flex" justifyContent="space-between">
    <Typography variant="h4">Riegos</Typography>
    <Button variant="contained" color="primary" onClick={onAddClick}>
      Agregar
    </Button>
  </Box>
);

Header.propTypes = {
  onAddClick: PropTypes.func,
};

Header.defaultProps = {
  onAddClick: () => {},
};

export default Header;
