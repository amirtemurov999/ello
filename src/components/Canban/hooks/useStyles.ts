import { createStyles, makeStyles } from "@mui/styles";
import { colors } from "../../../constants/colors";

export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      flexDirection: "column",
      minWidth: 350,
      marginRight: 30,
      padding: 2,
    },
    titleBar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#F3F4F5",
      padding: "13px 16px",
      fontSize: 18,
      fontWeight: 600,
      borderBottom: "3px solid " + colors.darkGreen,
    },
    counter: {
      borderRadius: 4,
      minWidth: 24,
      textAlign: "center",
      background: "#202121",
      padding: "0 8px",
      color: "white",
      lineHeight: 2,
      fontSize: 16,
    },
    cardsWrapper: {
      overflow: "overlay",
      overflowY: "scroll",
      flex: "1 0 auto",
      height: 0,
      padding: 5,
      boxSizing: "border-box",
      "& >div": {
        marginTop: 0,
      },
    },
  })
);
