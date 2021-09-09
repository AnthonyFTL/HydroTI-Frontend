import { withStyles } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.white,
    textAlign: "center",
  },
  body: {
    textAlign: "center",
  },
}))(TableCell);

export default StyledTableCell;
