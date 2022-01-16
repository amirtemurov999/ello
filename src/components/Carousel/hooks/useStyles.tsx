import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      overflow: "hidden",
      margin: "0 auto",
      position: "relative",
      "& button": {
        background: "white",
        appearance: "none",
        border: "none",
        width: 36,
        height: 36,
        borderRadius: 18,
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
      },
    },
    transfer: {
      display: "flex",
      transition: "0.3s ease-in-out",
    },
    prev: {
      left: 16,
    },
    next: {
      right: 16,
    },
  })
);
