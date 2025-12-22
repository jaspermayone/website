import ExternalLink from "@/components/ExternalLink";
import { AtSign } from "lucide-react";
import { Link } from "next-view-transitions";
import {
  SiBluesky,
  SiBuymeacoffee,
  SiDevdotto,
  SiFigma,
  SiFlickr,
  SiGithub,
  SiHackerone,
  SiInstagram,
  SiLastdotfm,
  SiLinkedin,
  SiMastodon,
  SiMatrix,
  SiObsidian,
  SiProducthunt,
  SiRaycast,
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
import { domains, emails, links } from "@/lib/defs";
import { domainType } from "@/lib/types";
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

  // Filter links to only show social accounts on verify page
  const socialAccounts = links.filter((link) => link.social);

  const getIcon = (platform: string) => {
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
        return <SiYcombinator className="h-4 w-4" />;
      case "thingiverse":
        return <SiThingiverse className="h-4 w-4" />;
      case "mastodon":
        return <SiMastodon className="h-4 w-4" />;
      case "last.fm":
        return <SiLastdotfm className="h-4 w-4" />;
      case "figma":
        return <SiFigma className="h-4 w-4" />;
      case "obsidian publish":
        return <SiObsidian className="h-4 w-4" />;
      case "flickr":
        return <SiFlickr className="h-4 w-4" />;
      case "raycast":
        return <SiRaycast className="h-4 w-4" />;
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
            <ExternalLink className="lnk" href="https://dunkirk.sh/verify/">
              @Kieran Klukas
            </ExternalLink>
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
            <ExternalLink
              href="https://keyoxide.org/00E643C21FAC965FFB28D3B714D0D45A1DADAAFA"
              className="lnk"
            >
              keyoxide.org/00E643C21FAC965FFB28D3B714D0D45A1DADAAFA
            </ExternalLink>
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
            <ExternalLink
              href="https://github.com/jaspermayone/website/blob/main/src/app/verify/page.tsx"
              className="lnk"
            >
              view the source code on GitHub
            </ExternalLink>
            . If you find any errors or have any questions, please let me know
            via email or any of the platforms listed below.
          </p>
        </header>

        <WavyDivider />

        {/* Domains Section */}
        <section className="mb-6">
          <SectionHeader>domains</SectionHeader>
          <div className="rounded-xl border border-gray-200 bg-linear-to-br from-blue-50 to-pink-50 p-6 dark:border-gray-700 dark:from-slate-800 dark:to-slate-900">
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
          <div className="rounded-xl border border-gray-200 bg-linear-to-br from-blue-50 to-pink-50 p-6 dark:border-gray-700 dark:from-slate-800 dark:to-slate-900">
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
            {socialAccounts.map((account) => {
              const platformName =
                account.displayName ||
                account.slug.charAt(0).toUpperCase() + account.slug.slice(1);
              return (
                <Link
                  key={account.slug}
                  href={`/to/${account.slug}`}
                  rel="me"
                  prefetch={false}
                  className="group flex flex-col rounded-lg border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:shadow-sm dark:border-gray-700 dark:bg-slate-800 dark:hover:border-blue-500 dark:hover:bg-slate-700"
                >
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    {getIcon(platformName)}
                    <span className="font-medium">{platformName}</span>
                  </div>
                  <div className="mt-1 text-sm break-all text-gray-500 dark:text-gray-400">
                    {account.username || "\u00A0"}
                  </div>
                  {account.socialNote && (
                    <div className="mt-auto pt-2 text-xs text-gray-400 dark:text-gray-500">
                      {account.socialNote}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </section>

        <WavyDivider />
        <FOOTER />
      </main>
    </>
  );
};

export default VerifyPage;
