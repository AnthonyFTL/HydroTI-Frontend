import PropTypes from "prop-types";

import Device from "../../../../model/device";

import StyledTableRow from "../../../Common/Table/StyledTableRow";
import StyledTableCell from "../../../Common/Table/StyledTableCell";
import MuiTableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";

const TableBody = ({ data, onEditClick }) => (
  <MuiTableBody>
    {data.map((row) => (
      <StyledTableRow key={row.id}>
        <StyledTableCell>{row.name}</StyledTableCell>
        <StyledTableCell>{row.lastDateUsed}</StyledTableCell>
        <StyledTableCell>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={() => onEditClick(row.id)}
          >
            Editar
          </Button>
        </StyledTableCell>
      </StyledTableRow>
    ))}
  </MuiTableBody>
);

TableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Device)),
  onEditClick: PropTypes.func.isRequired,
};

TableBody.defaultProps = {
  data: [],
};

export default TableBody;
