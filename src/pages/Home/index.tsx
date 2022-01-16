import { useStyles } from "./hooks/useStyles";
import { Sidebar } from "../../sections/Sidebar";
import { Header } from "../../sections/Header";
import { Canban } from "../../components/Canban";
import { NewTaskDialog } from "../../sections/Dialogs/TaskDialog";
import { RichEdit } from "../../components/RichEdit";
import { ITask, TaskPriority, TaskState, TaskType } from "../../interfaces";
import { Dropdown } from "../../components/Dropdown";
import { useState } from "react";
export const Home = () => {
  const [showNewTaskDialog, setShowNewTaskDialog] = useState<boolean>(false);
  const styles = useStyles();
  const tasks: { [key: string]: ITask } = {
    a: {
      deadline: "Mart 26",
      assigne: {
        avatar: "",
        username: "Amir",
        email: "Amir@gmail.com",
      },
      title:
        "[Metaco] - Create draft design for User Journey earning coin on Apps",
      content:
        "У нас лишний раз вызывается попап локейшн в каталоге. Надо его вызывать только, когда нет адреса в каталоге",
      grade: "2H",
      priority: TaskPriority.Emergency,
      state: TaskState.Do,
      type: TaskType.Task,
    },
    b: {
      deadline: "Aprel 5",
      assigne: {
        avatar: "",
        username: "Amir",
        email: "Amir@gmail.com",
      },
      title:
        "[Metaco] - Create draft design for User Journey earning coin on Apps",
      content:
        "У нас лишний раз вызывается попап локейшн в каталоге. Надо его вызывать только, когда нет адреса в каталоге",
      grade: "2H",
      priority: TaskPriority.Default,
      state: TaskState.Do,
      type: TaskType.Task,
    },
  };
  return (
    <div className={styles.wrapper}>
      <NewTaskDialog
        show={showNewTaskDialog}
        onClose={() => setShowNewTaskDialog(false)}
      />
      <Sidebar />
      <div className={styles.rightSection}>
        <Header title="Daily task" />
        <div className={styles.canbanWrapper}>
          <div className={styles.canbansContainer}>
            <Canban
              title="Plan"
              tasks={tasks}
              onNewClick={() => setShowNewTaskDialog(true)}
            />
            <Canban
              title="In progress"
              tasks={{}}
              onNewClick={() => setShowNewTaskDialog(true)}
            />
            <Canban
              title="To verify"
              tasks={{}}
              onNewClick={() => setShowNewTaskDialog(true)}
            />
            <Canban
              title="Completed"
              tasks={{}}
              onNewClick={() => setShowNewTaskDialog(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
