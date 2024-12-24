"use client"

import { useState } from 'react';
import { useParams } from "next/navigation";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IFormNewTaskProps, IFormTaskData } from './types';
import { taskDataSchema } from './schema';
import { DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import api from "../../../services/axiosInstance"
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useProjectDetails } from '@/app/contexts/ProjectDetailsContext/ProjectDetailsContext';

export function FormNewTask({
  onCloseModal
}: IFormNewTaskProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormTaskData>({
    resolver: yupResolver(taskDataSchema),
  });
  const { id } = useParams();
  const { toast } = useToast()
  const { tasks, setTasks } = useProjectDetails();
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(data: IFormTaskData) {
    setIsLoading(true)
    const { title } = data

    api.post(`/projects/${id}/tasks`, {
      title
    }).then((response) => {
      const { data } = response
      const { task } = data
      setTasks([task, ...tasks])

      toast({
        title: "Criado com sucesso",
        description: "Nova tarefa foi criado com sucesso",
      })
      onCloseModal()
    }).catch((err) => {
      console.log(err)
      toast({
        title: "Erro ao criar",
        description: "Não foi possível criar a tarefa",
      })
    }).finally(() => {
      setIsLoading(false)
    })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
      <div>
        <Label htmlFor="name" className="text-right">
          Título
        </Label>
        <Input
          {...register("title")}
          id="name"
          className="col-span-3"
        />
        {errors.title && <p className="text-xs mt-1 text-rose-800">{errors.title.message}</p>}
      </div>
      <DialogFooter>
        <Button type="submit" disabled={isLoading}>
          {isLoading && <Loader2 className="animate-spin" />}
          Salvar
        </Button>
      </DialogFooter>
    </form>

  )
}