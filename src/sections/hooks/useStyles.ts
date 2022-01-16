import { createStyles, makeStyles } from "@mui/styles";
import { colors } from "../../constants/colors";

export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {},
    leftSection: {
      display: "inline-block",
      width: 750,
      verticalAlign: "top",
    },
    rightSection: {
      boxSizing: "border-box",
      verticalAlign: "top",
      marginLeft: 15,
      display: "inline-block",
      width: 350,
      border: "1px solid " + colors.silver,
      padding: 25,
      borderRadius: 12,
    },
    propertys: {
      display: "flex",
      alignItems: "center",
      marginBottom: 30,
      "&:last-child": {
        marginBottom: 0,
      },
      "& >span": {
        color: colors.silver,
        display: "block",
        width: 160,
      },
    },
  })
);
