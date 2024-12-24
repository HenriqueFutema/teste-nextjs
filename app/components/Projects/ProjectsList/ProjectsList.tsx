"use client"

import { useProjects } from "@/app/contexts/ProjectsContext/ProjectsContext"
import { ProjectCard } from "../ProjectCard/ProjectCard"

export function ProjectsList() {
  const { projects } = useProjects()

  return (
    <div className="w-full grid grid-cols-3 gap-6 mt-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  )
}