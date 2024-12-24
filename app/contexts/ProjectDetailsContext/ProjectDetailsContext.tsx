"use client"

import React, { createContext, useContext, useState } from 'react';
import { IProjectDetailsContext, IProjectDetailsProviderProps } from './types';

const ProjectDetailsContext = createContext<IProjectDetailsContext | undefined>(undefined);

export const useProjectDetails = () => {
  const context = useContext(ProjectDetailsContext);
  if (!context) {
    throw new Error('useProjectDetails must be used within a ProjectDetailsProvider');
  }
  return context;
};

export const ProjectDetailsProvider: React.FC<IProjectDetailsProviderProps> = ({ children, initialData }) => {
  const [project] = useState(initialData.project)
  const [tasks, setTasks] = useState(initialData.project.tasks)
  const [comments, setComments] = useState(initialData.project.comments)

  return (
    <ProjectDetailsContext.Provider value={{
      project,
      tasks,
      comments,
      setTasks,
      setComments
    }}>
      {children}
    </ProjectDetailsContext.Provider>
  );
};
