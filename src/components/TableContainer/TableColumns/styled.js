import { makeStyles } from "@material-ui/styles"
import { ROW_SIZE } from "../constants"

export const useStyles = makeStyles(() => ({
  cell: {
    height: ROW_SIZE,
  },
}))
