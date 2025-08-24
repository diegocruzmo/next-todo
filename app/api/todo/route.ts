import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";
export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const todos = await prisma.todo.findMany({
      where: {
        userId,
      },
    });

    return NextResponse.json(todos);
  } catch (error) {
    console.log("[TODO]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    const { title, description }: { title: string; description: string } =
      await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const todo = await prisma.todo.create({
      data: {
        userId,
        title,
        description,
      },
    });

    return NextResponse.json(todo);
  } catch (error) {
    console.log("[TODO]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
