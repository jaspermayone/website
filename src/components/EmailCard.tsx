import {
  Briefcase,
  Check,
  Copy,
  GraduationCap,
  Mail,
  Mailbox,
  Star,
} from "lucide-react";
import { useState } from "react";

export const EmailCard = ({ email, isPrimary, work, school }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <Mailbox className="w-4 h-4 text-gray-400 dark:text-gray-500" />
          <span className="font-mono text-sm text-gray-800 dark:text-gray-200">
            {email}
          </span>
        </div>
        <div className="flex gap-2">
          {isPrimary && (
            <span className="flex items-center gap-1 bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 text-xs px-2 py-1 rounded-full">
              <Star className="w-3 h-3" />
              Primary
            </span>
          )}
          {work && (
            <span className="flex items-center gap-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 text-xs px-2 py-1 rounded-full">
              <Briefcase className="w-3 h-3" />
              Work
            </span>
          )}
          {school && (
            <span className="flex items-center gap-1 bg-violet-100 dark:bg-violet-900/50 text-violet-800 dark:text-violet-200 text-xs px-2 py-1 rounded-full">
              <GraduationCap className="w-3 h-3" />
              School
            </span>
          )}
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        <a
          href={`mailto:${email}`}
          rel="me"
          className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors duration-200"
        >
          <Mail className="w-3 h-3" />
          Send Email
        </a>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors duration-200"
          data-umami-event="copy_email"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3" />
              Copied!
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
