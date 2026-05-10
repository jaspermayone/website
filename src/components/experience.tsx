import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { experience } from "@/lib/experience";
import { ExperienceItem } from "@/lib/types";
import styles from "@/styles/Misc.module.css";

const ExperienceColumn = ({ items }: { items: ExperienceItem[] }) => (
  <div className="flex-1">
    <Accordion type="single" collapsible>
      {items.map((item, index) => (
        <AccordionItem
          key={item.company}
          value={`item-${index}`}
          className="mb-2 border-b-0 last:mb-0"
        >
          <AccordionTrigger className="rounded-lg p-2 text-sm hover:bg-blue-50 hover:no-underline data-[state=open]:bg-blue-50 dark:hover:bg-zinc-600 dark:data-[state=open]:bg-zinc-600">
            <div className="text-left group-hover:bg-blue-50 dark:group-hover:bg-zinc-700">
              {item.company}
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-2">
            <p className="text-sm text-zinc-700 dark:text-stone-200">
              {item.role}
            </p>
            <p className="mt-1 text-xs text-zinc-500 dark:text-stone-400">
              {item.location}
            </p>
            <p className="text-xs text-zinc-500 italic dark:text-stone-400">
              {item.date}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default function Experience() {
  const columnSize = Math.ceil(experience.length / 2);
  const firstColumn = experience.slice(0, columnSize);
  const secondColumn = experience.slice(columnSize, columnSize * 2);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <h2 className={styles.lightUl}>Experience</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <ExperienceColumn items={firstColumn} />
        <ExperienceColumn items={secondColumn} />
      </div>
    </div>
  );
}
