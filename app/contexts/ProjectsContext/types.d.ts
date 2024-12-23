
export interface IProjectsContext {
  projects: IProject[];
  counter: ICounter;
}

export interface IProjectsProviderProps {
  children: ReactNode;
  initialData: {
    projects: IProject[];
    counter: ICounter;
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