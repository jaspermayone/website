import dynamic from "next/dynamic";

const Tooltip = dynamic(
  () => import("@material-tailwind/react/components/Tooltip"),
  { ssr: false },
);

import { formatDistanceToNow, isWeekend } from "date-fns";

export default function CommitHash() {
  const commitDate = new Date(process.env.COMMIT_DATE!);
  const isitweekend = isWeekend(commitDate);
  const formattedCommitDate = formatDistanceToNow(commitDate, {
    addSuffix: true,
  });
  return (
    <div>
      <span className="sticky hidden text-xs sm:block text-gray-600">
        v{process.env.APP_VERSION} {"("}
        <a
          className="text-blue-500 dark:text-blue-300 decoration-wavy underline decoration-blue-500 dark:decoration-blue-300 hover:text-blurre transition-colors duration-300"
          href={`https://github.jaspermayone.com/website/tree/${process.env.COMMIT_HASH}`}
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
