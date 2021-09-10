import { useState } from "react";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import MuiMenu from "@material-ui/core/Menu";

const Menu = ({ rowId }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <IconButton
        aria-label="locations-table-more-options"
        aria-controls={`locations-table-more-options-menu-${rowId}`}
        aria-haspopup="true"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <MoreVertIcon />
      </IconButton>
      <MuiMenu
        id={`locations-table-more-options-menu-${rowId}`}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Activar</MenuItem>
        <MenuItem onClick={handleClose}>Desconectar</MenuItem>
        <MenuItem onClick={handleClose}>Suspender</MenuItem>
      </MuiMenu>
    </div>
  );
};

Menu.propTypes = {
  rowId: PropTypes.string.isRequired,
};

export default Menu;
