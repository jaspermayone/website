// app/keys/[key]/page.tsx
import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import CopyButton from "./CopyButton";
import {
  buildDirectURL,
  buildDownloadURL,
  getKeyByTitle,
  getKeysIndex,
} from "./data";

export async function generateStaticParams() {
  const keys = await getKeysIndex();
  return keys.map((k) => ({ key: k.title }));
}

export const revalidate = false;

export default async function Page({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const record = await getKeyByTitle(key);
  if (!record) notFound();

  const { title, fingerprint, key: keyData, fileExtension } = record;
  const directURL = buildDirectURL(title);
  const downloadURL = buildDownloadURL(title, fileExtension);

  return (
    <div className="min-h-screen flex flex-col">
      <MENU
        pageFirstWord="Keys"
        pageSecondWord="~"
        pageThirdWord={`${title}`}
      />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Public key for secure communications
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Key Details
              </h2>
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Fingerprint:
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 font-mono text-sm mt-1 break-all">
                    {fingerprint}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Direct link:
                  </span>
                  <p className="mt-1">
                    <Link
                      href={directURL}
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline break-all"
                    >
                      {directURL}
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Actions
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <CopyButton label="Copy public key" valueToCopy={keyData} />
                <Link href={downloadURL}>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <span className="mr-2">📥</span>
                    Download public key
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FOOTER />
    </div>
  );
}
