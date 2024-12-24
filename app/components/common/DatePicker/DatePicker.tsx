"use client"

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Controller } from "react-hook-form";
import { IDatePicker } from "./types";


export function DatePicker({
  label,
  name,
  control,
  errors
}: IDatePicker) {
  return (
    <>
      <Label htmlFor="date" className="text-right">
        {label}
      </Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left">
                <CalendarIcon className="mr-2 h-4 w-4" />

                {field.value ? field.value.toLocaleDateString() : "Selecione uma data"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
              />
            </PopoverContent>
          </Popover>
        )}
      />
      {errors[name] && <p className="text-xs mt-1 text-rose-800">{errors[name].message}</p>}
    </>
  )
}