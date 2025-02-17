// src/app/api/webhooks/postmark/route.ts
import { prisma } from "@/lib/db";
import { processNewsletterHtml } from "@/lib/processNewsletterHtml";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // console.log("Received webhook request");
  const body = await request.json();
  // console.log("Webhook body:", JSON.stringify(body, null, 2));

  const { Subject, TextBody, HtmlBody, FromFull, Date: receivedDate } = body;

  // console.log("Parsed email details:", {
  //   subject: Subject,
  //   fromEmail: FromFull?.Email,
  //   date: receivedDate,
  // });

  if (FromFull!.Email !== "jasper@jaspermayone.com") {
    console.error("Email not from Jasper, ignoring");
    return NextResponse.json(
      { message: "Email not from Jasper" },
      { status: 200 }
    );
  }

  try {
    const { cleanHtml, previewContent } = processNewsletterHtml(HtmlBody);

    const newsletter = await prisma.newsletter.create({
      data: {
        subject: Subject,
        content: TextBody || "",
        htmlContent: HtmlBody || "",
        fromEmail: FromFull.Email,
        receivedAt: new Date(receivedDate), // Fixed: use receivedDate instead of Date
        cleanHtml: cleanHtml,
        previewContent: previewContent,
      },
    });

    console.log("Successfully created newsletter:", newsletter.id);
    return NextResponse.json({
      message: "Newsletter processed",
      id: newsletter.id,
    });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { message: "Error processing newsletter" },
      { status: 500 }
    );
  }
}
