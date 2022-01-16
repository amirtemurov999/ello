import { createStyles, makeStyles } from "@mui/styles";
import { colors } from "../../../../constants/colors";

export const useStyles = makeStyles(() =>
  createStyles({
    back: {
      borderRadius: 5,
    },
    wrapper: {
      borderRadius: 5,
      background: "white",
      padding: "14px 16px",
      margin: "12px 0",
      boxShadow: `0px 0px 0px 1px ${colors.darkGreen}`,
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    reaction: {
      width: 24,
      height: 24,
      borderRadius: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: colors.background,
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 15,
    },
  })
);
