import { prisma } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newsletter } from "@/lib/types";
import NewsletterContent from "./newsletter-content";

async function getNewsletters() {
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
  return newsletters;
}

export async function NewsletterArchive() {
  const newsletters = await getNewsletters();

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold mb-6">Newsletter Archive</h2>
      {newsletters.length === 0 ? (
        <Card>
          <CardContent className="p-6">
            <p className="text-gray-500">No newsletters yet.</p>
          </CardContent>
        </Card>
      ) : (
        newsletters.map((newsletter) => (
          <Card
            key={newsletter.id}
            className="w-full hover:shadow-lg transition-shadow"
          >
            <CardHeader>
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
            <CardContent>
              <NewsletterContent newsletter={newsletter} />
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
