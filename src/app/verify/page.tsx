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

const LetterBlock = ({ letter }) => (
  <span className="inline-block py-1 mx-0.5">{letter}</span>
);

const WavyDivider = () => (
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

const VerifyPage = () => {
  const title = "/VERIFY";

  const emails = [
    { address: "me@jaspermayone.com", primary: true },
    { address: "jaspermayone@gmail.com" },
    { address: "jasper.mayone@singlefeather.com" },
    { address: "mayonej@wit.edu" },
    { address: "jasper.mayone@phish.directory" },
    { address: "jasper.mayone@everywhere.pub" },
    { address: "jasper.mayone@dumpsterfire.icu" },
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
    <main className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <header className="mb-6">
        <Link
          href="/"
          className="inline-block mb-4 underline decoration-wavy text-linkHover hover:text-linkBlue transition-colors duration-300 ease-in-out"
        >
          ← Back to homepage
        </Link>
        <h1 className="text-5xl mb-2 font-cute-notes">
          {title.split("").map((letter, index) => (
            <LetterBlock key={index} letter={letter} />
          ))}
        </h1>
        <p className="text-neutral-500 text-xs">
          Inspired by{" "}
          <Link
            className="underline decoration-wavy hover:text-linkHover transition-colors duration-300 ease-in-out"
            href="https://dunkirk.sh/verify/"
          >
            @Kieran Klukas
          </Link>
          , this page serves as verification of my various accounts.
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
          (also listed here) whenever possible.
        </p>
        <div className="space-y-1">
          {emails.map((email) => (
            <Link
              href={`mailto:${email.address}`}
              key={email.address}
              className={`inline-block mr-4 underline transition-colors duration-300 ease-in-out ${
                email.primary
                  ? "text-pinkkDark hover:text-pinkk"
                  : "text-linkHover hover:text-linkBlue"
              }`}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {accounts.map((account) => (
            <Link
              key={account.platform}
              href={account.url}
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-300 bg-white"
              style={{
                height: account.note ? "auto" : "5rem",
                minHeight: "5rem",
              }}
            >
              <div className="flex items-center gap-2 text-gray-600">
                {getIcon(account.platform)}
                <span className="font-medium">{account.platform}</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                {account.username}
              </div>
              {account.note && (
                <div className="mt-2 text-xs text-gray-400">{account.note}</div>
              )}
            </Link>
          ))}
        </div>
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
