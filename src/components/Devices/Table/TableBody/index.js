import PropTypes from "prop-types";

import Device from "../../../../model/device";

import StyledTableRow from "../../../Common/Table/StyledTableRow";
import StyledTableCell from "../../../Common/Table/StyledTableCell";
import MuiTableBody from "@material-ui/core/TableBody";

const TableBody = ({ data }) => (
  <MuiTableBody>
    {data.map((row) => (
      <StyledTableRow key={row.id}>
        <StyledTableCell>{row.name}</StyledTableCell>
        <StyledTableCell>{row.lastDateUsed}</StyledTableCell>
      </StyledTableRow>
    ))}
  </MuiTableBody>
);

TableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Device)),
};

TableBody.defaultProps = {
  data: [],
};

export default TableBody;
