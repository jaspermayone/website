import { NextResponse } from "next/server";

export async function GET() {
  // Note: The actual music data fetching will happen client-side
  // This endpoint will be used to provide additional server-side functionalities if needed
  return NextResponse.json({ status: "Ready to receive music data" });
}
