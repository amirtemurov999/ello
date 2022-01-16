import { useCallback, useState } from "react";
import { colors } from "../../constants/colors";
import { Iconly } from "../Iconly";
import { useStyles } from "./hooks/useStyles";
import { motion, AnimatePresence } from "framer-motion";
interface IDropdownProps {
  items: Array<string>;
  icon?: string | { icon: string; size: "md" | "lg" | "sm" };
  text?: string;
  renderItem?: (text: string, index: number) => {};
  onSelect?: (text: string, id: number) => {};
  bordered?: boolean;
}
export const Dropdown: React.FC<IDropdownProps> = ({
  text,
  icon,
  items,
  bordered = true,
  renderItem,
  onSelect,
}) => {
  const styles = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedText, setSelectedText] = useState<string>(text ? text : "");

  const selectItem = useCallback((item: string, index: number) => {
    setIsOpen(() => false);
    onSelect && onSelect(item, index);
    setSelectedText(() => (text ? item : ""));
  }, []);
  return (
    <div
      className={styles.wrapper}
      style={{ minWidth: bordered ? 200 : "fit-content" }}
    >
      <div
        className={`${styles.container} ${!bordered && styles.unBordered}`}
        onClick={() => setIsOpen(() => !isOpen)}
        style={
          bordered
            ? {
                backgroundColor: "white",
                boxShadow: `0 0 0 1px ${colors.darkSilver}`,
                height: 50,
              }
            : {}
        }
      >
        {selectedText && <span>{selectedText}</span>}
        {icon && (
          <Iconly
            style={{ cursor: "pointer" }}
            name={typeof icon == "string" ? icon : icon.icon}
            color={colors.textColor}
            size={typeof icon !== "string" ? icon.size : "lg"}
          />
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              transform: `translateY(30px)`,
              opacity: 0,
            }}
            animate={{
              transform: `translateY(0px)`,
              opacity: 1,
            }}
            className={styles.list}
          >
            {items.map((item, index) =>
              renderItem ? (
                <div
                  onClick={() => selectItem(item, index)}
                  className={styles.listItem}
                >
                  <span>{renderItem(item, index)}</span>
                </div>
              ) : (
                <div
                  onClick={() => selectItem(item, index)}
                  className={styles.listItem}
                >
                  <span>{item}</span>
                </div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
