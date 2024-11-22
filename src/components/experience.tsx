import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ExperienceItem {
  title: string;
  role: string;
  date: string;
  link: string;
}

import { experience } from "@/lib/experience";

export default function Experience() {
  const midpoint = Math.ceil(experience.length / 2);
  const leftColumn = experience.slice(0, midpoint);
  const rightColumn = experience.slice(midpoint);

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
            key={item.title}
            value={`item-${index}`}
            className="mb-2 last:mb-0 border-b-0"
          >
            <AccordionTrigger className="py-2 hover:no-underline hover:bg-gray-50 rounded-lg px-3 text-sm">
              <div className="text-left">{item.title}</div>
            </AccordionTrigger>
            <AccordionContent className="px-3 py-2">
              <p className="text-gray-700 text-sm">{item.role}</p>
              <p className="text-xs text-gray-500 mt-1">{item.date}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="font-medium text-xl pb-4">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ExperienceColumn items={leftColumn} columnId="left" />
        <ExperienceColumn items={rightColumn} columnId="right" />
      </div>
    </div>
  );
}
