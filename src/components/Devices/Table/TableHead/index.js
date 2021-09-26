import MuiTableHead from "@material-ui/core/TableHead";

import StyledTableRow from "../../../Common/Table/StyledTableRow";
import StyledTableCell from "../../../Common/Table/StyledTableCell";

const TableHead = () => (
  <MuiTableHead>
    <StyledTableRow>
      <StyledTableCell>Nombre</StyledTableCell>
      <StyledTableCell>Usado por último vez</StyledTableCell>
    </StyledTableRow>
  </MuiTableHead>
);

export default TableHead;
