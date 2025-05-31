import { formatRelative } from "date-fns";
import { Metadata } from "next";
import MENU from "@/components/MENU";
import FOOTER from "@/components/FOOTER";

export const metadata: Metadata = {
  title: "Now",
  description: "What I'm currently doing.",
};

export default async function Now() {
  const api_url =
    "https://bsky.social/xrpc/com.atproto.repo.listRecords?repo=jaspermayone.com&collection=a.status.update&limit=50";

  const res = await fetch(api_url);
  const data = await res.json();

  const records = data.records;

  // records have value objects. set new var to a map of all the objects
  const posts = records.map((record: any) => record.value);

  const formatTimeAgo = (dateString) => {
    return formatRelative(new Date(dateString), new Date());
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MENU pageFirstWord="Now" />
      <main className="m-5 flex-1">
        <div className="space-y-3">
          {posts.map((post, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-gray-800">{post.text}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {formatTimeAgo(post.createdAt)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <FOOTER />
    </div>
  );
}
