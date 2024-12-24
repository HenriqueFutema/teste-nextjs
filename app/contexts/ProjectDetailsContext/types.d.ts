import { IComment, IProject, ITask } from "../ProjectsContext/types";

export interface IProjectDetailsContext {
  project: IProject;
  tasks: ITask[];
  comments: IComment[];
  setTasks: (tasks) => void;
  setComments: (comments) => void;
}

export interface IProjectDetailsProviderProps {
  children: ReactNode;
  initialData: {
    project: IProject;
  }
}
