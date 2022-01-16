import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      "& svg": {
        animation: "$loading 0.7s infinite linear",
      },
    },
    "@keyframes loading": {
      from: {
        transform: `rotateZ(0deg)`,
      },
      to: {
        transform: `rotateZ(360deg)`,
      },
    },
  })
);
