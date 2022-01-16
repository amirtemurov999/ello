import { ITask, TaskPriority, TaskState, TaskType } from "../../interfaces";
import { createAction } from "../../utils/actionHelper";

enum ActionTypes {
  ADD_TASK_BUFER = "task/addTaskToBufer",
  CLEAR_TASK_BUFER = "task/clearTaskBufer",
}

export interface IState {
  taskId: number;
}

interface IAction {
  payload: number;
  type: ActionTypes;
}

const initialState: IState = {
  taskId: -1,
};

export const taskReducer = (
  state = initialState,
  action: IAction
): typeof initialState => {
  switch (action.type) {
    case ActionTypes.ADD_TASK_BUFER: {
      return {
        ...state,
        taskId: action.payload,
      };
    }
    default: {
      return { ...state, taskId: -1 };
    }
  }
};
export type TCustomActions = typeof actions;

export const actions = {};
