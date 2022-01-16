export enum Positions {
  Top = "top",
  Bottom = "bottom",
}

export interface IMenuSection {
  [type: string]: {
    position: Positions;
    title?: string;
    items: {
      text: string;
      icon?: string;
      page?: string;
    }[];
  };
}
export enum TaskType {
  Error = "error",
  Milestone = "milestone",
  Task = "task",
}

export interface IPartner {
  username: string;
  email: string;
  avatar: string;
}

export enum TaskState {
  Do = "do",
  Describe = "describe",
  InProgress = "in progress",
  ToVerify = "to verify",
  Completed = "completed",
}
export enum TaskPriority {
  Default = "default",
  Critic = "kiritik",
  Serious = "serious",
  Emergency = "emergency",
  Minor = "minor",
}
export interface ITask {
  deadline: string;
  assigne: IPartner;
  title: string;
  content: string;
  type: TaskType;
  priority: TaskPriority;
  grade: string;
  state: TaskState;
}
