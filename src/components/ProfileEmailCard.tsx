import { Check, Copy, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ProfileEmailCard = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // disect the email into before the @ and after the @
  const [user, domain] = email.split("@");

  return (
    <div className="border-greeen mt-2 w-64 rounded-lg border bg-white/50 p-3 transition-all duration-300 hover:bg-blue-100">
      <h3 className="mb-2 text-center text-sm font-medium text-gray-700">
        Contact me
      </h3>
      <div className="mb-2 text-center font-mono text-sm text-gray-600">
        {user}[at]{domain}
      </div>
      <div className="flex gap-2">
        <Link
          rel="me"
          href={`mailto:${email}`}
          className="flex flex-1 items-center justify-center gap-1 rounded-md bg-blue-50 px-2 py-1 text-xs text-blue-600 transition-colors duration-200 hover:bg-blue-50"
        >
          <Mail className="h-3 w-3" />
          Email
        </Link>
        <button
          onClick={copyToClipboard}
          className="flex w-full items-center justify-center space-x-2 rounded bg-gray-200 px-3 py-2 text-sm text-gray-600 outline-1 outline-gray-300 transition-colors duration-200 hover:bg-gray-300"
          data-umami-event="copy_email"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProfileEmailCard;
