import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      padding: "0 25px",
      width: "auto",
      height: 80,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& >div": {
        display: "flex",
        alignItems: "center",
      },
    },
    leftSection: {},
    rightSection: {},
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 30,
      margin: "0 15px",
      objectFit: "cover",
    },
  })
);
