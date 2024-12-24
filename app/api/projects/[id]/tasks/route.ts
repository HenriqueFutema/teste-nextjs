import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/db";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id: projectId } = await params

  try {
    const tasks = await prisma.task.findMany({
      where: { projectId: Number(projectId) }
    })
    return NextResponse.json({ tasks })
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

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const {
    title, isDone
  } = await req.json()
  const { id: projectId } = await params

  try {
    const task = await prisma.task.create({
      data: {
        title,
        isDone,
        projectId: Number(projectId)
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