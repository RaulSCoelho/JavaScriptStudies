import { usersApi } from "@/lib/prisma/users";
import { User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

type UserRequest = Omit<NextRequest, "body"> & {
  body: User;
};

interface Params {
  params: {
    id: string;
  };
}

export async function GET(req: NextRequest, { params: { id } }: Params) {
  const { user, error } = await usersApi.getById(id);

  if (error) return NextResponse.json({ error }, { status: 400 });
  return NextResponse.json({ user });
}

export async function PUT(req: UserRequest, { params: { id } }: Params) {
  const body = await req.json();
  const { user, error } = await usersApi.update({ ...body, id });

  if (error) return NextResponse.json({ error }, { status: 400 });
  return NextResponse.json({ user });
}

export async function DELETE(req: NextRequest, { params: { id } }: Params) {
  const { error } = await usersApi.delete(id);

  if (error) return NextResponse.json({ error }, { status: 400 });
  return NextResponse.json({ success: "User deleted successfully" });
}
