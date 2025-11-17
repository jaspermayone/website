import { Briefcase, GraduationCap, Mail, Mailbox, Star } from "lucide-react";

// emails come in like me@jaspermayone.com
// i want to display as me[at]jaspermayone[dot]com

type cardArgs = {
  email: string;
  isPrimary: boolean | undefined;
  // isWork: boolean
  isSchool: boolean | undefined;
  isBusiness: boolean | undefined;
  service?: string;
  description?: string;
};

export const EmailCard = (cardArgs: cardArgs) => {
  const { email, isPrimary, isSchool, isBusiness, service, description } =
    cardArgs;

  const formatEmail = (email: string) => {
    const [localPart, domainPart] = email.split("@");
    const domainSegments = domainPart.split(".");
    const formattedDomain = domainSegments.join("[dot]");
    return `${localPart}[at]${formattedDomain}`;
  };

  return (
    <div className="group relative rounded-lg border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-blue-300 dark:border-gray-700 dark:bg-slate-800 dark:hover:border-blue-500">
      <div className="flex items-center gap-2">
        <Mailbox className="h-4 w-4 text-gray-400 dark:text-gray-500" />
        <span className="font-mono text-sm text-gray-800 dark:text-gray-200">
          {formatEmail(email)}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2">
        {/* button that only shows up if service param is null */}
        {!service && (
          <a
            href={`mailto:${email}`}
            rel="me"
            className="flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600 transition-colors duration-200 hover:bg-blue-100 dark:bg-blue-900/50 dark:text-blue-200 dark:hover:bg-blue-800/50"
          >
            <Mail className="h-3 w-3" />
            Send Email
          </a>
        )}

        {description && (
          <p className="mt-1 text-sm text-gray-500 italic dark:text-gray-400">
            {description}
          </p>
        )}

        {isPrimary && (
          <span className="flex items-center gap-1 rounded-full bg-rose-100 px-2 py-1 text-xs text-rose-800 dark:bg-rose-900/50 dark:text-rose-200">
            <Star className="h-3 w-3" />
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
          <span className="flex items-center gap-1 rounded-full bg-violet-100 px-2 py-1 text-xs text-violet-800 dark:bg-violet-900/50 dark:text-violet-200">
            <GraduationCap className="h-3 w-3" />
            School
          </span>
        )}
        {isBusiness && (
          <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-900/50 dark:text-green-200">
            <Briefcase className="h-3 w-3" />
            Business
          </span>
        )}
      </div>
    </div>
  );
};
