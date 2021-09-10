import PropTypes from "prop-types";

import Device from "../../../../model/device";

import StyledTableRow from "../../../Common/Table/StyledTableRow";
import StyledTableCell from "../../../Common/Table/StyledTableCell";
import MuiTableBody from "@material-ui/core/TableBody";

import StateChip from "../../../Common/StateChip";

const TableBody = ({ data }) => (
  <MuiTableBody>
    {data.map((row) => (
      <StyledTableRow key={row.id}>
        <StyledTableCell>{row.id}</StyledTableCell>
        <StyledTableCell>{row.name}</StyledTableCell>
        <StyledTableCell>{row.location}</StyledTableCell>
        <StyledTableCell>
          <StateChip state={row.state} />
        </StyledTableCell>
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
