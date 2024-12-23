
import { IInformationContentProps } from "./types"

export function InformationContent({
  title,
  value
}: IInformationContentProps) {

  return (
    <>
      <h4 className="text-xl font-semibold w-4/5">{title}</h4>
      <div className="flex">
        <h2 className="text-5xl font-bold text-basic mt-4">{value}</h2>
      </div>
    </>
  )
}