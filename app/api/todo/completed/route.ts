import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const completedCount = await prisma.todo.count({
      where: {
        userId,
        status: true,
      },
    });

    return NextResponse.json({ completedCount });
  } catch (error) {
    console.log("[TODO]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
