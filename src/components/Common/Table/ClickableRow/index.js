import { TableRow, withStyles } from "@material-ui/core";

const ClickableRow = withStyles((theme) => ({
  root: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default ClickableRow;
