"use client"

import React, { createContext, useContext, useState } from 'react';
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
  const [projects, setProjects] = useState(initialData.projects)


  return (
    <ProjectsContext.Provider value={{
      projects,
      counter: initialData?.counter,
      setProjects
    }}>
      {children}
    </ProjectsContext.Provider>
  );
};
