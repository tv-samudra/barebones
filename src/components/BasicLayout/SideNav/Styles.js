import { makeStyles } from "@material-ui/core";
import theme from "../../../themes/theme";

export const useStyles = makeStyles({
  sideNav: {
    background: theme.palette.primary.main,
    width: theme.typography.pxToRem(116),
    height: "100vh",
    position: "fixed",
  },
  navItems: {
    marginTop: theme.typography.pxToRem(64),
    lineHeight: theme.typography.pxToRem(14),
  },
  navItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.typography.pxToRem(15),
    marginBottom: theme.typography.pxToRem(42),
    cursor: "pointer",
    "& img": {
      width: theme.typography.pxToRem(32),
      height: theme.typography.pxToRem(40),
    },
    "& div": {
      color: "#DEF0F2",
    },
  },
  navActive: {
    borderLeftWidth: theme.typography.pxToRem(7),
    borderLeftColor: "#FFDE29",
    borderLeftStyle: "solid",
    background: "#C4C4C41d",
  },
});
