import React, { useCallback, useEffect, useRef } from "react";
import { useStyles } from "./hooks/useStyles";
import { motion, AnimatePresence } from "framer-motion";
import { Button, IButtonProps } from "../Button";
interface IDialogProps {
  show: boolean;
  title: string;
  closable?: boolean;
  onClose?: () => void;
  style?: React.CSSProperties;
  buttons?: Array<IButtonProps>;
}
export const Dialog: React.FC<IDialogProps> = ({
  title,
  show = false,
  closable,
  style,
  onClose,
  buttons,
  ...props
}) => {
  const styles = useStyles();
  const detectClick = useCallback((e: KeyboardEvent) => {
    console.log(e.keyCode);
    if (e.keyCode == 27) onClose && onClose();
  }, []);
  useEffect(() => {
    if (show) document.addEventListener("keydown", detectClick);
    else document.removeEventListener("keydown", detectClick);
  }, [show]);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
          className={styles.wrapper}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 1.2 }}
            transition={{ duration: 0.15 }}
            animate={{ opacity: 1, scale: 1 }}
            className={styles.form}
            style={style}
            exit={{ scale: 1.2 }}
          >
            <div className={styles.titleBar}>{title}</div>
            <div className={styles.content}>{props.children}</div>
            {buttons && (
              <div style={{ float: "right", display: "flex", marginTop: 25 }}>
                {buttons?.map((button) => {
                  return <Button {...button} />;
                })}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
