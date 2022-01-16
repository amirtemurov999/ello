import { createStyles, makeStyles } from "@mui/styles";
import { colors } from "../../../constants/colors";
export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: colors.background,
    },
    container: {
      background: "white",
      padding: 32,
      width: 400,
      boxShadow: "0px 4px 136px rgba(46, 74, 205, 0.1)",
      borderRadius: 12,
    },
    section: {
      marginTop: 40,
    },
  })
);
