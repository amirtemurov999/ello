import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getTasks } from "../../cruds/tasksCrud";
import { ITask, TaskPriority, TaskState, TaskType } from "../../interfaces";
import { createAction } from "../../utils/actionHelper";

enum ActionTypes {
  ADD_TASK_BUFER = "task/addTaskToBufer",
  CLEAR_TASK_BUFER = "task/clearTaskBufer",
  FETCH_TASKS = "tasks/fetchTasks",
  FETCH_TASKS_SUCCESS = "tasks/fetchTasksSuccess",
  FETCH_TASKS_ERROR = "tasks/fetchTasksError",
}
interface ITasksState {
  loading: boolean;
  success: boolean;
  error: boolean;
}
interface ITasks {
  [key: string]: { [key: string]: ITask };
}
export interface ITaskState {
  taskId: number;
  tasks: ITasks;
  tasksState: ITasksState;
}

interface IAction {
  payload: number | ITasks;
  type: ActionTypes;
}
interface IResponseTask {
  status: string;
  data: { [key: string]: ITask };
}
const TaskStateBufer = {
  loading: false,
  success: false,
  error: false,
};
const initialState: ITaskState = {
  taskId: -1,
  tasks: {},
  tasksState: TaskStateBufer,
};

export const taskReducer = (
  state = initialState,
  action: IAction
): typeof initialState => {
  switch (action.type) {
    case ActionTypes.ADD_TASK_BUFER: {
      return {
        ...state,
        taskId: action.payload as number,
      };
    }
    case ActionTypes.FETCH_TASKS: {
      return {
        ...state,
        tasksState: {
          loading: true,
          success: false,
          error: false,
        },
      };
    }
    case ActionTypes.FETCH_TASKS_SUCCESS: {
      return {
        ...state,
        tasks: action.payload as ITasks,
        tasksState: {
          loading: false,
          success: true,
          error: false,
        },
      };
    }
    case ActionTypes.FETCH_TASKS_ERROR: {
      return {
        ...state,
        tasksState: {
          loading: false,
          success: false,
          error: true,
        },
      };
    }
    default: {
      return { ...state, taskId: -1 };
    }
  }
};

export const actions = {
  fetchTasks: () => createAction(ActionTypes.FETCH_TASKS),
  fetchTasksSuccess: (payload: { [key: string]: ITask }) =>
    createAction(ActionTypes.FETCH_TASKS_SUCCESS, payload),
  fetchTasksError: () => createAction(ActionTypes.FETCH_TASKS_ERROR),
};

function* fetchTaskSaga() {
  try {
    const { data }: { data: IResponseTask } = yield call(() => {
      return getTasks();
    });
    yield put(actions.fetchTasksSuccess(data.data));
  } catch {
    put(actions.fetchTasksError());
  }
}

export function* saga() {
  yield takeEvery<ReturnType<typeof actions.fetchTasks>>(
    ActionTypes.FETCH_TASKS,
    fetchTaskSaga
  );
}
