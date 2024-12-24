"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { redirect } from "next/navigation"
import { NewProjectModal } from "../NewProjectModal/NewProjectModal"

export function Header() {

  return (
    <div className="flex justify-between mb-10">
      <div className="flex">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => redirect("/home")}
        >
          <ChevronLeft />
        </Button>

        <h3 className="font-bold text-2xl">Listagem dos Projetos</h3>
      </div>
      <NewProjectModal />
    </div>
  )
}