import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/db";
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
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const newsletter = await getNewsletter(id);
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
        <div className="relative flex justify-center mb-10">
          <Link href="/newsletter" className="absolute left-0">
            <Button
              variant="ghost"
              size="sm"
              className="bg-slate-800 hover:bg-slate-500 gap-2 text-whote"
              data-umami-event="newsletter_id_back"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Newsletter Homepage
            </Button>
          </Link>
        </div>
        <Card className="border-2 border-gray-200 bg-slate-800">
          <CardHeader className="p-6">
            <CardTitle className="text-xl font-bold text-white">
              {newsletter.subject}
            </CardTitle>
            <p className="text-sm text-gray-300">
              {new Date(newsletter.receivedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </CardHeader>
          <CardContent className="p-6 pt-0 prose-img:mx-auto prose-img:my-4">
            <div
              className="prose max-w-none prose-invert"
              dangerouslySetInnerHTML={{
                __html: `<div class="newsletter-content">${newsletter.cleanHtml}</div>`,
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
