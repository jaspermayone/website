import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Try to create a test newsletter
    const test = await prisma.newsletter.create({
      data: {
        subject: "Test Newsletter",
        content: "Test content",
        htmlContent: "<p>Test content</p>",
        fromEmail: "test@example.com",
        receivedAt: new Date(),
      },
    });

    // Try to read all newsletters
    const all = await prisma.newsletter.findMany();

    return NextResponse.json({
      message: "Database connection successful",
      testId: test.id,
      count: all.length,
    });
  } catch (error) {
    console.error("Database test failed:", error);
    return NextResponse.json(
      {
        message: "Database test failed",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
