
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
  id: number,
  name: string,
  description: string,
  responsible: string,
  initialDate: Date,
  endDate: Date,
  createdAt: Date,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tasks: any[]
}

interface ICounter {
  [key: string]: number
}