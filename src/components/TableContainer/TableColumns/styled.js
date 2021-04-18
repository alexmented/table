import { makeStyles } from "@material-ui/styles"
import { ROW_SIZE } from "../constants"

export const useStyles = makeStyles(() => ({
  cell: {
    height: ROW_SIZE,
    width: 150,
    fontWeight: "bold",
    "&:hover": {
      cursor: "pointer",
    },
  },
}))
