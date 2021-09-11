import MuiTableHead from "@material-ui/core/TableHead";

import StyledTableRow from "../../../Common/Table/StyledTableRow";
import StyledTableCell from "../../../Common/Table/StyledTableCell";

const TableHead = () => (
  <MuiTableHead>
    <StyledTableRow>
      <StyledTableCell>Id</StyledTableCell>
      <StyledTableCell>Nombre</StyledTableCell>
      <StyledTableCell>Ubicacion</StyledTableCell>
      <StyledTableCell>Estado</StyledTableCell>
      <StyledTableCell>Usado por último vez</StyledTableCell>
      <StyledTableCell width="5%" />
    </StyledTableRow>
  </MuiTableHead>
);

export default TableHead;
