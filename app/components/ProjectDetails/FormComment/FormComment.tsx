"use client"

import { useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from "react-hook-form";
import api from "../../../services/axiosInstance"
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useProjectDetails } from "@/app/contexts/ProjectDetailsContext/ProjectDetailsContext"
import { commentDataSchema } from "./schema";
import { IFormCommentData, IFormCommentProps } from "./types";
import { useParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function FormComment({
  author
}: IFormCommentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IFormCommentData>({
    resolver: yupResolver(commentDataSchema),
  });
  const { id } = useParams()
  const { toast } = useToast()
  const { comments, setComments } = useProjectDetails();
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(data: IFormCommentData) {
    setIsLoading(true)
    const { content } = data

    api.post(`/projects/${id}/comments`, {
      content,
      author
    }).then((response) => {
      const { data } = response
      const { comment } = data
      setComments([comment, ...comments])

      toast({
        title: "Criado com sucesso",
        description: "Comentário foi criado com sucesso",
      })
      reset();
    }).catch((err) => {
      console.log(err)
      toast({
        title: "Erro ao criar",
        description: "Não foi possível criar o comentário",
      })
    }).finally(() => {
      setIsLoading(false)
    })
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-4 mt-10">
      <div>
        <Label htmlFor="content" className="text-right">
          Novo comentário:
        </Label>
        <Textarea
          {...register("content")}
          id="content"
        />
        {errors.content && <p className="text-xs mt-1 text-rose-800">{errors.content.message}</p>}
      </div>
      <div className="w-full flex justify-end mt-4">
        <Button type="submit" disabled={isLoading}>
          {isLoading && <Loader2 className="animate-spin" />}
          Salvar
        </Button>
      </div>
    </form>
  )
}