import data from "@/data/bla.json";

import { NextResponse } from "next/server";

export async function GET() {
  if (!data) {
    return NextResponse.json({ message: "Data not found" }, { status: 404 });
  }
  return NextResponse.json(data, { status: 200 });
}
