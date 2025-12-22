import { AtSign } from "lucide-react";
import Link from "next/link";
import {
  SiBluesky,
  SiBuymeacoffee,
  SiDevdotto,
  SiGithub,
  SiHackerone,
  SiInstagram,
  SiLinkedin,
  SiMatrix,
  SiProducthunt,
  SiReddit,
  SiSignal,
  SiThingiverse,
  SiThreads,
  SiX,
  SiYcombinator,
  SiYoutube,
} from "react-icons/si";

import { EmailCard } from "@/components/EmailCard";
import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import WavyDivider from "@/components/WavyDivider";
import { emails } from "@/lib/defs";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Verify",
  description:
    "Verify Jasper Mayone's identity across domains, email addresses, social accounts, and cryptographic keys for secure communication.",
  keywords: [
    "verification",
    "identity",
    "gpg key",
    "jasper mayone verification",
    "domains",
    "cryptographic keys",
    "security",
  ],
  alternates: {
    canonical: "https://www.jaspermayone.com/verify",
  },
};

const LetterBlock = ({ letter }) => (
  <span
    className="mx-0.5 inline-block py-1"
    style={{ fontFamily: "var(--font-cuteNotes)" }}
  >
    {letter}
  </span>
);

const SectionHeader = ({ children }) => (
  <h2
    className="mb-2 text-4xl dark:text-white"
    style={{ fontFamily: "var(--font-cuteNotes)" }}
  >
    {children.split("").map((letter, index) => (
      <LetterBlock key={index} letter={letter} />
    ))}
  </h2>
);

const verifyPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.jaspermayone.com/verify#webpage",
      url: "https://www.jaspermayone.com/verify",
      name: "Verify - Jasper Mayone",
      description:
        "Verify Jasper Mayone's identity across domains, email addresses, social accounts, and cryptographic keys for secure communication.",
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
            name: "Verify",
            item: "https://www.jaspermayone.com/verify",
          },
        ],
      },
    },
  ],
};

