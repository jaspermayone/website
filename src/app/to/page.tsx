import { redirects } from "@/lib/defs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links - Jasper Mayone",
  description: "All my redirect links and social media profiles",
};

export default function ToIndex() {
  const toRoutes = redirects.filter((redirect) => redirect.slashToLink);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">All /to Routes</h1>

        <div className="grid gap-4">
          {toRoutes.map((redirect) => (
            <div
              key={redirect.slug}
              className="border rounded-lg p-4 hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg underline decoration-wavy decoration-blurre text-blurre hover:decoration-linkHover">
                    {redirect.slug}
                  </h3>
                  <p className="text-muted-foreground text-sm break-all">
                    {redirect.destination}
                  </p>
                </div>
                <a
                  href={`/to/${redirect.slug}`}
                  className="text-primary hover:underline text-sm"
                >
                  Visit →
                </a>
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
