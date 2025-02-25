import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    console.log({
      email: body?.email,
      userName: body?.userName,
      password: body?.password,
    });

    const user = await prisma.user.create({
      data: {
        email: body?.email,
        userName: body?.userName,
        password: body?.password,
      },
    });
    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json(err);
  }
};
