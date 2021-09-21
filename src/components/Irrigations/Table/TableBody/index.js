import PropTypes from "prop-types";

import Location from "../../../../model/location";

import MuiTableBody from "@material-ui/core/TableBody";

import StyledTableCell from "../../../Common/Table/StyledTableCell";

import ClickableRow from "../../../Common/Table/ClickableRow";
import StateChip from "../StateChip";

const TableBody = ({ data, onDetailsClick }) => (
  <MuiTableBody>
    {data.map((row) => (
      <ClickableRow key={row.id} onClick={() => onDetailsClick(row.id)}>
        <StyledTableCell>{row.id}</StyledTableCell>
        <StyledTableCell>{row.name}</StyledTableCell>
        <StyledTableCell>{row.district}</StyledTableCell>
        <StyledTableCell>
          <StateChip state={row.state} />
        </StyledTableCell>
        <StyledTableCell>{row.connectedDevices}</StyledTableCell>
      </ClickableRow>
    ))}
  </MuiTableBody>
);

TableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Location)),
  onDetailsClick: PropTypes.func,
};

TableBody.defaultProps = {
  data: [],
  onDetailsClick: () => {},
};

export default TableBody;
