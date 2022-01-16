import { ITask } from "../../../interfaces";
import { Badge } from "./components/Badge";
import { useStyles } from "./hooks/useStyles";
import { toAbsoluteUrl } from "../../../utils/utils";
import React, { useCallback } from "react";
interface ICanbanCardProps {
  task: ITask;
}
export const CanbanCard: React.FC<ICanbanCardProps> = ({ task }) => {
  const styles = useStyles();
  const dragStart = useCallback((e: React.DragEvent) => {
    const element = e.target as HTMLDivElement;
    element.style.opacity = "0.01";
  }, []);
  const dragEnd = useCallback((e: React.DragEvent) => {
    const element = e.target as HTMLDivElement;
    element.style.opacity = "1";
  }, []);
  return (
    <div className={styles.back}>
      <div
        className={styles.wrapper}
        draggable={true}
        onDragStart={dragStart}
        onDragEnd={dragEnd}
      >
        <div className={styles.header}>
          <div className={styles.reaction}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.15 8.2L10.5 9.375C10.5 9.375 9.675 7.075 9.05 5.6C8.8 5 8 4.8 7.625 3.95C6.975 2.5 7.75 1.25 8.5 2.15C9.375 3.2 10.675 3.975 10.95 4.575C11.375 5.575 12.15 8.2 12.15 8.2Z"
                fill="#FFDD67"
              />
              <path
                d="M13.45 9.15C13.575 9.95 13.475 11.175 12.775 12.625C12.775 12.625 11.35 10.925 11.175 10.125C11.175 10.125 10.775 7.15 10.35 5.25C10.175 4.475 9.27502 4.025 9.05002 2.925C8.65002 1.025 9.85002 -0.299999 10.55 0.975001C11.35 2.45 12.7 3.7 12.875 4.475C13.175 5.8 13.3 8 13.45 9.15Z"
                fill="#FFDD67"
              />
              <path
                d="M11.35 7.65C11.35 7.65 11.225 6.525 10.8 4.625C10.625 3.85 9.72501 3.4 9.50001 2.3C9.35001 1.65 9.40001 1.05 9.57501 0.625C9.15001 0.95 8.80001 1.85 9.02501 2.95C9.25001 4.05 10.175 4.5 10.325 5.275C10.5 6.1 10.65 6.95 10.65 6.95L9.40001 6.475L11.35 7.65Z"
                fill="#EBA352"
              />
              <path
                d="M12.85 8.85C11.2 7.35 9.35 6.425 8.15 5.85C6.375 4.975 6.85 6.175 3.825 6.975C3.425 7.075 2.95 7.375 3.325 8.125C3.675 8.85 6.525 8.3 6.975 7.875C6.975 7.875 8.175 9.35 9.375 9.3C9.375 9.3 9.175 10.275 9.45 10.75C9.45 10.75 7.75 11.625 7.025 12.4L5.025 11.05C4.875 8.975 4.5 8.35 3.475 8.45C2.525 8.55 2.625 9.45 2.65 10.175C2.675 11.5 2.325 11.725 2.65 12.25C3.875 14.25 5.45 15.5 8.35 15.5C9.425 15.5 10.125 15.475 10.8 15.15C11.9 14.575 14.675 10.525 12.85 8.85Z"
                fill="#FFDD67"
              />
              <path
                d="M13.175 9.25C13.8 11.15 11.575 14.275 10.6 14.75C9.925 15.075 9.25 15.1 8.15 15.1C5.275 15.1 3.725 13.875 2.5 11.9C2.525 12 2.575 12.125 2.625 12.225C3.875 14.25 5.45 15.5 8.35 15.5C9.425 15.5 10.125 15.475 10.8 15.15C11.825 14.625 14.3 11.1 13.175 9.25Z"
                fill="#EBA352"
              />
              <path
                d="M4.65001 11.1C4.65001 11.1 6.52501 12.3 6.97501 12.375L5.00001 11.05C5.07501 8.95 4.47501 8.275 3.45001 8.45C3.37501 8.475 3.30001 8.475 3.22501 8.5C4.25001 8.375 4.72501 9.05 4.65001 11.1Z"
                fill="#EBA352"
              />
              <path
                d="M6.975 7.875C6.975 7.875 8.175 9.325 9.375 9.3V9.025C8.175 9.05 6.975 7.6 6.975 7.6C6.525 8.05 3.675 8.6 3.325 7.85C3.275 7.725 3.225 7.6 3.2 7.5C3.175 7.65 3.2 7.85 3.325 8.125C3.675 8.85 6.525 8.3 6.975 7.875Z"
                fill="#EBA352"
              />
            </svg>
          </div>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 6.875C11.7594 6.875 12.375 6.25939 12.375 5.5C12.375 4.74061 11.7594 4.125 11 4.125C10.2406 4.125 9.625 4.74061 9.625 5.5C9.625 6.25939 10.2406 6.875 11 6.875Z"
              fill="#999999"
            />
            <path
              d="M11 12.375C11.7594 12.375 12.375 11.7594 12.375 11C12.375 10.2406 11.7594 9.625 11 9.625C10.2406 9.625 9.625 10.2406 9.625 11C9.625 11.7594 10.2406 12.375 11 12.375Z"
              fill="#999999"
            />
            <path
              d="M11 17.875C11.7594 17.875 12.375 17.2594 12.375 16.5C12.375 15.7406 11.7594 15.125 11 15.125C10.2406 15.125 9.625 15.7406 9.625 16.5C9.625 17.2594 10.2406 17.875 11 17.875Z"
              fill="#999999"
            />
          </svg>
        </div>
        <div style={{ margin: "15px 0" }}>{task.title}</div>
        <div className={styles.footer}>
          <Badge text={task.deadline} priority={task.priority} icon="Clock" />
          <img
            width={28}
            src={
              task.assigne.avatar ||
              toAbsoluteUrl("/assets/images/avatarPlaceholder.png")
            }
          ></img>
        </div>
      </div>
    </div>
  );
};
