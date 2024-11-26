import { NewsletterArchive } from "@/components/newsletter-archive";
import { prisma } from "@/lib/db";

export const revalidate = 0; // Disable cache for debugging

export default async function PortfolioPage() {
  // Debug: Query the database directly
  const newsletters = await prisma.newsletter.findMany();
  console.log("Found newsletters:", newsletters);

  let showDiv: boolean = false;

  if (process.env.NODE_ENV === "development") {
    showDiv = true;
  } else {
    showDiv = false;
  }

  return (
    <main className="container mx-auto py-8 px-4">
      {/* hide div if showDiv isn't set to true */}
      <div className="mb-4 p-4 bg-yellow-100 rounded" hidden={!showDiv}>
        <p>Debug: Found {newsletters.length} newsletters in database</p>
      </div>
      <NewsletterArchive />
    </main>
  );
}
