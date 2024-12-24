"use client"

import { useProjectDetails } from "@/app/contexts/ProjectDetailsContext/ProjectDetailsContext"
import { TaskCard } from "../TaskCard/TaskCard"
import { NewTaskModal } from "../NewTaskModal/NewTaskModal"

export function TasksList() {
  const { tasks } = useProjectDetails()

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
      <NewTaskModal />
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </div>
  )
}