const VerifyPage = () => {
  const _title = "/VERIFY";

  enum domainType {
    personal,
    project,
    work,
    business,
    other,
  }

  type Domain = {
    name: string;
    type: domainType;
    icon?: React.ReactNode;
  };

  const domains: Domain[] = [
    {
      name: "jaspermayone.com",
      type: domainType.personal,
    },
    {
      name: "jsp.lat",
      type: domainType.personal,
    },
    {
      name: "hogwarts.dev",
      type: domainType.personal,
    },
    {
      name: "hogwarts.channel",
      type: domainType.personal,
    },
    {
      name: "singlefeather.com",
      type: domainType.business,
    },
    {
      name: "singlefeather.dev",
      type: domainType.business,
    },
    {
      name: "phish.directory",
      type: domainType.project,
    },
    {
      name: "patchworklabs.org",
      type: domainType.project,
    },
  ];

  const accounts = [
    {
      platform: "Github",
      username: "jaspermayone",
      url: "/to/github",
    },
    {
      platform: "Bluesky",
      username: "@jaspermayone.com",
      url: "/to/bluesky",
    },
    {
      platform: "Linkedin",
      username: "jaspermayone",
      url: "/to/linkedin",
    },
    {
      platform: "Instagram",
      username: "jasper.mayone",
      url: "/to/instagram",
    },
    {
      platform: "Threads",
      username: "@jasper.mayone",
      url: "/to/threads",
    },
    {
      platform: "Youtube",
      username: "@jasper.does.circus",
      url: "/to/youtube",
    },
    {
      platform: "Signal",
      username: "jaspermayone.10",
      url: "/to/signal",
    },
    {
      platform: "Buy Me a Coffee",
      username: "jaspermayone",
      url: "/to/coffee",
    },
    {
      platform: "Reddit",
      username: "j-dogcoder",
      url: "/to/reddit",
    },
    {
      platform: "HackerOne",
      username: "jmayone",
      url: "/to/hackerone",
    },
    {
      platform: "Twitter/X",
      username: "jaspermayone",
      url: "/to/x",
    },
    {
      platform: "Dev.to",
      username: "jaspermayone",
      url: "/to/devto",
    },
    {
      platform: "Product Hunt",
      username: "jaspermayone",
      url: "/to/producthunt",
    },
    {
      platform: "Hacker News",
      username: "jaspermayone",
      url: "/to/hackernews",
    },
    {
      platform: "Thingiverse", // Added Thingiverse as an example
      username: "preamble6098", // Assuming this is the username on Thingiverse
      url: "/to/thingiverse", // Assuming a custom URL for Thingiverse
    },
    {
      platform: "Matrix",
      username: "@jasper.mayone:matrix.org",
      url: "/to/matrix",
      note: "i'm not at all active here, contact me elsewhere if you want a response (like ever)",
    },
    {
      platform: "Obsidian Publish",
      username: "jaspermayone",
      url: "https://publish.obsidian.md/hub/01+-+Community/People/jaspermayone",
      note: "My Obsidian Publish profile showcasing my published notes and resources.",
    },
    {
      platform: "Flickr",
      url: "https://www.flickr.com/people/201477119@N04/",
    },
    {
      platform: "Raycast",
      username: "jaspermayone",
      url: "https://www.raycast.com/jaspermayone",
    },
  ];

  const _cryptoKeys = [
    {
      type: "GPG",
      fingerprint: "00E6 43C2 1FAC 965F FB28 D3B7 14D0 D45A 1DAD AAFA",
      publicKey: "https://keys.openpgp.org/search?q=me%40jaspermayone.com",
      note: "Used for email signing and encryption. Download my public key from keys.openpgp.org.",
    },
    {
      type: "SSH",
      fingerprint: "SHA256:YdDj3JLvVy12zDrJLLDVl5OLsW4t0/20KoJbm6YGfzg",
      publicKey:
        "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDxnv44DTFIO2cIiy4blF/UjJxDY+j8AJo9Wwq25inA2 jasper@jaspermayone.com",
      note: "Used for Git authentication and server access",
    },
  ];

  const getIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <SiGithub className="h-4 w-4" />;
      case "linkedin":
        return <SiLinkedin className="h-4 w-4" />;
      case "instagram":
        return <SiInstagram className="h-4 w-4" />;
      case "youtube":
        return <SiYoutube className="h-4 w-4" />;
      case "buy me a coffee":
        return <SiBuymeacoffee className="h-4 w-4" />;
      case "matrix":
        return <SiMatrix className="h-4 w-4" />;
      case "bluesky":
        return <SiBluesky className="h-4 w-4" />;
      case "threads":
        return <SiThreads className="h-4 w-4" />;
      case "signal":
        return <SiSignal className="h-4 w-4" />;
      case "reddit":
        return <SiReddit className="h-4 w-4" />;
      case "hackerone":
        return <SiHackerone className="h-4 w-4" />;
      case "twitter/x":
        return <SiX className="h-4 w-4" />;
      case "dev.to":
        return <SiDevdotto className="h-4 w-4" />;
      case "product hunt":
        return <SiProducthunt className="h-4 w-4" />;
      case "hacker news":
        // HN doesn't have an official icon, use YCombinator as a placeholder
        return <SiYcombinator className="h-4 w-4" />;
      case "thingiverse":
        return <SiThingiverse className="h-4 w-4" />;
      default:
        return <AtSign className="h-4 w-4" />;
    }
  };

  return (
    <>
      <Script
        id="verify-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(verifyPageSchema),
        }}
      />
      <MENU pageFirstWord="/verify" />
      <main className="mx-auto max-w-4xl px-4 pt-6">
        <header className="mb-8">
          <p className="mb-2 text-[0.60rem] text-neutral-500 dark:text-neutral-400">
            Inspired by{" "}
            <Link
              className="lnk"
              href="https://dunkirk.sh/verify/?utm_source=jaspermayone.com&utm_medium=referral"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Kieran Klukas
            </Link>
            , this page serves as verification of my various accounts.
          </p>
          <p>
            <b className="mt-2 text-neutral-700 dark:text-neutral-300">Note:</b>{" "}
            This page is intended to be a public record of my online presence
            and should not be considered exhaustive. If you find an account that
            is not listed here, please let me know via email or any of the
            platforms listed below.
          </p>

          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            My entire identity can also be verified at{" "}
            <Link
              href="https://keyoxide.org/00E643C21FAC965FFB28D3B714D0D45A1DADAAFA?utm_source=jaspermayone.com&utm_medium=referral"
              className="lnk"
              rel="noopener noreferrer"
              target="_blank"
            >
              keyoxide.org/00E643C21FAC965FFB28D3B714D0D45A1DADAAFA
            </Link>
          </p>

          <p className="mt-4 text-sm text-neutral-700 dark:text-neutral-300">
            To view my public cryptographic keys, visit my{" "}
            <Link className="lnk" href="/keys/gpg">
              GPG key page
            </Link>{" "}
            or{" "}
            <Link className="lnk" href="/keys/ssh">
              SSH key page
            </Link>
            .
          </p>

          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
            This page is tracked in version control. You can{" "}
            <Link
              href="https://github.com/jaspermayone/website/blob/main/src/app/verify/page.tsx?utm_source=jaspermayone.com&utm_medium=referral"
              className="lnk"
              rel="noopener noreferrer"
              target="_blank"
            >
              view the source code on GitHub
            </Link>
            . If you find any errors or have any questions, please let me know
            via email or any of the platforms listed below.
          </p>
        </header>

        <WavyDivider />

        {/* Domains Section */}
        <section className="mb-6">
          <SectionHeader>domains</SectionHeader>
          <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 to-pink-50 p-6 dark:border-gray-700 dark:from-slate-800 dark:to-slate-900">
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              These are the domains I own and operate. I also operate a few
              other domains for work and clients that are not listed here for
              privacy reasons.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {domains.map((domain) => {
                const getBadgeStyles = (type) => {
                  switch (type) {
                    case domainType.personal:
                      return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200";
                    case domainType.work:
                      return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200";
                    case domainType.project:
                      return "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-200";
                    case domainType.other:
                      return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200";
                    default:
                      return "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200";
                  }
                };

                return (
                  <div
                    key={domain.name}
                    className="rounded-lg border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:shadow-sm dark:border-gray-700 dark:bg-slate-800 dark:hover:border-blue-500 dark:hover:bg-slate-700"
                  >
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      {domain.name}
                    </h3>
                    <div className="mt-2 flex items-center gap-2">
                      <span
                        className={`rounded-full px-2 py-1 text-xs ${getBadgeStyles(
                          domain.type
                        )}`}
                      >
                        {domainType[domain.type].charAt(0).toUpperCase() +
                          domainType[domain.type].slice(1)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <WavyDivider />

        {/* Email Section */}
        <section className="mb-12">
          <SectionHeader>email</SectionHeader>
          <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 to-pink-50 p-6 dark:border-gray-700 dark:from-slate-800 dark:to-slate-900">
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              I maintain email addresses across various domains. Some addresses
              for organizations I am a part of are not published here for
              privacy reasons.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {emails.map((email) => (
                <EmailCard
                  key={email.address}
                  email={email.address}
                  isPrimary={email.primary}
                  // isWork={email.work}
                  isBusiness={email.business}
                  isSchool={email.school}
                />
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              If you have questions about my identity at these{" "}
              <b>or any other addresses</b>, you can email me at any of the ones
              you see above to verify it&apos;s me. I also sign my emails with
              my GPG key (listed below) whenever possible.
            </p>
          </div>
        </section>

        <WavyDivider />

        {/* Accounts Section */}
        <section className="mb-12">
          <SectionHeader>accounts</SectionHeader>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {accounts.map((account) => (
              <Link
                key={account.platform}
                href={`${account.url}?utm_source=jaspermayone.com&utm_medium=referral`}
                rel="me"
                prefetch={false}
                className="group block rounded-lg border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:shadow-sm dark:border-gray-700 dark:bg-slate-800 dark:hover:border-blue-500 dark:hover:bg-slate-700"
                style={{
                  height: account.note ? "auto" : "5rem",
                  minHeight: "5rem",
                }}
              >
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  {getIcon(account.platform)}
                  <span className="font-medium">{account.platform}</span>
                </div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {account.username}
                </div>
                {account.note && (
                  <div className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                    {account.note}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>

        <WavyDivider />
        <FOOTER />
      </main>
    </>
  );
};

export default VerifyPage;
