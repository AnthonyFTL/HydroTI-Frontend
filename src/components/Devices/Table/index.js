import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import MuiTable from "@material-ui/core/Table";

import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = ({ data }) => (
  <TableContainer component={Paper}>
    <MuiTable>
      <TableHead />
      <TableBody data={data} />
    </MuiTable>
  </TableContainer>
);

Table.propTypes = {
  data: PropTypes.array,
};

Table.defaultProps = {
  data: [],
};

export default Table;
