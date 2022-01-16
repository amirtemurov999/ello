import { useStyles } from "./hooks/useStyles";
import { menuItems } from "../../constants/menuItems";
import { Iconly } from "../../components/Iconly";
import { colors } from "../../constants/colors";
import { useState } from "react";
import { Button, Input } from "../../components";
import { Dialog } from "../../components/Dialog";
export const Sidebar = () => {
  const styles = useStyles();
  const [visibleDialog, setVisibleDialog] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<number>(-1);
  return (
    <div className={styles.wrapper}>
      <Dialog
        show={visibleDialog}
        title="New project"
        onClose={() => setVisibleDialog(false)}
        style={{ width: 500 }}
        buttons={[
          {
            text: "Create project",
            onClick: () => {
              console.log("Salom");
            },
          },
        ]}
      >
        <Input placeholder="Project name..." />
      </Dialog>
      <div className={styles.logoSection}>
        {menuItems.Admin.items.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`${styles.menuItem} ${
                activeItem == idx && styles.menuItemActive
              }`}
              onClick={() => setActiveItem(idx)}
            >
              {item.icon && (
                <Iconly
                  name={item.icon}
                  color={activeItem == idx ? "white" : colors.textColor}
                  style={{ marginRight: 16 }}
                />
              )}
              {item.text == "---" ? (
                <div className={styles.splitter}></div>
              ) : (
                <span>{item.text}</span>
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.projects}>Menu items</div>
      <Button
        text="New project"
        leftIcon="Plus"
        onClick={() => setVisibleDialog(true)}
        full
      />
    </div>
  );
};
