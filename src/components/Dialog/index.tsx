import React from "react";
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
  onClose,
  style,
  buttons,
  ...props
}) => {
  const styles = useStyles();
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
          className={styles.wrapper}
          onClick={onClose}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 1.2 }}
            transition={{ duration: 0.15 }}
            animate={{ opacity: 1, scale: 1 }}
            className={styles.form}
            style={style}
            exit={{ scale: 1.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.titleBar}>{title}</div>
            <div className={styles.content}>{props.children}</div>
            <div style={{ float: "right", display: "flex" }}>
              {buttons?.map((button) => {
                return <Button {...button} />;
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
