import { makeStyles } from "@material-ui/core";
import theme from "../../themes/theme";

export const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    marginTop: theme.typography.pxToRem(88),
  },
  childs: {
    marginLeft: theme.typography.pxToRem(116),
    width: `calc(100vw - ${theme.typography.pxToRem(116)})`
  },
});
