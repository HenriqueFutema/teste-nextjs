"use client"

import { Progress } from "@/components/ui/progress"
import { IStatusProgressProps } from "./types";
import { useEffect, useState } from "react";

export function StatusProgress({
  value
}: IStatusProgressProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-full" />
}