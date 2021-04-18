import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  container: {
    height: 500,
    minWidth: 950,
  },
  paper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
}));
