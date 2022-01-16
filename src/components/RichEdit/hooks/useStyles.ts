import { createStyles, makeStyles } from "@mui/styles";
import { colors } from "../../../constants/colors";

export const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      minWidth: 500,
      marginTop: 10,
      borderRadius: 12,
      background: colors.background,
      padding: "15px 24px",
    },
    toolbar: {
      width: "100%",
      display: "flex",
      alignItems: "center",
    },
    editor: {
      marginTop: 15,
      height: 300,
      outline: "none",
    },
    toolButton: {
      height: 24,
      width: 24,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      marginLeft: 5,
      cursor: "pointer",
      userSelect: "none",
    },
    splitter: {
      height: 24,
      width: 2,
      borderLeft: "1px solid " + colors.silver,
      margin: "0 5px",
    },
    active: {
      background: colors.darkGreen,
    },
  })
);
