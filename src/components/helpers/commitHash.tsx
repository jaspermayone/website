"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { formatDistanceToNow } from "date-fns";

interface CommitHashProps {
  color?: string;
}

export default function CommitHash({ color }: CommitHashProps) {
  const commitDate = new Date(process.env.COMMIT_DATE!);
  const formattedCommitDate = formatDistanceToNow(commitDate, {
    addSuffix: true,
  });

  const textColor = color || "#4a5565";
  const linkColor = color === "#ffffff" ? "#61b8ff" : "#56ba8e";

  return (
    <div>
      <span className="hidden text-xs sm:block" style={{ color: textColor }}>
        <TooltipPrimitive.Provider>
          <TooltipPrimitive.Root>
            <TooltipPrimitive.Trigger asChild>
              <a
                className="hover:text-blur underline decoration-wavy transition-colors duration-300"
                style={{
                  color: linkColor,
                  textDecorationColor: linkColor,
                }}
                href={`https://github.com/jaspermayone/website/tree/${process.env.COMMIT_HASH}?utm_source=jaspermayone.com&utm_medium=referral`}
              >
                {process.env.COMMIT_HASH}
              </a>
            </TooltipPrimitive.Trigger>
            <TooltipPrimitive.Portal>
              <TooltipPrimitive.Content
                className="z-50 rounded-xl border border-slate-200 bg-white p-3 font-mono text-sm text-slate-800 shadow-xl backdrop-blur-sm dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
                sideOffset={5}
              >
                {process.env.FULL_COMMIT_HASH}
                <TooltipPrimitive.Arrow className="fill-white dark:fill-slate-800" />
              </TooltipPrimitive.Content>
            </TooltipPrimitive.Portal>
          </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
        from {formattedCommitDate}.
      </span>
    </div>
  );
}
