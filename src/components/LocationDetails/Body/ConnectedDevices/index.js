import PropTypes from "prop-types";

import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import MuiTable from "@material-ui/core/Table";

import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { Typography } from "@material-ui/core";

const ConnectedDevices = ({ data }) => {
  if (data.length === 0)
    return (
      <Typography align="center" variant="h5">
        No hay dispositivos conectados
      </Typography>
    );

  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHead />
        <TableBody data={data} />
      </MuiTable>
    </TableContainer>
  );
};

ConnectedDevices.propTypes = {
  data: PropTypes.array,
};

ConnectedDevices.defaultProps = {
  data: [],
};

export default ConnectedDevices;
