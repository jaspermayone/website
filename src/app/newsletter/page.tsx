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

const VerifyPage: React.FC = () => {
  const title = "/VERIFY";

  const emails: ContactEmail[] = [
    { address: "me@dunkirk.sh", primary: true },
    { address: "me@kieranklukas.com" },
    { address: "kieran@hackclub.com" },
    { address: "kieran@purplebubble.org" },
  ];

  const accounts: SocialAccount[] = [
    {
      platform: "Github",
      username: "@taciternaxolotl",
      note: "(formerly @kcoderhtml)",
    },
    {
      platform: "Hackclub Slack",
      username: "@krn",
      note: "userID U062UG485EE",
    },
    { platform: "Bluesky", username: "@dunkirk.sh" },
    { platform: "Youtube", username: "@wanderer.archives" },
    {
      platform: "Matrix",
      username: "@kieran:dumpsterfire.icu or @sclacker:matrix.org",
      note: "i'm active on here once in a bluemoon so this isn't a great way to contact me urgently",
    },
    { platform: "Signal", username: "verox.89" },
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-5xl mb-4 font-cute-notes">{title}</h1>
        <p className="text-neutral-700">
          Inspired by @Molly White and @Rob Knight this page serves as
          verification of my various accounts.
        </p>
      </header>

      {/* Domains & Email */}
      <section className="mb-12">
        <h2 className="text-5xl mb-4 font-cute-notes">domains / email</h2>
        <p className="mb-4">
          I personally own and control this domain (dunkirk.sh) as well as
          kieranklukas.com and maintain email addresses on both domains.
        </p>
        <div className="space-y-2">
          {emails.map((email) => (
            <div
              key={email.address}
              className="text-linkBlue decoration-wavy underline hover:text-linkHover mr-4"
            >
              {email.address}
            </div>
          ))}
        </div>
      </section>

      <div className="my-8">
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

      {/* Accounts */}
      <section>
        <h2 className="text-5xl mb-4 font-cute-notes">accounts</h2>
        <ul className="space-y-3">
          {accounts.map((account, index) => (
            <li key={index} className="flex items-start">
              <span className="text-neutral-700">
                {account.platform}:{" "}
                <span className="text-linkBlue decoration-wavy underline hover:text-linkHover">
                  {account.username}
                </span>
                {account.note && (
                  <span className="text-neutral-500 ml-2">{account.note}</span>
                )}
              </span>
            </li>
          ))}
          <li className="text-neutral-700">
            Phone #:{" "}
            <span className="italic">
              Do you really think i'm going to publicly share that?
            </span>
          </li>
        </ul>
      </section>

      <div className="my-8">
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

      {/* Footer */}
      <footer className="text-center text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Kieran Klukas</p>
        <p>Content licensed under CC BY-NC-SA 4.0</p>
      </footer>
    </main>
  );
};

export default VerifyPage;
