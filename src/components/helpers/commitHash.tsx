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
  const linkColor = color === "#ffffff" ? "#61b8ff" : "#4299e1";

  return (
    <div>
      <span
        className="sticky hidden text-xs sm:block"
        style={{ color: textColor }}
      >
        v{process.env.APP_VERSION} {"("}
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
            className="rounded-xl bg-blue-50 dark:bg-slate-600 p-2 font-sans text-black dark:text-white shadow-lg "
          >
            {process.env.COMMIT_HASH}
          </Tooltip>
        </a>
        {")"} from {formattedCommitDate}.
      </span>
    </div>
  );
}
