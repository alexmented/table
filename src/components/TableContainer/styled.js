import { makeStyles } from "@material-ui/styles"

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  container: {
    flexGrow: 1,
    height: 500,
  },
  paper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
}))
