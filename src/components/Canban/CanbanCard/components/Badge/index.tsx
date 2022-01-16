import React from "react";
import { colors } from "../../../../../constants/colors";
import { TaskPriority } from "../../../../../interfaces";
import { Iconly } from "../../../../Iconly";

interface IBadgeProps {
  text: string;
  icon: string;
  priority: TaskPriority;
}
export const Badge: React.FC<IBadgeProps> = ({ text, icon, priority }) => {
  const color = {
    [TaskPriority.Default]: "#2FA276",
    [TaskPriority.Minor]: "#2E4ACD7D",
    [TaskPriority.Critic]: "#B900D7",
    [TaskPriority.Serious]: "#FFC107",
    [TaskPriority.Emergency]: "#FC3637",
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        paddingLeft: 4,
        paddingRight: 7,
        borderRadius: 4,
        backgroundColor: color[priority],
        color: "white",
      }}
    >
      <Iconly
        style={{ transform: "scale(0.7)" }}
        name={icon}
        color="white"
      ></Iconly>
      <span>{text}</span>
    </div>
  );
};
