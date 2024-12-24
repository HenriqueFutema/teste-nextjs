"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { FormNewTask } from "../FormNewTask/FormNewTask"

export function NewTaskModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card>
          <CardContent className="h-full p-6 flex items-center justify-center">
            <Button variant="ghost" size="icon">
              <Plus />
            </Button>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>Crie uma nova tarefa</DialogTitle>
          <DialogDescription>
            Preencha o formulário para criar sua nova tarefa
          </DialogDescription>
        </DialogHeader>
        <FormNewTask onCloseModal={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}