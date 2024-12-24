"use client"

import { redirect } from "next/navigation";

import { BarChart, Bar, ResponsiveContainer, XAxis } from 'recharts';
import { useProjects } from "@/app/contexts/ProjectsContext/ProjectsContext"
import { Button } from '@/components/ui/button';

export function ProjectsChart() {
  const { counter } = useProjects()

  if (!counter) return <></>

  const data = Object.keys(counter).map((key) => {
    const parseLabel = {
      "activeProjects": "Ativos",
      "completedProjects": "Concluídos",
      "lateProjects": "Atrasados"
    }

    return {
      label: parseLabel[key as keyof typeof parseLabel],
      value: counter[key]
    }
  });

  return (
    <div className='w-full md:w-2/4 h-60 my-20 md:flex items-end'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <XAxis dataKey="label" />
          <Bar dataKey="value" fill="#434155" />
        </BarChart>
      </ResponsiveContainer>
      <div className="px-10">
        <Button
          onClick={() => redirect("/projects")}
          variant="link"
        >
          Acessar projetos
        </Button>
      </div>
    </div>
  )
}