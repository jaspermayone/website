import { Briefcase, GraduationCap, Mail, Mailbox, Star } from "lucide-react";

// emails come in like me@jaspermayone.com
// i want to display as me[at]jaspermayone[dot]com

export const EmailCard = ({
  email,
  isPrimary,
  // isWork,
  isSchool,
  isBusiness,
}) => {
  const formatEmail = (email) => {
    const [localPart, domainPart] = email.split("@");
    const domainSegments = domainPart.split(".");
    const formattedDomain = domainSegments.join("[dot]");
    return `${localPart}[at]${formattedDomain}`;
  };

  return (
    <div className="group relative bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300">
      <div className="flex items-center gap-2">
        <Mailbox className="w-4 h-4 text-gray-400 dark:text-gray-500" />
        <span className="font-mono text-sm text-gray-800 dark:text-gray-200">
          {formatEmail(email)}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <a
          href={`mailto:${email}`}
          rel="me"
          className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors duration-200"
        >
          <Mail className="w-3 h-3" />
          Send Email
        </a>

        {isPrimary && (
          <span className="flex items-center gap-1 bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 text-xs px-2 py-1 rounded-full">
            <Star className="w-3 h-3" />
            Primary
          </span>
        )}
        {/* {isWork && (
          <span className="flex items-center gap-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 text-xs px-2 py-1 rounded-full">
            <Briefcase className="w-3 h-3" />
            Work
          </span>
        )} */}
        {isSchool && (
          <span className="flex items-center gap-1 bg-violet-100 dark:bg-violet-900/50 text-violet-800 dark:text-violet-200 text-xs px-2 py-1 rounded-full">
            <GraduationCap className="w-3 h-3" />
            School
          </span>
        )}
        {isBusiness && (
          <span className="flex items-center gap-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">
            <Briefcase className="w-3 h-3" />
            Business
          </span>
        )}
      </div>
    </div>
  );
};
