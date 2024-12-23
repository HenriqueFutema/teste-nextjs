import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/db";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const {
    isDone
  } = await req.json()
  const { id } = await params

  try {
    const task = await prisma.task.update({
      where: { id: Number(id) },
      data: { isDone }
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