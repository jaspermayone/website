// app/keys/[key]/page.tsx
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

  // Create import commands
  const sshImportCommand = `curl -s ${fullDirectURL} >> ~/.ssh/authorized_keys`;
  const gpgImportCommand = `curl -s ${fullDirectURL} | gpg --import`;

  // Create structured data with breadcrumbs
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
        <main>
          <div className="max-w-4xl mx-auto px-3 py-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
              {/* Key Details */}
              <div className="mb-5">
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
                      <Link href={directURL} className="lnk break-all">
                        {directURL}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Actions
                </h3>
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

              {/* Import Command */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  Import Command
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Copy and run this command to import the key:
                </p>
                {title === "ssh" ? (
                  <div className="space-y-3">
                    <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded border overflow-x-auto">
                      <code className="text-xs whitespace-nowrap block font-mono text-gray-800 dark:text-gray-200">
                        {sshImportCommand}
                      </code>
                    </div>
                    <CopyButton
                      label="Copy SSH import command"
                      valueToCopy={sshImportCommand}
                    />
                  </div>
                ) : title === "gpg" ? (
                  <div className="space-y-3">
                    <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded border overflow-x-auto">
                      <code className="text-xs whitespace-nowrap block font-mono text-gray-800 dark:text-gray-200">
                        {gpgImportCommand}
                      </code>
                    </div>
                    <CopyButton
                      label="Copy GPG import command"
                      valueToCopy={gpgImportCommand}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </main>
        <FOOTER />
      </div>
    </>
  );
}
