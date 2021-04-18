import { makeStyles } from "@material-ui/styles";
import { ROW_SIZE } from "../constants";

export const useStyles = makeStyles(() => ({
  root: {
    "&:hover > div": {
      color: "magenta",
      cursor: "pointer",
    },
  },
  cell: {
    height: ROW_SIZE,
    minWidth: 150,
    wordBreak: "break-word",
  },
  button: {
    textTransform: "lowercase",
    background: "aqua",
    height: 20,
  },
}));
