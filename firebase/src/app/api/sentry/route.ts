import { NextResponse } from "next/server";

export async function GET() {
  try {
    throw new Error("Back-end error raised from button click");
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
