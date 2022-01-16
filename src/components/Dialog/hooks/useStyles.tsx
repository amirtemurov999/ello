import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      position: "fixed",
      inset: "0 0",
      background: "#00000020",
      width: "100%",
      height: "100%",
      backdropFilter: "blur(2px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 500,
    },
    form: {
      maxHeight: 800,
      height: "fit-content",
      borderRadius: 12,
      background: "white",
      minWidth: 300,
      padding: 25,
      boxShadow: "0px 4px 39px rgba(46, 74, 205, 0.25)",
    },
    titleBar: {
      fontSize: 36,
      fontWeight: 700,
    },
    content: {
      marginTop: 25,
    },
  })
);
