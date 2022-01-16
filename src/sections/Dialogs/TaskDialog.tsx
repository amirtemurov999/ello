import { Dialog } from "../../components/Dialog";
import { useSelector } from "react-redux";
import { IAppreducers } from "../../store/rootReducer";
import { useEffect, useState } from "react";
import { useStyles } from "../hooks/useStyles";
import { Button, Input } from "../../components";
import { RichEdit } from "../../components/RichEdit";
import { Dropdown } from "../../components/Dropdown";
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
        <div className={styles.rightSection}>
          <div className={styles.propertys}>
            <span>Priority</span>
            <Dropdown
              items={["Emergency", "Critic", "Serious", "Default", "Minor"]}
              text="Default"
              bordered={false}
            />
          </div>
          <div className={styles.propertys}>
            <span>Type</span>
            <Dropdown
              items={["Error", "Milestone", "Task"]}
              text="Task"
              bordered={false}
            />
          </div>

          <div className={styles.propertys}>
            <span>State</span>
            <Dropdown
              items={["Do", "Describe", "InProgress", "ToVerify", "Completed"]}
              text="Do"
              bordered={false}
            />
          </div>
          <div className={styles.propertys}>
            <span>Executor</span>
            <Dropdown items={[]} text="Assigne" bordered={false} />
          </div>
          <div className={styles.propertys}>
            <span>Grade</span>
            <Dropdown
              items={["30m", "1H", "2H", "4H", "8H"]}
              text="30m"
              bordered={false}
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", marginTop: 25 }}>
        <Button style={{ marginRight: 10 }} text="Create" onClick={() => {}} />
        <Button text="Cancel" outline onClick={onClose} />
        <Button
          text="Create link"
          leftIcon="Link"
          borderless
          onClick={onClose}
        />
      </div>
    </Dialog>
  );
};
