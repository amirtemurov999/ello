import React from "react";
import { colors } from "../../../constants/colors";
import { Iconly } from "../../Iconly";
import { useStyles } from "../hooks/useStyles";
interface IRichButton {
  iconName: string;
  style?: React.CSSProperties;
  command?: string;
  onClick?: (command: string) => {} | void;
  toggle?: boolean;
}
export const RichButton: React.FC<IRichButton> = ({
  iconName,
  style = {},
  onClick,
  command,
  toggle = false,
}) => {
  const styles = useStyles();
  return (
    <div
      className={styles.toolButton + " " + (toggle && styles.active)}
      style={style}
      onClick={() => onClick && onClick(command ? command : "")}
    >
      <Iconly
        name={iconName}
        color={toggle ? "white" : colors.textColor}
        size={"sm"}
      />
    </div>
  );
};
