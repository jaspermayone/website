import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { experience } from "@/lib/experience";
import { ExperienceItem } from "@/lib/types";
import styles from "@/styles/Misc.module.css";

export default function Experience() {
  const columnSize = Math.ceil(experience.length / 2);
  const firstColumn = experience.slice(0, columnSize);
  const secondColumn = experience.slice(columnSize, columnSize * 2);

  const ExperienceColumn = ({
    items,
    columnId,
  }: {
    items: ExperienceItem[];
    columnId: string;
  }) => (
    <div className="flex-1">
      <Accordion type="single" collapsible>
        {items.map((item, index) => (
          <AccordionItem
            key={item.company}
            value={`item-${index}`}
            className="mb-2 last:mb-0 border-b-0"
          >
            <AccordionTrigger className="py-2 rounded-lg px-2 text-sm hover:bg-blue-50 dark:hover:bg-slate-600 hover:no-underline data-[state=open]:bg-blue-50 dark:data-[state=open]:bg-slate-600">
              <div className="text-left group-hover:bg-blue-50 dark:group-hover:bg-slate-700">
                {item.company}
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-2 py-2">
              <p className="text-gray-700 dark:text-stone-200 text-sm">
                {item.role}
              </p>
              <p className="text-xs text-gray-500 dark:text-stone-400 mt-1">
                {item.location}
              </p>
              <p className="text-xs text-gray-500 dark:text-stone-400 italic">
                {item.date}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className={styles.lightUl}>Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ExperienceColumn items={firstColumn} columnId="first" />
        <ExperienceColumn items={secondColumn} columnId="second" />
      </div>
    </div>
  );
}
