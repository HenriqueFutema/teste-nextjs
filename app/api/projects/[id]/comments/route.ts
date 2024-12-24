import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/db";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const {
    content,
    author
  } = await req.json()
  const { id: projectId } = await params

  try {
    const comment = await prisma.comment.create({
      data: {
        author,
        content,
        projectId: Number(projectId)
      }
    })

    return NextResponse.json({ comment })
  } catch (err) {
    return NextResponse.json(
      {
        err
      }, {
      status: 500
    }
    )
  }
}