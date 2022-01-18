import { useStyles } from "./hooks/useStyles";
import { Sidebar } from "../../sections/Sidebar";
import { Header } from "../../sections/Header";
import { Canban } from "../../components/Canban";
import { NewTaskDialog } from "../../sections/Dialogs/TaskDialog";
import { RichEdit } from "../../components/RichEdit";
import { ITask, TaskPriority, TaskState, TaskType } from "../../interfaces";
import { Dropdown } from "../../components/Dropdown";
import { FC, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { IAppreducers } from "../../store/rootReducer";
import { actions as taskActions } from "../../store/reducers/taskReducer";
import { Splash } from "../../components/SplashScreen";
export const Home: FC<TPropsFromRedux> = ({ taskState, tasks, fetchTasks }) => {
  const [showNewTaskDialog, setShowNewTaskDialog] = useState<boolean>(false);
  const styles = useStyles();
  useEffect(() => {
    fetchTasks();
  }, []);
  useEffect(() => {
    console.log(tasks["Completed"]);
  }, [tasks]);
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
              tasks={tasks["Plan"] && {}}
              onNewClick={() => setShowNewTaskDialog(true)}
            />
            <Canban
              title="In progress"
              tasks={tasks["In progress"] && {}}
              onNewClick={() => setShowNewTaskDialog(true)}
            />
            <Canban
              title="To verify"
              tasks={tasks["To verify"] && {}}
              onNewClick={() => setShowNewTaskDialog(true)}
            />
            <Canban
              title="Completed"
              tasks={tasks["Completed"] && {}}
              onNewClick={() => setShowNewTaskDialog(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const connector = connect(
  (state: IAppreducers) => ({
    taskState: state.tasks.tasksState,
    tasks: state.tasks.tasks,
  }),
  {
    fetchTasks: taskActions.fetchTasks,
  }
);

type TPropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Home);
