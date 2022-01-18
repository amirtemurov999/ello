import React from "react";
import { Iconly } from "../Iconly";
import { useStyles } from "./hooks/useStyles";
interface IPreloaderProps {
  color: string;
  style?: React.CSSProperties;
  show: boolean;
}
export const Preloader: React.FC<IPreloaderProps> = ({
  color,
  style,
  show = false,
}) => {
  const styles = useStyles();
  return show ? (
    <div className={styles.wrapper} style={style}>
      <Iconly name="Loader" color={color} />
    </div>
  ) : null;
};
