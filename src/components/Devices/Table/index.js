import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import MuiTable from "@material-ui/core/Table";

import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { Typography } from "@material-ui/core";
import { useState } from "react";
import EditDialog from "../../Devices/EditDialog";

const DevicesTable = ({ data, onEditClick, onDeleteClick }) => {
  const [editDialogIsOpen, setEditDialogIsOpen] = useState();

  const [selectedDevice, setDevice] = useState(null);
  console.log(setDevice);

  if (data.length === 0)
    return (
      <Typography align="center" variant="h5">
        No hay dispositivos registrados
      </Typography>
    );

  console.log("pls");
  console.log(selectedDevice);

  return (
    <>
      <TableContainer component={Paper}>
        <MuiTable>
          <TableHead />
          <TableBody
            data={data}
            onDeleteClick={onDeleteClick}
            onEditClick={(identifier) => {
              console.log(identifier);
              setEditDialogIsOpen(true);
              for (let i = 0; i < data.length; i++) {
                if (data[i].id === identifier) {
                  setDevice(data[i]);
                  console.log("why");
                }
              }
            }}
          />
        </MuiTable>
      </TableContainer>
      {selectedDevice !== null && (
        <EditDialog
          device={selectedDevice}
          open={editDialogIsOpen}
          onClose={() => {
            setEditDialogIsOpen(false);
            console.log("why is this not working");
          }}
          onEdit={(data) =>
            onEditClick(data).then(() => setEditDialogIsOpen(false))
          }
        />
      )}
    </>
  );
};

DevicesTable.propTypes = {
  data: PropTypes.array,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  selectedDevice: PropTypes.object,
};

DevicesTable.defaultProps = {
  data: [],
  onEditClick: () => {},
  onDeleteClick: () => {},
  // selectedItem: 0,
  selectedDevice: null,
};

export default DevicesTable;
