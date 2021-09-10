import PropTypes from "prop-types";

import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import MuiTable from "@material-ui/core/Table";

import TableHead from "./TableHead";
import TableBody from "./TableBody";

const ConnectedDevices = ({ data }) => (
  <TableContainer component={Paper}>
    <MuiTable>
      <TableHead />
      <TableBody data={data} />
    </MuiTable>
  </TableContainer>
);

ConnectedDevices.propTypes = {
  data: PropTypes.array,
};

ConnectedDevices.defaultProps = {
  data: [],
};

export default ConnectedDevices;
