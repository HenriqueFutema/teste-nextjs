"use client"

import { useProjectDetails } from "@/app/contexts/ProjectDetailsContext/ProjectDetailsContext"
import { TaskCard } from "../TaskCard/TaskCard"

export function TasksList() {
  const { tasks } = useProjectDetails()

  return (
    <div className="w-full grid grid-cols-3 gap-6 mt-6">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </div>
  )
}