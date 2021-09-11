import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import MuiTable from "@material-ui/core/Table";

import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { Typography } from "@material-ui/core";

const Table = ({ data, onEditClick, onDeleteClick }) => {
  if (data.length === 0)
    return (
      <Typography align="center" variant="h5">
        No hay dispositivos registrados
      </Typography>
    );

  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHead />
        <TableBody
          data={data}
          onDeleteClick={onDeleteClick}
          onEditClick={onEditClick}
        />
      </MuiTable>
    </TableContainer>
  );
};

Table.propTypes = {
  data: PropTypes.array,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};

Table.defaultProps = {
  data: [],
  onEditClick: () => {},
  onDeleteClick: () => {},
};

export default Table;
