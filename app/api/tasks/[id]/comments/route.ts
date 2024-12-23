import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/db";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const {
    content
  } = await req.json()
  const { id: taskId } = await params

  try {
    const task = await prisma.comment.create({
      data: {
        content,
        taskId: Number(taskId)
      }
    })

    return NextResponse.json({ task })
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