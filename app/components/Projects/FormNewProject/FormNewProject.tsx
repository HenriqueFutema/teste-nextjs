"use client"

import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IFormNewProjectProps, IFormProjectData } from './types';
import { useForm } from 'react-hook-form';
import { projectDataSchema } from './schema';
import { DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import api from "../../../services/axiosInstance"
import { DatePicker } from '../../common/DatePicker/DatePicker';
import { FormSelect } from '../../common/FormSelect/FormSelect';
import { optionsResponsible } from './constants';
import { Loader2 } from 'lucide-react';
import { useProjects } from '@/app/contexts/ProjectsContext/ProjectsContext';
import { useToast } from '@/hooks/use-toast';

export function FormNewProject({
  onCloseModal
}: IFormNewProjectProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormProjectData>({
    resolver: yupResolver(projectDataSchema),
  });
  const { toast } = useToast()
  const { projects, setProjects } = useProjects();
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(data: IFormProjectData) {
    setIsLoading(true)
    const { name, description, responsible, initialDate, endDate } = data

    api.post('/projects', {
      name,
      description,
      responsible,
      initialDate,
      endDate,
    }).then((response) => {
      const { data } = response
      const { project } = data
      setProjects([{ ...project, tasks: [] }, ...projects])

      toast({
        title: "Criado com sucesso",
        description: "Novo projeto foi criado com sucesso",
      })
      onCloseModal()
    }).catch((err) => {
      console.log(err)
      toast({
        title: "Erro ao criar",
        description: "Não foi possível criar o projeto",
      })
    }).finally(() => {
      setIsLoading(false)
    })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
      <div>
        <Label htmlFor="name" className="text-right">
          Nome
        </Label>
        <Input
          {...register("name")}
          id="name"
          className="col-span-3"
        />
        {errors.name && <p className="text-xs mt-1 text-rose-800">{errors.name.message}</p>}
      </div>
      <div>
        <Label htmlFor="description" className="text-right">
          Descrição
        </Label>
        <Input
          {...register("description")}
          id="description"
          className="col-span-3"
        />
        {errors.description && <p className="text-xs mt-1 text-rose-800">{errors.description.message}</p>}
      </div>
      <div className="flex gap-4">
        <div className="w-1/2">
          <DatePicker
            label="Data Inicial"
            control={control}
            errors={errors}
            name="initialDate"
          />
        </div>
        <div className="w-1/2">
          <DatePicker
            label="Data Final"
            control={control}
            errors={errors}
            name="endDate"
          />
        </div>
      </div>
      <div>
        <FormSelect
          label="Responsável"
          name="responsible"
          control={control}
          errors={errors}
          options={optionsResponsible}
        />
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