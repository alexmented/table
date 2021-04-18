import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px",
  },
  elements: {
    width: "20%",
  },
  button: {
    background: "aqua",
    width: "100px",
    color: "black",
    marginTop: "10px",
  },
}));
