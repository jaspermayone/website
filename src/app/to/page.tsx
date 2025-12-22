import { redirects } from "@/lib/defs";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Links - Jasper Mayone",
  description: "All my redirect links and social media profiles",
  alternates: {
    canonical: "https://www.jaspermayone.com/to",
  },
};

export default function ToIndex() {
  const toRoutes = redirects.filter((redirect) => redirect.slashToLink);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1
          className="mb-8 text-3xl font-bold"
          style={{ fontFamily: "var(--font-balgin)" }}
        >
          All /to Routes
        </h1>

        <div className="grid gap-4">
          {toRoutes.map((redirect) => (
            <div
              key={redirect.slug}
              className="hover:bg-accent/50 rounded-lg border p-4 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="decoration-greeen text-greeen hover:decoration-linkHover text-lg font-semibold underline decoration-wavy">
                    {redirect.slug}
                  </h3>
                  <p className="text-muted-foreground text-sm break-all">
                    {redirect.destination}
                  </p>
                </div>
                <Link
                  href={`/to/${redirect.slug}?utm_source=jaspermayone.com&utm_medium=referral`}
                  prefetch={false}
                  className="text-primary text-sm hover:underline"
                >
                  Visit →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Total routes: {toRoutes.length}
          </p>
        </div>
      </div>
    </div>
  );
}
