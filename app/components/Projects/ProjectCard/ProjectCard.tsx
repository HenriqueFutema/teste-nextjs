"use client"

import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { IProjectCardProps } from "./types"
import { Button } from "@/components/ui/button"
import { StatusProgress } from "../StatusProgress/StatusProgress"

export function ProjectCard({
  project
}: IProjectCardProps) {
  const { name, description, initialDate, endDate, tasks } = project

  function getStatusLabel() {
    const now = new Date();

    const initialDateISO = new Date(initialDate);
    const endDateISO = new Date(endDate);

    const hasIncompleteTasks = tasks.some((task) => !task.isDone);
    const allTasksCompleted = tasks.length > 0 && tasks.every((task) => task.isDone);

    if (now >= initialDateISO && now <= endDateISO && hasIncompleteTasks) {
      return "Ativo"
    }

    if (allTasksCompleted) {
      return "Concluído"
    }

    return "Atrasado"
  }

  const doneTasks = tasks.filter(task => task.isDone).length;
  const progressDoneTasks = tasks.length > 0 ? (doneTasks / tasks.length) * 100 : 0;

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <p>Status: {getStatusLabel()}</p>
          <p>{progressDoneTasks}%</p>
        </div>
        <div className="my-6">
          <StatusProgress value={progressDoneTasks} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>
          Ver Detalhes
        </Button>
      </CardFooter>
    </Card>
  )
}