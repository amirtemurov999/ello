import { useStyles } from "./hooks/useStyles";
import { Iconly } from "../Iconly";
import { colors } from "../../constants/colors";
import { createStyles, makeStyles } from "@mui/styles";
import { useState } from "react";
import { Preloader } from "../Preloader";
export interface IButtonProps {
  text: string;
  leftIcon?: string;
  rightIcon?: string;
  loading?: boolean;
  full?: boolean;
  outline?: boolean;
  danger?: boolean;
  disabled?: boolean;
  onClick: () => {} | void;
}

export const Button: React.FC<IButtonProps> = ({
  text,
  leftIcon,
  rightIcon,
  loading,
  full,
  outline,
  danger,
  disabled,
  onClick,
}) => {
  const [hover, setHover] = useState<boolean>(false);
  const styles = useStyles();
  const innerStyles = makeStyles((theme) =>
    createStyles({
      button: {
        backgroundColor: outline ? "transparent" : colors.darkGreen,
        color: !outline ? "white" : colors.darkGreen,
        width: full ? "auto" : "fit-content",

        boxShadow: outline ? "0 0 0 1px " + colors.darkGreen : "none",
        "&:hover": {
          backgroundColor: outline
            ? "transparent"
            : colors.hover.darkGreenHover,
        },
      },
    })
  )();

  return (
    <div
      className={`${styles.wrapper} ${innerStyles.button}`}
      onClick={onClick}
    >
      <Preloader
        color={outline ? colors.darkGreen : "white"}
        style={{ position: "absolute", left: 20 }}
        animate={loading || false}
      />
      {leftIcon && (
        <Iconly name={leftIcon} color={outline ? colors.darkGreen : "white"} />
      )}
      <span
        style={{ marginLeft: leftIcon ? 5 : 0, marginRight: rightIcon ? 5 : 0 }}
      >
        {text}
      </span>
      {rightIcon && (
        <Iconly name={rightIcon} color={outline ? colors.darkGreen : "white"} />
      )}
    </div>
  );
};
