import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import MuiTable from "@material-ui/core/Table";
import Typography from "@material-ui/core/Typography";

import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = ({ data, onStateClick, onDetailsClick }) => {
  if (data.length === 0)
    return (
      <Typography align="center" variant="h5">
        No hay ubicaciones registradas
      </Typography>
    );

  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHead />
        <TableBody
          data={data}
          onStateClick={onStateClick}
          onDetailsClick={onDetailsClick}
        />
      </MuiTable>
    </TableContainer>
  );
};

Table.propTypes = {
  data: PropTypes.array,
  onStateClick: PropTypes.func,
  onDetailsClick: PropTypes.func,
};

Table.defaultProps = {
  data: [],
  onStateClick: () => {},
  onDetailsClick: () => {},
};

export default Table;
