import { createStyles, makeStyles } from "@mui/styles";
import { colors } from "../../../constants/colors";

export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      position: "relative",
      userSelect: "none",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 6,
      padding: "0 15px",
    },
    unBordered: {
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    list: {
      marginTop: 5,
      boxSizing: "border-box",
      background: "white",
      position: "absolute",
      zIndex: 500,
      minWidth: 150,
      borderRadius: 6,
      padding: 10,
      boxShadow: `0px 4px 22px rgba(15, 91, 153, 0.25);`,
    },
    listItem: {
      padding: "10px 8px",
      "&:hover": {
        borderRadius: 5,
        backgroundColor: colors.darkGreen,
        "& span": {
          color: "white !important",
        },
      },
    },
  })
);
