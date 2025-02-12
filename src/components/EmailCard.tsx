"use client";
import {
  Briefcase,
  Check,
  Copy,
  GraduationCap,
  Mail,
  Mailbox,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const EmailCard = ({ email, isPrimary, work, school }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <Mailbox className="w-4 h-4 text-gray-400" />
          <span className="font-mono text-sm">{email}</span>
        </div>
        <div className="flex gap-2">
          {isPrimary && (
            <span className="flex items-center gap-1 bg-rose-100 text-rose-800 text-xs px-2 py-1 rounded-full">
              <Star className="w-3 h-3" />
              Primary
            </span>
          )}
          {work && (
            <span className="flex items-center gap-1 bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full">
              <Briefcase className="w-3 h-3" />
              Work
            </span>
          )}
          {school && (
            <span className="flex items-center gap-1 bg-violet-100 text-violet-800 text-xs px-2 py-1 rounded-full">
              <GraduationCap className="w-3 h-3" />
              School
            </span>
          )}
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        <Link
          href={`mailto:${email}`}
          className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-200"
        >
          <Mail className="w-3 h-3" />
          Send Email
        </Link>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors duration-200"
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
