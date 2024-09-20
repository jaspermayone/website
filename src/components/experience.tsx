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
      title: "Jewish Community of Greater Stowe (JCOGS), Stowe, VT",
      role: "Part Time Technology Coordinator",
      date: "September 2023 - Present",
      link: "https://www.jcogs.org/",
    },
    {
      title: "The Hack Foundation, Shelburne, VT",
      role: "Gap Year Software Engineer",
      date: "September 2023 - July 2024",
      link: "https://www.hackclub.com/",
    },
    {
      title: "Harwood Union High School, Duxbury, VT",
      role: "Student Tech Assistant",
      date: "September 2021 - June 2024",
      link: "https://huusd.org/",
    },
    {
      title: "Three Mountain Associates, Waitsfield, VT",
      role: "Rep in training/Intern",
      date: "June 2018 - Present",
      link: "https://threemountainassociates.com/",
    },
    {
      title: "Signal Kitchen, Burlington, VT",
      role: "Event Registration Coordinator & Assistant to Event Director, Bookshop Manager",
      date: "February 2023 - February 2024",
      link: "https://signalkitchen.com/",
    },
    {
      title: "Sugarbush Resort, Warren VT",
      role: "F&B Waitstaff and Utility Worker",
      date: "December 2020 - February 2024",
      link: "https://sugarbush.com/",
    },
    {
      title: "Sadie Dog LLC, Warren, VT",
      role: "Busser / Event Staff",
      date: "November 2022 - December 2023",
      link: "https://www.pitcherinn.com/",
    },
    {
      title: "Valley Players Theater, Waitsfield, VT",
      role: "Lighting Designer & Operator",
      date: "December 2019 - November 2023",
      link: "https://valleyplayers.com/",
    },
    {
      title: "DeJames Hospitality, Waitsfield, VT",
      role: "Busser / Event Staff",
      date: "May 2022 - May 2023",
      link: "https://theroundbarn.com/",
    },
    {
      title: "Sugarbush Soaring Association, Warren, VT",
      role: "Line Crew Member",
      date: "July 2021 - September 2021",
      link: "https://sugarbushsoaring.com/",
    },
    {
      title: "Mad River Valley Television, Waitsfield, VT",
      role: "Media Intern",
      date: "May 2020 - October 2020",
      link: "https://mrvtv.com/",
    },
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
