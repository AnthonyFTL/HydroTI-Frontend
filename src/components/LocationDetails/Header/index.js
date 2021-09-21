import { useState } from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

import Buttons from "./Buttons";
import EditDialog from "../../LocationDetails/EditDialog";

import LocationDetails from "../../../model/locationDetails";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  buttons: {
    marginTop: 10,
  },
}));

const Header = ({
  onArrowBackClick,
  title,
  onEditClick,
  onDeleteClick,
  details,
}) => {
  const [editDialogIsOpen, setEditDialogIsOpen] = useState();
  const styles = useStyles();

  return (
    <>
      <div className={styles.root}>
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
        <Box className={styles.buttons}>
          <Buttons
            onEditClick={() => setEditDialogIsOpen(true)}
            onDeleteClick={onDeleteClick}
          />
        </Box>
      </div>
      {details && (
        <EditDialog
          open={editDialogIsOpen}
          onClose={() => setEditDialogIsOpen(false)}
          onEdit={(data) =>
            onEditClick(data).then(() => setEditDialogIsOpen(false))
          }
          details={details}
        />
      )}
    </>
  );
};

Header.propTypes = {
  onArrowBackClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  details: PropTypes.instanceOf(LocationDetails),
};

Header.defaultProps = {
  onArrowBackClick: () => {},
};

export default Header;
