import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import * as auth from "./reducers/authReducer";
import * as tasks from "./reducers/taskReducer";

export interface IAppreducers {
  auth: auth.IState;
  tasks: tasks.ITaskState;
}
export const rootReducer = combineReducers<IAppreducers>({
  auth: auth.authReducer,
  tasks: tasks.taskReducer,
});

export function* rootSaga() {
  yield all([auth.saga, tasks.saga].map((saga) => fork(saga)));
}
