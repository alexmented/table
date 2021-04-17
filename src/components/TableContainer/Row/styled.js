import { makeStyles } from "@material-ui/styles"

export const useStyles = makeStyles(() => ({
  root: {
    "&:hover > div": {
      color: "magenta",
      cursor: "pointer",
    },
  },
}))
