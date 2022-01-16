import { useCallback, useEffect, useRef, useState } from "react";
import { colors } from "../../constants/colors";
import { Iconly } from "../Iconly";
import { useStyles } from "./hooks/useStyles";
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
  const key = useRef<string>(Math.random().toString().split(".")[1]);
  const styles = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedText, setSelectedText] = useState<string>(text ? text : "");
  const detectClick = useCallback(
    (e: any) => {
      console.log(e);
      if (!e.target.closest("#ref" + key.current)) setIsOpen(false);
    },
    [isOpen]
  );
  const selectItem = useCallback((item: string, index: number) => {
    setIsOpen(() => false);
    onSelect && onSelect(item, index);
    setSelectedText(() => (text ? item : ""));
  }, []);

  useEffect(() => {
    document.addEventListener("click", detectClick);
    return () => {
      document.removeEventListener("click", detectClick);
    };
  }, []);

  return (
    <div
      className={styles.wrapper}
      style={{
        width: bordered ? 200 : "fit-content",
      }}
    >
      <div
        className={`${styles.container} ${!bordered && styles.unBordered}`}
        onClick={() => setIsOpen(() => !isOpen)}
        id={"ref" + key.current}
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
      {isOpen && (
        <div className={styles.list}>
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
        </div>
      )}
    </div>
  );
};
