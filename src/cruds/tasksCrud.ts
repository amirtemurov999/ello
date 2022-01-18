import axios from "axios";
import { ADD_TASK_URL, GET_TASKS_URL } from "../constants/apiUrls";
import { ITask } from "../interfaces";

export function getTasks() {
  return axios.post(GET_TASKS_URL);
}

export function addTask(request: ITask) {
  const formData = new FormData();
  formData.append("title", request.title);
  formData.append("content", request.content);
  formData.append("deadline", request.deadline);
  formData.append("assigne", request.assigne.email);
  formData.append("type", request.type);
  formData.append("priority", request.priority);
  formData.append("grade", request.grade);
  formData.append("state", request.state);
  return axios.post(ADD_TASK_URL, formData);
}

export function fetchTasks() {
  axios.get(GET_TASKS_URL).then((e) => {
    console.log(e);
  });
}
