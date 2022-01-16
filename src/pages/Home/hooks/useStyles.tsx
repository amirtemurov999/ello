import { createStyles, makeStyles } from "@mui/styles";
import { colors } from "../../../constants/colors";

export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      minHeight: "100vh",
      display: "flex",
      background: colors.background,
    },
    rightSection: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    canbanWrapper: {
      marginLeft: 25,
      paddingBottom: 20,
      display: "flex",
      flex: "1",
      overflow: "hidden",
      overflowX: "auto",
    },
    canbansContainer: {
      display: "flex",
      width: 0,
      flex: "1 0 auto",
    },
  })
);
