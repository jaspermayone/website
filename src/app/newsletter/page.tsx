import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/db";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

async function getNewsletters() {
  const newsletters = await prisma.newsletter.findMany({
    orderBy: {
      receivedAt: "desc",
    },
    select: {
      id: true,
      subject: true,
      receivedAt: true,
      previewContent: true,
    },
  });
  return newsletters;
}

export default async function Page() {
  const newsletters = await getNewsletters();

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      <div className="relative flex justify-center mb-8">
        <Link href="/" className="absolute left-0">
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-gray-100 gap-2 text-gray-600"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </Link>
        <h2
          className="text-5xl"
          style={{
            fontFamily: '"Cute Notes", sans-serif',
          }}
        >
          Newsletter
        </h2>
      </div>
      {newsletters.length === 0 ? (
        <Card className="border-2 border-gray-200">
          <CardContent className="p-8 text-center">
            <p className="text-gray-500 text-lg">No newsletters yet.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {newsletters.map((newsletter) => (
            <Link key={newsletter.id} href={`/newsletter/${newsletter.id}`}>
              <Card className="border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200">
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-bold">
                    {newsletter.subject}
                  </CardTitle>
                  <p className="text-sm text-gray-500">
                    {new Date(newsletter.receivedAt).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="prose max-w-none line-clamp-3">
                    {newsletter.previewContent
                      .replace(/<[^>]*>/g, "")
                      .slice(0, 200)}
                    ...
                  </div>
                  <div className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                    Read more →
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
