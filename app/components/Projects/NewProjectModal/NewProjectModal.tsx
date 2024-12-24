"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { FormNewProject } from "../FormNewProject/FormNewProject"

export function NewProjectModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Novo Projeto</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>Crie um novo projeto</DialogTitle>
          <DialogDescription>
            Preencha o formulário para criar seu novo projeto
          </DialogDescription>
        </DialogHeader>
        <FormNewProject onCloseModal={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}