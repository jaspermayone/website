import Link from "next/link";
import React from "react";

interface SocialAccount {
  platform: string;
  username: string;
  url?: string;
  note?: string;
}

interface ContactEmail {
  address: string;
  primary?: boolean;
}

interface CryptoKey {
  type: "SSH" | "GPG";
  fingerprint: string;
  publicKey: string;
  note?: string;
}

const LetterBlock: React.FC<{ letter: string }> = ({ letter }) => (
  <span className="inline-block border border-black px-2 py-1 mx-0.5">
    {letter}
  </span>
);

const WavyDivider: React.FC = () => (
  <div className="my-4">
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
      />
    </svg>
  </div>
);

const VerifyPage: React.FC = () => {
  const title = "/VERIFY";

  const emails: ContactEmail[] = [
    { address: "me@jaspermayone.com", primary: true },
    { address: "jaspermayone@gmail.com" },
    { address: "jasper.mayone@singlefeather.com" },
    { address: "mayonej@wit.edu" },
    { address: "jasper.mayone@phish.directory" },
    { address: "jasper.mayone@everywhere.pub" },
    { address: "jasper.mayone@dumpsterfire.icu" },
  ];

  const accounts: SocialAccount[] = [
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
      url: "https://www.youtube.com/channel/UCxl_9WNUfM019kbbgk8gVuQ",
    },
    {
      platform: "Signal",
      username: "jaspermayone.10",
      url: "https://signal.me/#eu/EG6j6-VthP_Bak5c0T5KSFZn0Rb8OW_67p2q4ibd03mYZd2LUuFGAIyuzeD3WEN9",
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
  ];

  const cryptoKeys: CryptoKey[] = [
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

  return (
    <main className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <header className="mb-6">
        <Link
          href="/"
          className="inline-block mb-4 underline decoration-wavy text-linkHover hover:text-linkBlue transition-colors duration-300 ease-in-out"
        >
          ← Back to homepage
        </Link>
        <h1 className="text-5xl mb-2 font-cute-notes">{title}</h1>
        <p className="text-neutral-500 text-xs">
          Inspired by{" "}
          <Link
            className="underline decoration-wavy hover:text-linkHover transition-colors duration-300 ease-in-out"
            href="https://dunkirk.sh/verify/"
          >
            @Kieran Klukas
          </Link>
          ,{" "}
          <Link
            className="underline decoration-wavy hover:text-linkHover transition-colors duration-300 ease-in-out"
            href="https://www.mollywhite.net/verify/"
          >
            @Molly White
          </Link>{" "}
          and{" "}
          <Link
            className="underline decoration-wavy hover:text-linkHover transition-colors duration-300 ease-in-out"
            href="https://rknight.me/verify/"
          >
            @Rob Knight
          </Link>{" "}
          this page serves as verification of my various accounts.
        </p>
      </header>

      {/* Domains & Email */}
      <section className="mb-6">
        <h2 className="text-2xl mb-2">domains / email</h2>
        <p className="mb-2">
          I personally own and control this domain (jaspermayone.com) as well as
          hogwarts.dev and maintain email addresses on both domains. I also have
          several email addresses not published here for privacy reasons that I
          have for organizations I am a part of. If you have questions about my
          identity at these addresses, you can email me at any of the ones you
          see above to verify it's me. I also sign my emails with my GPG key
          (also listed here) whenever possuble.
        </p>
        <div className="space-y-1">
          {emails.map((email) => (
            <Link
              href={`mailto:${email.address}`}
              key={email.address}
              className="inline-block mr-4 text-linkHover underline hover:text-linkBlue transition-colors duration-300 ease-in-out"
            >
              {email.address}
            </Link>
          ))}
        </div>
      </section>

      <WavyDivider />

      {/* Accounts */}
      <section className="mb-6">
        <h2 className="text-2xl mb-2">accounts</h2>
        <ul className="space-y-2">
          {accounts.map((account, index) => (
            <li key={index} className="flex items-start">
              <span className="text-neutral-700">
                {account.platform}:{" "}
                <Link
                  href={account.url!}
                  className="text-linkHover underline decoration-wavy hover:text-linkBlue transition-colors duration-300 ease-in-out"
                >
                  {account.username}
                </Link>
                {account.note && (
                  <span className="text-neutral-500 ml-2">{account.note}</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <WavyDivider />

      {/* Crypto Keys */}
      <section className="mb-6">
        <h2 className="text-2xl mb-2">crypto keys</h2>
        <p className="mb-2 text-neutral-700">
          These are my current GPG and SSH keys. I will use these to sign my
          commits and emails, as well as authentication and signing elsewhere.
        </p>
        <div className="space-y-4">
          {cryptoKeys.map((key, index) => (
            <div
              key={index}
              className="bg-blue-50 p-3 rounded-lg border border-blue-100"
            >
              <h3 className="text-lg font-medium mb-1">{key.type} Key</h3>
              <div className="space-y-1 text-sm font-mono">
                <p className="text-neutral-700">
                  Fingerprint: {key.fingerprint}
                </p>
                {key.type === "GPG" ? (
                  <p className="text-neutral-700">
                    <Link
                      href={key.publicKey}
                      className="text-linkHover underline hover:text-linkBlue transition-colors duration-300 ease-in-out"
                    >
                      Get my public key from keys.openpgp.org
                    </Link>
                  </p>
                ) : (
                  <p className="text-neutral-700 break-all">{key.publicKey}</p>
                )}
                {key.note && (
                  <p className="text-neutral-500 font-sans text-sm">
                    {key.note}
                  </p>
                )}
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
