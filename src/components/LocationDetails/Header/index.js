import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const Header = ({ onArrowBackClick, title }) => (
  <Box display="flex">
    <Box alignSelf="start">
      <IconButton onClick={onArrowBackClick}>
        <ArrowBackIcon />
      </IconButton>
    </Box>
    <Box alignSelf="center">
      <Typography variant="h5" style={{ marginLeft: 10 }}>
        {title}
      </Typography>
    </Box>
  </Box>
);

Header.propTypes = {
  onArrowBackClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  onArrowBackClick: () => {},
};

export default Header;
