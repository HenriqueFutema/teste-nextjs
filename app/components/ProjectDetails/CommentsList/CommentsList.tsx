"use client"

import { useProjectDetails } from "@/app/contexts/ProjectDetailsContext/ProjectDetailsContext"

export function CommentsList() {
  const { comments } = useProjectDetails()

  if (comments.length < 1) {
    return (
      <p className="text-center font-xl">Nenhum comentário...</p>
    )
  }

  return (
    <div className="w-full mt-6">
      {comments.map((comment) => (
        <div key={comment.id} className="border-b p-4 w-full">
          <h3 className="font-bold text-xl">{comment.author}</h3>
          <p className="">{comment.content}</p>
        </div>
      ))}
    </div>
  )
}