import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ key: string }>;
}): Promise<Metadata> {
  const { key } = await params;
  const record = await getKeyByTitle(key);

  if (!record) {
    return {};
  }

  return {
    title: `${key.toUpperCase()} Key`,
    description: `Public ${key.toUpperCase()} key for Jasper Mayone`,
    alternates: {
      canonical: `https://www.jaspermayone.com/keys/${key}`,
    },
  };
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
  const fullDirectURL = `https://www.jaspermayone.com${directURL}`;

  const sshImportCommand = `curl -s ${fullDirectURL} >> ~/.ssh/authorized_keys`;
  const gpgImportCommand = `curl -s ${fullDirectURL} | gpg --import`;

  const keyPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://www.jaspermayone.com/keys/${title}#webpage`,
        url: `https://www.jaspermayone.com/keys/${title}`,
        name: `${title.toUpperCase()} Key - Jasper Mayone`,
        description: `Public ${title.toUpperCase()} key for Jasper Mayone`,
        isPartOf: {
          "@id": "https://www.jaspermayone.com/#website",
        },
        about: {
          "@id": "https://www.jaspermayone.com/#person",
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.jaspermayone.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Keys",
              item: "https://www.jaspermayone.com/keys",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: title.toUpperCase(),
              item: `https://www.jaspermayone.com/keys/${title}`,
            },
          ],
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="key-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(keyPageSchema),
        }}
      />
      <div>
        <MENU
          pageFirstWord="Keys"
          pageSecondWord="~"
          pageThirdWord={`${title}`}
        />
        <main className="min-h-screen">
          <div
            className="max-w-4xl mx-auto px-4 py-8 md:py-12"
            style={{ fontFamily: "var(--font-balgin)" }}
          >
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {title.toUpperCase()} Key
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Public {title.toUpperCase()} key for secure authentication
              </p>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <CopyButton label="Copy Key" valueToCopy={keyData} />
                <Link href={downloadURL} className="flex-1 sm:flex-initial">
                  <Button variant="outline" className="w-full">
                    Download Key
                  </Button>
                </Link>
              </div>
            </div>

            {/* Key Details Card */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-5">
                Key Information
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Fingerprint
                  </label>
                  <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    <code className="text-sm font-mono text-gray-800 dark:text-gray-200 break-all">
                      {fingerprint}
                    </code>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Direct Link
                  </label>
                  <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Link
                      href={directURL}
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline break-all font-mono"
                    >
                      {fullDirectURL}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Import Command Card */}
            {(title === "ssh" || title === "gpg") && (
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Import Command
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Run this command in your terminal to import the key:
                </p>

                <div className="space-y-3">
                  <div className="bg-gray-900 dark:bg-black p-4 rounded-lg border border-gray-700 overflow-x-auto">
                    <code className="text-sm font-mono text-green-400 block whitespace-nowrap">
                      {title === "ssh" ? sshImportCommand : gpgImportCommand}
                    </code>
                  </div>
                  <CopyButton
                    label={`Copy ${title.toUpperCase()} Import Command`}
                    valueToCopy={
                      title === "ssh" ? sshImportCommand : gpgImportCommand
                    }
                  />
                </div>
              </div>
            )}
          </div>
        </main>
        <FOOTER />
      </div>
    </>
  );
}
