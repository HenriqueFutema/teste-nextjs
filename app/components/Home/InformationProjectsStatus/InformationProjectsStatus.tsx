"use client"

import { useProjects } from "@/app/contexts/ProjectsContext/ProjectsContext"
import { InformationContent } from "../InformationContent/InformationContent"

export function InformationProjectsStatus() {
  const { counter } = useProjects()

  return (
    <div className="w-full flex flex-col md:flex-row mt-8">
      <div className="border border-gray-400 rounded-t-xl md:rounded-l-xl md:rounded-tr-none flex-grow px-6 py-2">
        <InformationContent
          title="Projetos Ativos"
          value={counter.activeProjects}
        />
      </div>
      <div className="border border-gray-400 flex-grow px-6 py-2">
        <InformationContent
          title="Projetos Concluídos"
          value={counter.completedProjects}
        />
      </div>
      <div className="border border-gray-400 rounded-b-xl md:rounded-r-xl md:rounded-b-none flex-grow px-6 py-2">
        <InformationContent
          title="Projetos Atrasados"
          value={counter.lateProjects}
        />
      </div>
    </div>
  )
}