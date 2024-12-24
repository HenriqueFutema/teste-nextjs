"use client"

import { useProjectDetails } from "@/app/contexts/ProjectDetailsContext/ProjectDetailsContext"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { redirect } from "next/navigation"

export function Header() {
  const { project } = useProjectDetails()

  return (
    <div className="flex">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => redirect("/projects")}
      >
        <ChevronLeft />
      </Button>
      <div className="mb-10">
        <h3 className="font-bold text-2xl">{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  )
}