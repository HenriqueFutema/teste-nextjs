"use client"

import React, { createContext, useContext } from 'react';
import { IProjectsContext, IProjectsProviderProps } from './types';

const ProjectsContext = createContext<IProjectsContext | undefined>(undefined);

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
};

export const ProjectsProvider: React.FC<IProjectsProviderProps> = ({ children, initialData }) => {

  return (
    <ProjectsContext.Provider value={{
      projects: initialData.projects,
      counter: initialData.counter
    }}>
      {children}
    </ProjectsContext.Provider>
  );
};
