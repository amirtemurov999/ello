import { makeStyles, createStyles } from "@mui/styles";
import React from "react";
import getIcon from "./icons";
interface IIconProps {
  name: string;
  color: string;
  wrap?: boolean;
  style?: React.CSSProperties;
  bgColor?: string;
  size?: "sm" | "md" | "lg";
}
export const Iconly: React.FC<IIconProps> = ({
  name,
  color,
  wrap = false,
  style,
  bgColor,
  size = "lg",
}) => {
  const styles = makeStyles((theme) =>
    createStyles({
      iconWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        background: bgColor,
        borderRadius: "50%",
        width: "fit-content",
      },
    })
  )();
  const sizes = {
    md: 20,
    lg: 24,
    sm: 16,
  };
  return (
    <div
      className={wrap ? styles.iconWrapper : ""}
      style={{ lineHeight: 0, ...style }}
    >
      <svg
        width={sizes[size]}
        height={sizes[size]}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {getIcon(color, name)}
      </svg>
    </div>
  );
};
