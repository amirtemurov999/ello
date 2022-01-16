import { createStyles, makeStyles } from "@mui/styles";
import { colors } from "../../../constants/colors";

export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      alignItems: "center",
      userSelect: "none",
      position: "relative",
    },
    checkbox: {
      display: "block",
      appearance: "none",
      marginRight: 7,
      boxShadow: "inset 0 0 0 2px " + colors.darkGreen,
      width: 24,
      height: 24,
      verticalAlign: "middle",
      borderRadius: 7,
      transition: "0.2s ease",
      "& + svg": {
        position: "absolute",
        left: 4,
        transition: "0.1s ease-in",
        transitionDelay: "0.1s",
        transform: "scale(0)",
        pointerEvents: "none",
      },
      "&:checked": {
        boxShadow: "inset 0 0 0 18px " + colors.darkGreen,
        "&:checked + svg": {
          stroke: "white",
          transform: "scale(1)",
        },
      },
    },
  })
);
