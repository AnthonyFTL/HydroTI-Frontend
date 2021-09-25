import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Header = () => (
  <Box display="flex" justifyContent="space-between">
    <Typography variant="h4">Dispositivos</Typography>
  </Box>
);

Header.propTypes = {
  onAddClick: PropTypes.func,
};

Header.defaultProps = {
  onAddClick: () => {},
};

export default Header;
