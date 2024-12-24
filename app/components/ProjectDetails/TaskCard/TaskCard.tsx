"use client"
import { useState } from "react"

import api from "../../../services/axiosInstance"

import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "@/components/ui/card"
import { ITaskCardProps } from "./types"
import { Checkbox } from "@/components/ui/checkbox"

export function TaskCard({
  task
}: ITaskCardProps) {
  const { id, title } = task
  const [isDone, setIsDone] = useState(task.isDone)

  async function handleCheckIsDone(value: boolean) {
    setIsDone(value)
    await api.put(`/tasks/${id}`, { isDone: value })
  }

  return (
    <Card className="">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className={isDone ? "line-through text-gray-500" : ""}>{title}</CardTitle>
        <Checkbox id="done" checked={isDone} onCheckedChange={(value: boolean) => handleCheckIsDone(value)} />
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-end">
      </CardFooter>
    </Card>
  )
}