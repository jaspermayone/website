export interface OGImageData {
  title: string;
  subtitle?: string;
  description?: string;
}

export const getPageOGData = (path: string): OGImageData => {
  const pathMappings: Record<string, OGImageData> = {
    "/": {
      title: "Jasper Mayone",
      subtitle: "Circus Artist • Coder • Photographer",
    },
    "/portfolio": {
      title: "Portfolio",
      subtitle: "Projects & Work by Jasper Mayone",
      description:
        "Full-stack development, circus performance, and creative projects",
    },
    "/contact": {
      title: "Contact",
      subtitle: "Get in Touch",
      description:
        "Reach out for collaborations, projects, or just to say hello",
    },
    "/uses": {
      title: "Uses",
      subtitle: "Tools & Setup",
      description: "Software, hardware, and gear I use daily",
    },
    "/now": {
      title: "Now",
      subtitle: "What I'm up to",
      description: "Current projects and focus areas",
    },
    "/photos": {
      title: "Photos",
      subtitle: "Photography by Jasper Mayone",
      description: "A gallery of photos I've taken over the years",
    },
    "/colophon": {
      title: "Colophon",
      subtitle: "About This Site",
      description: "How this website was built and designed",
    },
    "/panera": {
      title: "Panera",
      subtitle: "My Usual Order",
      description:
        "What I usually get at Panera, in case anyone wants to get me Panera",
    },
    "/green": {
      title: "Green",
      subtitle: "Sustainability Focus",
      description: "Environmental initiatives and green tech",
    },
    "/podroll": {
      title: "Podroll",
      subtitle: "Podcast Recommendations",
      description: "Curated list of podcasts worth listening to",
    },
    "/pfp": {
      title: "Profile Pictures",
      subtitle: "Avatar Collection",
      description: "Available profile pictures and avatars",
    },
    "/verify": {
      title: "Verify",
      subtitle: "Identity Verification",
      description: "Verify my identity across platforms",
    },
    "/concerts": {
      title: "Concerts",
      subtitle: "Live Music",
      description: "Concerts and shows I've been to",
    },
    "/conferences": {
      title: "Conferences",
      subtitle: "Events & Talks",
      description: "Conferences and events I've attended",
    },
    "/elsewhere": {
      title: "Elsewhere",
      subtitle: "Around the Internet",
      description: "Where to find me across the web",
    },
    "/friends": {
      title: "Friends",
      subtitle: "Cool People",
      description: "Websites of friends and people I admire",
    },
    "/hackathons": {
      title: "Hackathons",
      subtitle: "Building Things Fast",
      description: "Hackathons I've attended and organized",
    },
    "/hardware": {
      title: "Hardware",
      subtitle: "Devices & Gear",
      description: "The hardware I use day to day",
    },
    "/keys": {
      title: "Keys",
      subtitle: "Public Keys",
      description: "My public SSH and GPG keys",
    },
    "/open-source": {
      title: "Open Source",
      subtitle: "Projects & Contributions",
      description: "My open source work on GitHub",
    },
    "/slashes": {
      title: "Slashes",
      subtitle: "Slash Pages",
      description: "All the slash pages on this site",
    },
    "/support-me": {
      title: "Support Me",
      subtitle: "Fuel the Projects",
      description: "Ways to support my work",
    },
  };

  const fallbackTitle = path
    .replace(/^\//, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    pathMappings[path] || {
      title: fallbackTitle || "Jasper Mayone",
      subtitle: "jaspermayone.com",
    }
  );
};
