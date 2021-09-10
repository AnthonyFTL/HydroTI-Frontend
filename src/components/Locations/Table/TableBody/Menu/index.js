import { useState } from "react";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import MuiMenu from "@material-ui/core/Menu";
import Divider from "@material-ui/core/Divider";

import locationState from "../../../../../model/state";

const Menu = ({ rowId, onStateClick, onDetailsClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => setAnchorEl(null);

  const handleStateClick = (state) => {
    onStateClick(state);
    handleClose();
  };

  const handleDetailsClick = () => {
    onDetailsClick();
    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-label="locations-table-more-options"
        aria-controls={`locations-table-more-options-menu-${rowId}`}
        aria-haspopup="true"
        onClick={(event) => setAnchorEl(event.currentTarget)}
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
        <MenuItem onClick={handleDetailsClick}>Ver detalles</MenuItem>
        <Divider />
        <MenuItem onClick={() => handleStateClick(locationState.ACTIVE)}>
          Activar
        </MenuItem>
        <MenuItem onClick={() => handleStateClick(locationState.DISCONNECTED)}>
          Desconectar
        </MenuItem>
        <MenuItem onClick={() => handleStateClick(locationState.SUSPENDED)}>
          Suspender
        </MenuItem>
      </MuiMenu>
    </div>
  );
};

Menu.propTypes = {
  rowId: PropTypes.string.isRequired,
  onStateClick: PropTypes.func,
  onDetailsClick: PropTypes.func,
};

Menu.defaultProps = {
  onStateClick: () => {},
  onDetailsClick: () => {},
};

export default Menu;
