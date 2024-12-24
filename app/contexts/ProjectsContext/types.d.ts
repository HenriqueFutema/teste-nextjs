
export interface IProjectsContext {
  projects: IProject[];
  counter: ICounter;
  setCounter: (counter) => void;
  setProjects: (projects) => void;
}

export interface IProjectsProviderProps {
  children: ReactNode;
  initialData: {
    projects: IProject[];
  }
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  responsible: string;
  initialDate: Date;
  endDate: Date;
  createdAt: Date;
  tasks: ITask[];
  comments: IComment[];
}

interface ITask {
  id: number;
  title: string;
  isDone: boolean;
  projectId: number;
  createdAt: Date;
}

interface IComment {
  id: number;
  author: string;
  content: string;
  projectId: number;
  createdAt: Date;
}

interface ICounter {
  [key: string]: number
}