"use client"

import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";
import { IFormSelect } from "./types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function FormSelect({
  label,
  name,
  control,
  errors,
  options
}: IFormSelect) {
  return (
    <>
      <Label htmlFor="category" className="text-right">
        {label}
      </Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            onValueChange={(value) => field.onChange(value)}
            value={field.value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione uma categoria" />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {errors[name] && <p className="text-xs mt-1 text-rose-800">{errors[name].message}</p>}
    </>
  )
}