import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExperienceItem } from "@/lib/types";

import { experience } from "@/lib/experience";

export default function Experience() {
  const columnSize = Math.ceil(experience.length / 3);
  const firstColumn = experience.slice(0, columnSize);
  const secondColumn = experience.slice(columnSize, columnSize * 2);
  const thirdColumn = experience.slice(columnSize * 2);

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
            <AccordionTrigger className="py-2 hover:no-underline hover:bg-gray-50 rounded-lg px-2 text-sm">
              <div className="text-left">{item.company}</div>
            </AccordionTrigger>
            <AccordionContent className="px-2 py-2">
              <p className="text-gray-700 text-sm">{item.role}</p>
              <p className="text-xs text-gray-500 mt-1">{item.location}</p>
              <p className="text-xs text-gray-500">{item.date}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-medium text-xl pb-4">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ExperienceColumn items={firstColumn} columnId="first" />
        <ExperienceColumn items={secondColumn} columnId="second" />
        <ExperienceColumn items={thirdColumn} columnId="third" />
      </div>
    </div>
  );
}
