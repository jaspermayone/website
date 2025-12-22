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
      canonical: `https://jaspermayone.com/keys/${key}`,
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
  const fullDirectURL = `https://jaspermayone.com${directURL}`;

  const sshImportCommand = `curl -s ${fullDirectURL} >> ~/.ssh/authorized_keys`;
  const gpgImportCommand = `curl -s ${fullDirectURL} | gpg --import`;

  const keyPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://jaspermayone.com/keys/${title}#webpage`,
        url: `https://jaspermayone.com/keys/${title}`,
        name: `${title.toUpperCase()} Key - Jasper Mayone`,
        description: `Public ${title.toUpperCase()} key for Jasper Mayone`,
        isPartOf: {
          "@id": "https://jaspermayone.com/#website",
        },
        about: {
          "@id": "https://jaspermayone.com/#person",
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://jaspermayone.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Keys",
              item: "https://jaspermayone.com/keys",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: title.toUpperCase(),
              item: `https://jaspermayone.com/keys/${title}`,
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
            className="mx-auto max-w-4xl px-4 py-8 md:py-12"
            style={{ fontFamily: "var(--font-balgin)" }}
          >
            {/* Header */}
            <div className="mb-8">
              <h1 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                {title.toUpperCase()} Key
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Public {title.toUpperCase()} key for secure authentication
              </p>
            </div>

            {/* Quick Actions Card */}
            <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Quick Actions
              </h2>
              <div className="flex flex-col gap-3 sm:flex-row">
                <CopyButton label="Copy Key" valueToCopy={keyData} />
                <Link href={downloadURL} className="flex-1 sm:flex-initial">
                  <Button variant="outline" className="w-full">
                    Download Key
                  </Button>
                </Link>
              </div>
            </div>

            {/* Key Details Card */}
            <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">
                Key Information
              </h2>

              <div className="space-y-5">
                <div>
                  <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Fingerprint
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-900">
                    <code className="font-mono text-sm break-all text-gray-800 dark:text-gray-200">
                      {fingerprint}
                    </code>
                  </div>
                </div>

                <div>
                  <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Direct Link
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-900">
                    <Link
                      href={directURL}
                      className="font-mono text-sm break-all text-blue-600 hover:underline dark:text-blue-400"
                    >
                      {fullDirectURL}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Import Command Card */}
            {(title === "ssh" || title === "gpg") && (
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  Import Command
                </h2>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                  Run this command in your terminal to import the key:
                </p>

                <div className="space-y-3">
                  <div className="overflow-x-auto rounded-lg border border-gray-700 bg-gray-900 p-4 dark:bg-black">
                    <code className="block font-mono text-sm whitespace-nowrap text-green-400">
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
