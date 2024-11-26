// app/newsletters/[id]/page.tsx
import { prisma } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getNewsletter(id: string) {
  const newsletter = await prisma.newsletter.findUnique({
    where: { id },
    select: {
      id: true,
      subject: true,
      htmlContent: true,
      receivedAt: true,
      cleanHtml: true,
    },
  });

  if (!newsletter) {
    notFound();
  }

  return {
    ...newsletter,
  };
}

export default async function NewsletterPage({
  params,
}: {
  params: { id: string };
}) {
  const newsletter = await getNewsletter(params.id);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      <div className="relative flex justify-center mb-8">
        <Link href="/newsletters" className="absolute left-0">
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-gray-100 gap-2 text-gray-600"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Newsletters
          </Button>
        </Link>
      </div>
      <Card className="border-2 border-gray-200">
        <CardHeader className="p-6">
          <CardTitle className="text-xl font-bold">
            {newsletter.subject}
          </CardTitle>
          <p className="text-sm text-gray-500">
            {new Date(newsletter.receivedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </CardHeader>
        <CardContent className="p-6 pt-0 prose-img:mx-auto prose-img:my-4">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: `<div class="newsletter-content">${newsletter.cleanHtml}</div>`,
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
