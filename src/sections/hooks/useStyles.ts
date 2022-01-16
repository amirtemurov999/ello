import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {},
    leftSection: {
      display: "inline-block",
      width: 750,
    },
    rightSection: {
      display: "inline-block",
      width: 350,
    },
  })
);
