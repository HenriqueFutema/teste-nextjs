"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';
import { IProject, IProjectsContext, IProjectsProviderProps } from './types';

const ProjectsContext = createContext<IProjectsContext | undefined>(undefined);

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
};

export const ProjectsProvider: React.FC<IProjectsProviderProps> = ({ children, initialData }) => {
  const [projects, setProjects] = useState(initialData.projects)
  const [counter, setCounter] = useState({
    activeProjects: 0,
    completedProjects: 0,
    lateProjects: 0,
  })

  useEffect(() => {
    const now = new Date();

    initialData.projects.forEach((project: IProject) => {
      const initialDate = new Date(project.initialDate);
      const endDate = new Date(project.endDate);

      const hasIncompleteTasks = project.tasks.some((task) => !task.isDone);
      const allTasksCompleted = project.tasks.length > 0 && project.tasks.every((task) => task.isDone);

      if (now >= initialDate && now <= endDate && hasIncompleteTasks) {
        return setCounter({ ...counter, activeProjects: ++counter.activeProjects })
      }

      if (allTasksCompleted) {
        return setCounter({ ...counter, completedProjects: ++counter.completedProjects })
      }

      return setCounter({ ...counter, lateProjects: ++counter.lateProjects })
    });
  }, [])

  return (
    <ProjectsContext.Provider value={{
      projects,
      counter,
      setCounter,
      setProjects
    }}>
      {children}
    </ProjectsContext.Provider>
  );
};
