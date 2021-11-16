import { makeStyles } from "@material-ui/core";
import theme from "../../../themes/theme";

export const useStyles = makeStyles({
  nav: {
    height: theme.typography.pxToRem(88),
    background: theme.palette.primary.contrastText,
  },
  brandImage: {
    width: theme.typography.pxToRem(51),
    height: theme.typography.pxToRem(49),
    paddingTop: theme.typography.pxToRem(19),
    paddingLeft: theme.typography.pxToRem(36),
  },
  dropdownContainer: {
    width: theme.typography.pxToRem(289),
    marginLeft: theme.typography.pxToRem(83),
    height: theme.typography.pxToRem(88),
    display: "flex",
    alignItems: "center",
  },
  searchFieldContainer: {
    width: theme.typography.pxToRem(718),
    marginLeft: theme.typography.pxToRem(64),
    height: theme.typography.pxToRem(88),
    display: "flex",
    alignItems: "center",
  },
  profileAvatarContainer: {
    width: theme.typography.pxToRem(51),
    height: theme.typography.pxToRem(88),
    display: "flex",
    alignItems: "center",
    flex: 1,
    justifyContent : "flex-end",
    marginRight : theme.typography.pxToRem(45)
  },
  avatar: {
    width: theme.typography.pxToRem(51),
    height: theme.typography.pxToRem(51),
    background: "#6633F2",
  },
});
