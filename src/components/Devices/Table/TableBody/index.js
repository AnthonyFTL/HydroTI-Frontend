import PropTypes from "prop-types";

import Device from "../../../../model/device";

import StyledTableRow from "../../../Common/Table/StyledTableRow";
import StyledTableCell from "../../../Common/Table/StyledTableCell";
import MuiTableBody from "@material-ui/core/TableBody";
import StateChip from "./StateChip";

import Menu from "./Menu";

const TableBody = ({ data, onEditClick, onDeleteClick }) => (
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
        <StyledTableCell>
          <Menu
            rowId={row.id.toString()}
            onDeleteClick={() => onDeleteClick(row.id)}
            onEditClick={() => onEditClick(row.id)}
          />
        </StyledTableCell>
      </StyledTableRow>
    ))}
  </MuiTableBody>
);

TableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Device)),
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};

TableBody.defaultProps = {
  data: [],
  onEditClick: () => {},
  onDeleteClick: () => {},
};

export default TableBody;
