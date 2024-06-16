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

export default function Experience() {
  const experience: ExperienceItem[] = [
    {
      title: "Hack Club",
      role: "Gap Year",
      date: "May 2024 - Present",
      link: "https://hackclub.com",
    },
    {
      title: "Harwood Unified Union School District",
      role: "Student Assistant",
      date: "Sep 2021 - Present",
      link: "https://huusd.org/",
    }
  ];

  return (
    <>
      <div>
        <p className="font-medium text-xl pb-5">Experience</p>
        {experience.map((item, index) => (
          <>
            <div key={index} className="pb-5 w-72">
              <Accordion type="single" collapsible>
                <AccordionItem value={index.toString()}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>
                    <p>{item.role}</p>
                    <br />
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
