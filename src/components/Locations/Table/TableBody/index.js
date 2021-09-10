import PropTypes from "prop-types";

import Location from "../../../../model/location";

import MuiTableBody from "@material-ui/core/TableBody";

import StyledTableRow from "../../../Common/Table/StyledTableRow";
import StyledTableCell from "../../../Common/Table/StyledTableCell";

import StateChip from "../../../Common/StateChip";
import Menu from "./Menu";

const TableBody = ({ data, onStateClick, onDetailsClick }) => (
  <MuiTableBody>
    {data.map((row) => (
      <StyledTableRow key={row.id}>
        <StyledTableCell>{row.id}</StyledTableCell>
        <StyledTableCell>{row.name}</StyledTableCell>
        <StyledTableCell>{row.district}</StyledTableCell>
        <StyledTableCell>
          <StateChip state={row.state} />
        </StyledTableCell>
        <StyledTableCell>{row.connectedDevices}</StyledTableCell>
        <StyledTableCell width="5%">
          <Menu
            rowId={row.id.toString()}
            onStateClick={(state) => onStateClick(row.id, state)}
            onDetailsClick={() => onDetailsClick(row.id)}
          />
        </StyledTableCell>
      </StyledTableRow>
    ))}
  </MuiTableBody>
);

TableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Location)),
  onStateClick: PropTypes.func,
  onDetailsClick: PropTypes.func,
};

TableBody.defaultProps = {
  data: [],
  onStateClick: () => {},
  onDetailsClick: () => {},
};

export default TableBody;
