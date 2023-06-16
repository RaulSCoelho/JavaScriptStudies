import { usersApi } from "@/lib/prisma/users";
import { User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

type UserRequest = Omit<NextRequest, "body"> & {
  body: User;
};

export async function GET() {
  const { users, error } = await usersApi.get();

  if (error) return NextResponse.json({ error }, { status: 400 });
  return NextResponse.json({ users });
}

export async function POST(req: UserRequest) {
  const body = await req.json();
  const { user, error } = await usersApi.create(body);

  if (error) return NextResponse.json({ error }, { status: 400 });
  return NextResponse.json({ user });
}
