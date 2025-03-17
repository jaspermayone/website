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
    <div className="w-64 mt-2 p-3 border border-blurre rounded-lg hover:bg-blue-100 transition-all duration-300 bg-white/50">
      <h3 className="text-gray-700 font-medium text-sm mb-2 text-center">
        Contact me
      </h3>
      <div className="text-sm text-gray-600 font-mono mb-2 text-center">
        {user}[at]{domain}
      </div>
      <div className="flex gap-2">
        <Link
          rel="me"
          href={`mailto:${email}`}
          className="flex items-center justify-center gap-1 px-2 py-1 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-50 transition-colors duration-200 text-xs flex-1"
        >
          <Mail className="w-3 h-3" />
          Email
        </Link>
        <button
          onClick={copyToClipboard}
          className="flex items-center justify-center space-x-2 px-3 py-2 rounded bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors duration-200 outline-1 outline-gray-300 text-sm w-full"
          data-umami-event="copy_email"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProfileEmailCard;
