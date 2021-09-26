import { useState } from "react";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import MuiMenu from "@material-ui/core/Menu";

import Confirmation from "../../../../Common/Confirmation";

const Menu = ({ rowId, onEditClick, onDeleteClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [confirmationIsOpen, setConfirmationIsOpen] = useState(false);

  const handleClose = () => setAnchorEl(null);

  const handleClick = (f) => () => {
    f();
    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-label="devices-table-more-options"
        aria-controls={`devices-table-more-options-menu-${rowId}`}
        aria-haspopup="true"
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        <MoreVertIcon />
      </IconButton>
      <MuiMenu
        id={`devices-table-more-options-menu-${rowId}`}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClick(onEditClick)}>Editar</MenuItem>
        <MenuItem onClick={handleClick(() => setConfirmationIsOpen(true))}>
          Eliminar
        </MenuItem>
      </MuiMenu>
      <Confirmation
        text="¿Está seguro que desea eliminar el dispositivo?"
        title="Eliminar dispositivo"
        open={confirmationIsOpen}
        onClose={() => setConfirmationIsOpen(false)}
        onConfirm={onDeleteClick}
      />
    </div>
  );
};

Menu.propTypes = {
  rowId: PropTypes.string.isRequired,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};

Menu.defaultProps = {
  onEditClick: () => {},
  onDeleteClick: () => {},
};

export default Menu;
