"use client";
import { AtSign } from "lucide-react";
import Link from "next/link";
import {
  SiBluesky,
  SiBuymeacoffee,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiMatrix,
  SiReddit,
  SiSignal,
  SiThreads,
  SiYoutube,
} from "react-icons/si";

import { EmailCard } from "@/components/EmailCard";

const WavyDivider = () => (
  <div className="my-6">
    <svg
      className="w-full h-6"
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
    >
      <path
        d="M0 12 Q 100 24, 200 12 T 400 12 T 600 12 T 800 12 T 1000 12 T 1200 12"
        fill="none"
        stroke="#4299e1"
        strokeWidth="2"
        className="dark:stroke-blue-400"
      />
    </svg>
  </div>
);

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

const VerifyPage = () => {
  const title = "/VERIFY";

  enum domainType {
    personal,
    project,
    work,
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
      name: "hogwarts.dev",
      type: domainType.personal,
    },
    {
      name: "singlefeather.com",
      type: domainType.work,
    },
    {
      name: "phish.directory",
      type: domainType.project,
    },
    {
      name: "everywhere.pub",
      type: domainType.project,
    },
    {
      name: "dumpsterfire.icu",
      type: domainType.other,
    },
  ];

  const emails = [
    { address: "me@jaspermayone.com", primary: true },
    { address: "jaspermayone@gmail.com" },
    { address: "jasper.mayone@singlefeather.com", work: true },
    { address: "mayonej@wit.edu", school: true },
    { address: "jasper.mayone@phish.directory" },
    { address: "jasper.mayone@everywhere.pub" },
  ];

  const accounts = [
    {
      platform: "Github",
      username: "jaspermayone",
      url: "https://github.com/jaspermayone",
    },
    {
      platform: "Bluesky",
      username: "@jaspermayone.com",
      url: "https://bsky.app/profile/jaspermayone.com",
    },
    {
      platform: "LinkedIn",
      username: "jaspermayone",
      url: "https://www.linkedin.com/in/jaspermayone",
    },
    {
      platform: "Instagram",
      username: "jasper.mayone",
      url: "https://www.instagram.com/jasper.mayone",
    },
    {
      platform: "Threads",
      username: "@jasper.mayone",
      url: "https://www.threads.net/@jasper.mayone",
    },
    {
      platform: "Youtube",
      username: "@jasper.does.circus",
      url: "https://www.youtube.com/@jasper.does.circus",
    },
    {
      platform: "Signal",
      username: "jaspermayone.10",
      url: "https://signal.me/#eu/jaspermayone.10",
    },
    {
      platform: "Buy Me a Coffee",
      username: "jaspermayone",
      url: "https://www.buymeacoffee.com/jaspermayone",
    },
    {
      platform: "Reddit",
      username: "j-dogcoder",
      url: "https://www.reddit.com/user/j-dogcoder",
    },
    {
      platform: "Matrix",
      username: "@jasper.mayone:matrix.org",
      url: "https://matrix.to/#/@jasper.mayone:matrix.org",
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
      default:
        return <AtSign className="w-4 h-4" />;
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 pt-6">
      <header className="mb-8">
        <Link
          href="/"
          className="inline-block mb-4 underline decoration-wavy text-linkHover hover:text-linkBlue dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 ease-in-out"
        >
          ← Back to homepage
        </Link>
        <h1 className="text-5xl mb-2 font-cute-notes dark:text-white">
          {title.split("").map((letter, index) => (
            <LetterBlock key={index} letter={letter} />
          ))}
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 text-[0.60rem]">
          Inspired by{" "}
          <Link
            className="underline decoration-wavy hover:text-linkHover dark:hover:text-blue-300 transition-colors duration-300 ease-in-out"
            href="https://dunkirk.sh/verify/"
          >
            @Kieran Klukas
          </Link>
          , this page serves as verification of my various accounts.
        </p>
      </header>

      <WavyDivider />

      {/* Domains Section */}
      <section className="mb-6">
        <SectionHeader>domains</SectionHeader>
        <div className="bg-gradient-to-br from-blue-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            These are the domains I own and operate. I also operate a few other
            domains for work and clients that are not listed here for privacy
            reasons.
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
        <div className="bg-gradient-to-br from-blue-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            I maintain email addresses across various domains. Some addresses
            for organizations I am a part of are not published here for privacy
            reasons.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emails.map((email) => (
              <EmailCard
                key={email.address}
                email={email.address}
                isPrimary={email.primary}
                work={email.work}
                school={email.school}
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
              href={account.url}
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

      {/* Crypto Keys Section */}
      <section className="mb-12">
        <SectionHeader>crypto keys</SectionHeader>
        <p className="mb-4 text-neutral-700 dark:text-neutral-300">
          These are my current GPG and SSH keys. I will use these to sign my
          commits and emails, as well as authentication and signing elsewhere.
        </p>
        <div className="space-y-4">
          {cryptoKeys.map((key, index) => (
            <div
              key={index}
              className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg border border-blue-100 dark:border-gray-700"
            >
              <div>
                <h3 className="text-lg font-medium mb-2 dark:text-white">
                  {key.type} Key
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  For secure communication and authentication.
                </p>
                <div className="space-y-1 text-sm font-mono">
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Fingerprint: {key.fingerprint}
                  </p>
                  {key.type === "GPG" ? (
                    <p className="text-neutral-700 dark:text-neutral-300">
                      <Link
                        href={key.publicKey}
                        className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                      >
                        Get my public key from keys.openpgp.org
                      </Link>
                    </p>
                  ) : (
                    <p className="text-neutral-700 dark:text-neutral-300 break-all">
                      {key.publicKey}
                    </p>
                  )}
                  {key.note && (
                    <p className="text-neutral-500 dark:text-neutral-400 font-sans text-sm">
                      {key.note}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <WavyDivider />
    </main>
  );
};

export default VerifyPage;
