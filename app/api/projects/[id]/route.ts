import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/db";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id: projectId } = await params

  try {
    const project = await prisma.project.findUnique({
      where: {
        id: Number(projectId)
      },
      include: {
        tasks: {
          orderBy: {
            createdAt: 'desc',
          },
        },
        comments: {
          orderBy: {
            createdAt: 'desc',
          },
        }
      }
    })
    return NextResponse.json({ project })
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
