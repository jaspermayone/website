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
import styles from "@/styles/Home.module.css";
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
    className="inline-block py-1 mx-0.5"
    style={{ fontFamily: "var(--font-cuteNotes)" }}
  >
    {letter}
  </span>
);

const SectionHeader = ({ children }) => (
  <h2
    className="text-4xl mb-2 dark:text-white"
    style={{ fontFamily: "var(--font-cuteNotes)" }}
  >
    {children.split("").map((letter, index) => (
      <LetterBlock key={index} letter={letter} />
    ))}
  </h2>
);

const verifyPageSchema = {
  "@context": "https://schema.org",
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
};

const VerifyPage = () => {
  const title = "/VERIFY";

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
  ];

  const cryptoKeys = [
    {
      type: "GPG",
      fingerprint: "00E6 43C2 1FAC 965F FB28 D3B7 14D0 D45A 1DAD AAFA",
      publicKey: "https://keys.openpgp.org/search?q=me%40jaspermayone.com",
      note: "Used for email signing and encryption. Click the link to get my public key.",
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
        return <SiGithub className="w-4 h-4" />;
      case "linkedin":
        return <SiLinkedin className="w-4 h-4" />;
      case "instagram":
        return <SiInstagram className="w-4 h-4" />;
      case "youtube":
        return <SiYoutube className="w-4 h-4" />;
      case "buy me a coffee":
        return <SiBuymeacoffee className="w-4 h-4" />;
      case "matrix":
        return <SiMatrix className="w-4 h-4" />;
      case "bluesky":
        return <SiBluesky className="w-4 h-4" />;
      case "threads":
        return <SiThreads className="w-4 h-4" />;
      case "signal":
        return <SiSignal className="w-4 h-4" />;
      case "reddit":
        return <SiReddit className="w-4 h-4" />;
      case "hackerone":
        return <SiHackerone className="w-4 h-4" />;
      case "twitter/x":
        return <SiX className="w-4 h-4" />;
      case "dev.to":
        return <SiDevdotto className="w-4 h-4" />;
      case "product hunt":
        return <SiProducthunt className="w-4 h-4" />;
      case "hacker news":
        // HN doesn't have an official icon, use YCombinator as a placeholder
        return <SiYcombinator className="w-4 h-4" />;
      case "thingiverse":
        return <SiThingiverse className="w-4 h-4" />;
      default:
        return <AtSign className="w-4 h-4" />;
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
      <main className="max-w-4xl mx-auto px-4 pt-6">
        <header className="mb-8">
          <p className="text-neutral-500 dark:text-neutral-400 text-[0.60rem] mb-2">
            Inspired by{" "}
            <Link
              className="text-blue-500 dark:text-blue-300 decoration-wavy underline decoration-blue-500 dark:decoration-blue-300 hover:text-blurre transition-colors duration-300"
              href="https://dunkirk.sh/verify/?utm_source=jaspermayone.com&utm_medium=referral"
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

          <p className="text-neutral-700 dark:text-neutral-300 mt-2">
            My entire identity can also be verified at{" "}
            <Link
              href="https://keyoxide.org/00E643C21FAC965FFB28D3B714D0D45A1DADAAFA?utm_source=jaspermayone.com&utm_medium=referral"
              className="text-blue-500 dark:text-blue-300 decoration-wavy underline decoration-blue-500 dark:decoration-blue-300 hover:text-blurre transition-colors duration-300"
              rel="noopener noreferrer"
              target="_blank"
            >
              keyoxide.org/00E643C21FAC965FFB28D3B714D0D45A1DADAAFA
            </Link>
          </p>

          <p className="mt-4 text-sm text-neutral-700 dark:text-neutral-300">
            To view my public cryptographic keys you can visit{" "}
            <Link className={styles.lnk} href="/keys/gpg">
              /keys/gpg
            </Link>{" "}
            or{" "}
            <Link className={styles.lnk} href="/keys/ssh">
              /keys/ssh
            </Link>{" "}
            respectively.
          </p>

          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
            This page is tracked in version control. You can view the source
            code for this page on{" "}
            <Link
              href="https://github.com/jaspermayone/website/blob/main/src/app/verify/page.tsx?utm_source=jaspermayone.com&utm_medium=referral"
              className="text-blue-500 dark:text-blue-300 decoration-wavy underline decoration-blue-500 dark:decoration-blue-300 hover:text-blurre transition-colors duration-300"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </Link>
            . If you find any errors or have any questions, please let me know
            via email or any of the platforms listed below.
          </p>
        </header>

        <WavyDivider />

        {/* Domains Section */}
        <section className="mb-6">
          <SectionHeader>domains</SectionHeader>
          <div className="bg-gradient-to-br from-blue-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              These are the domains I own and operate. I also operate a few
              other domains for work and clients that are not listed here for
              privacy reasons.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
                    className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700 hover:shadow-sm transition-all duration-300"
                  >
                    <h3 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                      {domain.name}
                    </h3>
                    <div className="mt-2 flex items-center gap-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${getBadgeStyles(
                          domain.type,
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
          <div className="bg-gradient-to-br from-blue-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              I maintain email addresses across various domains. Some addresses
              for organizations I am a part of are not published here for
              privacy reasons.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              you see above to verify it's me. I also sign my emails with my GPG
              key (listed below) whenever possible.
            </p>
          </div>
        </section>

        <WavyDivider />

        {/* Accounts Section */}
        <section className="mb-12">
          <SectionHeader>accounts</SectionHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {accounts.map((account) => (
              <Link
                key={account.platform}
                href={`${account.url}?utm_source=jaspermayone.com&utm_medium=referral`}
                rel="me"
                className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-sm group"
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
