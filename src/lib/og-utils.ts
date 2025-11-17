export interface OGImageData {
  title: string;
  subtitle?: string;
  description?: string;
  type?: "default" | "portfolio" | "project" | "page";
}

export const getPageOGData = (path: string): OGImageData => {
  const pathMappings: Record<string, OGImageData> = {
    "/": {
      title: "Jasper Mayone",
      subtitle: "Circus Artist • Coder • Photographer",
      type: "default",
    },
    "/portfolio": {
      title: "Portfolio",
      subtitle: "Projects & Work by Jasper Mayone",
      description:
        "Full-stack development, circus performance, and creative projects",
      type: "portfolio",
    },
    "/contact": {
      title: "Contact",
      subtitle: "Get in Touch",
      description:
        "Reach out for collaborations, projects, or just to say hello",
      type: "page",
    },
    "/uses": {
      title: "Uses",
      subtitle: "Tools & Setup",
      description: "Software, hardware, and gear I use daily",
      type: "page",
    },
    "/now": {
      title: "Now",
      subtitle: "What I'm up to",
      description: "Current projects and focus areas",
      type: "page",
    },
    "/changelog": {
      title: "Changelog",
      subtitle: "Site Updates",
      description: "Recent changes and improvements to the site",
      type: "page",
    },
    "/colophon": {
      title: "Colophon",
      subtitle: "About This Site",
      description: "How this website was built and designed",
      type: "page",
    },
    "/panera": {
      title: "Panera",
      subtitle: "Menu Explorer",
      description: "Interactive Panera menu browser",
      type: "project",
    },
    "/green": {
      title: "Green",
      subtitle: "Sustainability Focus",
      description: "Environmental initiatives and green tech",
      type: "page",
    },
    "/podroll": {
      title: "Podroll",
      subtitle: "Podcast Recommendations",
      description: "Curated list of podcasts worth listening to",
      type: "page",
    },
    "/pfp": {
      title: "Profile Pictures",
      subtitle: "Avatar Collection",
      description: "Available profile pictures and avatars",
      type: "page",
    },
    "/verify": {
      title: "Verify",
      subtitle: "Identity Verification",
      description: "Verify my identity across platforms",
      type: "page",
    },
  };

  return (
    pathMappings[path] || {
      title: "Jasper Mayone",
      subtitle: path
        .replace("/", "")
        .replace("-", " ")
        .replace(/\b\w/g, (l) => l.toUpperCase()),
      type: "page",
    }
  );
};

// Helper function to generate OG image URL for any page
export const getOGImageUrl = (
  path: string,
  customData?: Partial<OGImageData>
) => {
  const baseUrl = "/api/og";
  const params = new URLSearchParams();

  if (customData) {
    if (customData.title) params.set("title", customData.title);
    if (customData.subtitle) params.set("subtitle", customData.subtitle);
    if (customData.description)
      params.set("description", customData.description);
    if (customData.type) params.set("type", customData.type);
  } else {
    params.set("path", path);
  }

  return `${baseUrl}?${params.toString()}`;
};

// Helper to generate complete OG metadata for any page
export const generateOGMetadata = (
  path: string,
  title: string,
  description: string,
  customData?: Partial<OGImageData>
) => {
  const ogImageUrl = getOGImageUrl(path, customData);

  return {
    openGraph: {
      title: `${title} - Jasper Mayone`,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - Jasper Mayone`,
        },
      ],
    },
    twitter: {
      title: `${title} - Jasper Mayone`,
      description,
      images: [
        {
          url: ogImageUrl,
          alt: `${title} - Jasper Mayone`,
        },
      ],
    },
  };
};
