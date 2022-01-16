import { Dialog } from "../../components/Dialog";
import { useSelector } from "react-redux";
import { IAppreducers } from "../../store/rootReducer";
import { useEffect, useState } from "react";
import { useStyles } from "../hooks/useStyles";
import { Input } from "../../components";
import { RichEdit } from "../../components/RichEdit";
interface INewTaskDialog {
  show: boolean;
  onClose: () => {} | void;
}
export const NewTaskDialog: React.FC<INewTaskDialog> = ({ show, onClose }) => {
  const styles = useStyles();
  const red = useSelector((state: IAppreducers) => state.auth.loginState);
  return (
    <Dialog show={show} onClose={onClose} title="Create new task on">
      <div className={styles.wrapper}>
        <div className={styles.leftSection}>
          <Input placeholder="Task title" />
          <RichEdit />
        </div>
        <div className={styles.rightSection}>asd</div>
      </div>
    </Dialog>
  );
};
