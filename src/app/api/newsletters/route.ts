import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const newsletters = await prisma.newsletter.findMany({
      orderBy: {
        receivedAt: "desc",
      },
      select: {
        id: true,
        subject: true,
        htmlContent: true,
        receivedAt: true,
      },
    });

    return NextResponse.json(newsletters);
  } catch (error) {
    console.error("Error fetching newsletters:", error);
    return NextResponse.json(
      { message: "Error fetching newsletters" },
      { status: 500 },
    );
  }
}
