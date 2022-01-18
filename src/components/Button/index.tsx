import { useStyles } from "./hooks/useStyles";
import { Iconly } from "../Iconly";
import { colors } from "../../constants/colors";
import { createStyles, makeStyles } from "@mui/styles";
import React, { useState } from "react";
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
  style?: React.CSSProperties;
  borderless?: boolean;
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
  style,
  onClick,
  borderless = false,
}) => {
  const [hover, setHover] = useState<boolean>(false);
  const styles = useStyles();
  const innerStyles = makeStyles((theme) =>
    createStyles({
      button: {
        backgroundColor:
          outline || borderless ? "transparent" : colors.darkGreen,
        color: outline || borderless ? colors.darkGreen : "white",
        width: full ? "auto" : "fit-content",

        boxShadow: outline ? "0 0 0 1px " + colors.darkGreen : "none",
        "&:hover": {
          backgroundColor:
            outline || borderless ? "transparent" : colors.hover.darkGreenHover,
        },
      },
    })
  )();

  return (
    <div
      className={`${styles.wrapper} ${innerStyles.button}`}
      onClick={onClick}
      style={style}
    >
      <Preloader
        color={outline ? colors.darkGreen : "white"}
        style={{ position: "absolute", left: 20 }}
        show={loading || false}
      />
      {leftIcon && (
        <Iconly
          name={leftIcon}
          color={outline || borderless ? colors.darkGreen : "white"}
        />
      )}
      <span
        style={{ marginLeft: leftIcon ? 5 : 0, marginRight: rightIcon ? 5 : 0 }}
      >
        {text}
      </span>
      {rightIcon && (
        <Iconly
          name={rightIcon}
          color={outline || borderless ? colors.darkGreen : "white"}
        />
      )}
    </div>
  );
};
