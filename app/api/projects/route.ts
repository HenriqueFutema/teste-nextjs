import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/db";

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        tasks: true,
        comments: true
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    return NextResponse.json({ projects })
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

export async function POST(req: NextRequest) {
  const {
    name, description, responsible, initialDate, endDate
  } = await req.json()

  try {
    const project = await prisma.project.create({
      data: {
        name, description, responsible, initialDate, endDate
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