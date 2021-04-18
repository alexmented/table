import { makeStyles } from "@material-ui/styles"
import { ROW_SIZE } from "../constants"

export const useStyles = makeStyles(() => ({
  root: {
    "&:hover > div": {
      color: "magenta",
      cursor: "pointer",
    },
  },
  cell: {
    height: ROW_SIZE,
  },
}))
