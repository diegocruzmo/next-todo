import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ todoId: string }> }
) {
  try {
    const { userId } = await auth();
    const { todoId } = await params;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const todo = await prisma.todo.findUnique({
      where: {
        userId: userId,
        id: todoId,
      },
    });

    return NextResponse.json(todo);
  } catch (error) {
    console.log("[TODO]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ todoId: string }> }
) {
  try {
    const { userId } = await auth();
    const { todoId } = await params;

    const body = await req.json();
    const data = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const todo = await prisma.todo.update({
      where: {
        userId: userId,
        id: todoId,
      },
      data: {
        ...data,
      },
    });

    return NextResponse.json(todo);
  } catch (error) {
    console.log("[TODO]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ todoId: string }> }
) {
  try {
    const { userId } = await auth();
    const { todoId } = await params;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const todo = await prisma.todo.delete({
      where: {
        userId: userId,
        id: todoId,
      },
    });

    return NextResponse.json(todo);
  } catch (error) {
    console.log("[TODO]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
