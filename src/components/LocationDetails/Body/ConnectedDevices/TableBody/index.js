import PropTypes from "prop-types";

import MuiTableBody from "@material-ui/core/TableBody";

import StyledTableCell from "../../../../Common/Table/StyledTableCell";
import StyledTableRow from "../../../../Common/Table/StyledTableRow";

const TableBody = ({ data }) => (
  <MuiTableBody>
    {data.map((row) => (
      <StyledTableRow key={row.id}>
        <StyledTableCell>{row.id}</StyledTableCell>
        <StyledTableCell>{row.name}</StyledTableCell>
      </StyledTableRow>
    ))}
  </MuiTableBody>
);

TableBody.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

TableBody.defaultProps = {
  data: [],
};

export default TableBody;
