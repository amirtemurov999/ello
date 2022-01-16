import React from "react";
import { Iconly } from "../Iconly";
import { useStyles } from "./hooks/useStyles";
interface IPreloaderProps {
  color: string;
  style?: React.CSSProperties;
  animate: boolean;
}
export const Preloader: React.FC<IPreloaderProps> = ({
  color,
  style,
  animate = false,
}) => {
  const styles = useStyles();
  return animate ? (
    <div className={styles.wrapper} style={style}>
      <Iconly name="Loader" color={color} />
    </div>
  ) : null;
};
