import dynamic from "next/dynamic";

const Tooltip = dynamic(
  () => import("@material-tailwind/react/components/Tooltip"),
  { ssr: false },
);

import { formatDistanceToNow, isWeekend } from "date-fns";

interface CommitHashProps {
  color?: string;
}

export default function CommitHash({ color }: CommitHashProps) {
  const commitDate = new Date(process.env.COMMIT_DATE!);
  const isitweekend = isWeekend(commitDate);
  const formattedCommitDate = formatDistanceToNow(commitDate, {
    addSuffix: true,
  });

  const textColor = color || "#4a5565";
  const linkColor = color === "#ffffff" ? "#61b8ff" : "#56ba8e";

  return (
    <div>
      <span className="hidden text-xs sm:block" style={{ color: textColor }}>
        <a
          className="decoration-wavy underline hover:text-blur transition-colors duration-300"
          style={{
            color: linkColor,
            textDecorationColor: linkColor,
          }}
          href={`https://github.com/jaspermayone/website/tree/${process.env.COMMIT_HASH}?utm_source=jaspermayone.com&utm_medium=referral`}
        >
          <Tooltip
            content={process.env.FULL_COMMIT_HASH}
            className="rounded-xl bg-white dark:bg-slate-800 p-3 font-mono text-sm text-slate-800 dark:text-slate-200 shadow-xl border border-slate-200 dark:border-slate-600 backdrop-blur-sm"
          >
            {process.env.COMMIT_HASH}
          </Tooltip>
        </a>
        from {formattedCommitDate}.
      </span>
    </div>
  );
}
