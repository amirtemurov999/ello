import { createStyles, makeStyles } from "@mui/styles";
import { colors } from "../../../constants/colors";

export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      minWidth: 250,
      padding: "50px 25px 20px",
      background: colors.lightSilver,
      fontSize: 18,
      color: colors.textColor,
      display: "flex",
      flexDirection: "column",
    },
    menuItem: {
      display: "flex",
      alignItems: "center",
      padding: "8px 20px",
      cursor: "pointer",
      borderRadius: 7,
    },
    menuItemActive: {
      background: colors.darkGreen,
      color: "white",
    },
    splitter: {
      margin: "15px 0",
      width: "80%",
      opacity: 0.2,
      borderTop: "1px solid " + colors.silver,
    },
    logoSection: {},
    projects: {
      flex: 1,
    },
  })
);
