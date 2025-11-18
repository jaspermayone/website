import { ThemeProvider } from "@/components/theme-provider";
import { ThemeUpdater } from "@/components/theme-updater";
import { age, redirects } from "@/lib/defs";
import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { ViewTransitions } from "next-view-transitions";
import localFont from "next/font/local";
import Script from "next/script";

const cuteNotes = localFont({
  src: [
    {
      path: "../../public/fonts/CuteNotes/CuteNotes.ttf",
      style: "normal",
    },
  ],
  variable: "--font-cuteNotes",
});

const balgin = localFont({
  src: [
    {
      path: "../../public/fonts/Balgin/BalginText-Light.otf",
      style: "normal",
    },
  ],
  variable: "--font-balgin",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Jasper Mayone",
    default: "Jasper Mayone",
  },
  description: `A ${age}-year-old college student from rural Vermont, currently residing in Boston, while attending Wentworth Institute of Technology as a computer science major. When not in school or at work, Jasper's hobbies include reading, being in the great outdoors, photography, computer programming, cooking, and running away to join the circus.`,
  applicationName: "Jasper Mayone",
  keywords: ["Jasper", "Mayone", "Jasper Mayone"],
  authors: [
    {
      name: "Jasper Mayone",
      url: "https://www.jaspermayone.com",
    },
  ],
  creator: "Jasper Mayone",
  publisher: "Jasper Mayone",
  metadataBase: new URL("https://www.jaspermayone.com"),

  // Enhanced Open Graph
  openGraph: {
    title: "Jasper Mayone",
    description: `A ${age}-year-old college student from rural Vermont, currently residing in Boston, while attending Wentworth Institute of Technology as a computer science major. When not in school or at work, Jasper's hobbies include reading, being in the great outdoors, photography, computer programming, cooking, and running away to join the circus.`,
    url: "https://www.jaspermayone.com",
    siteName: "Jasper Mayone",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Jasper Mayone",
        type: "image/png",
      },
    ],
  },

  // Enhanced Twitter/X metadata
  twitter: {
    card: "summary_large_image",
    site: "@jaspermayone", // Add if you have a Twitter account
    creator: "@jaspermayone", // Add if John has a Twitter
    title: "Jasper Mayone",
    description: `A ${age}-year-old college student from rural Vermont, currently residing in Boston, while attending Wentworth Institute of Technology as a computer science major. When not in school or at work, Jasper's hobbies include reading, being in the great outdoors, photography, computer programming, cooking, and running away to join the circus.`,
    images: [
      {
        url: "/opengraph-image.png",
        alt: "Jasper Mayone",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Added category for better classification
  category: "Personal",
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jasper Mayone",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.jaspermayone.com/#person",
      name: "Jasper Mayone",
      givenName: "Jasper",
      familyName: "Mayone",
      gender: "male",
      pronouns: "he/they",
      description: `A ${age}-year-old post college student from rural Vermont. Circus performer, coder, and photographer pursuing a major in Computer Science at Wentworth Institute of Technology in Boston.`,
      url: "https://www.jaspermayone.com",
      birthPlace: {
        "@type": "Place",
        name: "Vermont",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Vermont",
          addressCountry: "US",
        },
      },
      homeLocation: {
        "@type": "Place",
        name: "Rural Vermont",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Vermont",
          addressCountry: "US",
        },
      },
      knowsAbout: [
        "Circus Arts",
        "Computer Programming",
        "Photography",
        "Documentary Film Production",
        "Event Organization",
        "Leadership",
        "Business Development",
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Harwood Union High School",
          address: {
            "@type": "PostalAddress",
            addressRegion: "Vermont",
            addressCountry: "US",
          },
        },
      ],
      affiliation: {
        "@type": "EducationalOrganization",
        "@id": "https://wit.edu",
        name: "Wentworth Institute of Technology",
        url: "https://wit.edu",
        address: {
          "@type": "PostalAddress",
          streetAddress: "550 Huntington Avenue",
          addressLocality: "Boston",
          addressRegion: "Massachusetts",
          postalCode: "02115",
          addressCountry: "US",
        },
        description:
          "Private technological university in Boston, Massachusetts",
      },
      worksFor: [
        {
          "@type": "Organization",
          name: "Patchwork Labs",
          url: "https://patchworklabs.org",
          description:
            "Nonprofit providing fiscal sponsorship for hackathons and STEM projects",
        },
      ],
      sameAs: [
        "https://www.jaspermayone.com",
        "https://github.com/jaspermayone",
        "https://bsky.app/profile/jaspermayone.com",
        "https://www.linkedin.com/in/jaspermayone",
        "https://www.instagram.com/jasper.mayone",
        "https://www.threads.net/@jasper.mayone",
        "https://www.youtube.com/@jasper.does.circus",
        "https://x.com/jaspermayone",
        "https://dev.to/jaspermayone",
        "https://www.reddit.com/user/j-dogcoder",
        "https://hackerone.com/jmayone",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.jaspermayone.com/#website",
      url: "https://www.jaspermayone.com",
      name: "Jasper Mayone - Personal Website",
      alternateName: "Jasper Mayone Portfolio",
      description: `Personal website of Jasper Mayone - a ${age}-year-old circus performer, coder, and photographer from rural Vermont`,
      about: {
        "@id": "https://www.jaspermayone.com/#person",
      },
      author: {
        "@id": "https://www.jaspermayone.com/#person",
      },
      creator: {
        "@id": "https://www.jaspermayone.com/#person",
      },
      publisher: {
        "@id": "https://www.jaspermayone.com/#person",
      },
      inLanguage: "en-US",
      copyrightHolder: {
        "@id": "https://www.jaspermayone.com/#person",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.jaspermayone.com/#webpage",
      url: "https://www.jaspermayone.com",
      name: "Jasper Mayone - Circus Artist, Coder & Photographer",
      description: `Meet Jasper Mayone, a ${age}-year-old circus performer, software developer, and photographer from rural Vermont. Currently pursuing a major in Computer Science at Wentworth Institute of Technology in Boston.`,
      isPartOf: {
        "@id": "https://www.jaspermayone.com/#website",
      },
      about: {
        "@id": "https://www.jaspermayone.com/#person",
      },
      mainEntity: {
        "@id": "https://www.jaspermayone.com/#person",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.jaspermayone.com",
          },
        ],
      },
    },
  ],
  mentions: [
    {
      "@type": "Article",
      url: "https://www.valleyplayers.com/oliver-2019",
      image:
        "https://static.wixstatic.com/media/70c1f7_16617a7e14a342168a8dc67e26375db1~mv2.jpg/v1/fill/w_582,h_442,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/P1100936%20(2)_JPG.jpg",
      author: "Valley Players",
      headline: "Oliver - The Musical",
      publisher: "Valley Players",
    },
    {
      "@type": "Article",
      url: "https://www.valleyplayers.com/past-shows-1/oliver---revival",
      image:
        "https://static.wixstatic.com/media/70c1f7_16617a7e14a342168a8dc67e26375db1~mv2.jpg/v1/fill/w_582,h_442,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/P1100936%20(2)_JPG.jpg",
      author: "Valley Players",
      publisher: "Valley Players",
    },
    {
      "@type": "Article",
      url: "https://www.ourherald.com/articles/the-valley-players-will-present-the-mousetrap-in-waitsfield/",
      publisher: "Our Herald",
    },
    {
      "@type": "Article",
      url: "https://www.waterburyroundabout.org/community-archive/whwso8o3u19jbcj9gi50mzcdi6tm8d",
      publisher: "Waterbury Roundabout",
    },
    {
      "@type": "Article",
      url: "https://theaterengine.com/productions/2702",
      publisher: "Theater Engine",
    },
    {
      "@type": "Article",
      url: "https://huhsnewspaper.com/staff_name/jasper-mayone/",
      publisher: "Harwood Union High School Newspaper",
    },
    {
      "@type": "Organization",
      url: "https://www.madrivermentoring.com/staff",
      name: "Mad River Mentoring",
    },
    {
      "@type": "Article",
      url: "https://www.waterburyroundabout.org/education/yc7o3f5vz3lvmvi8ea3lgxzett17y7",
      publisher: "Waterbury Roundabout",
    },
    {
      "@type": "Article",
      url: "https://www.sevendaysvt.com/guides/the-art-of-a-frame-building-35270341",
      publisher: "Seven Days",
    },
    {
      "@type": "Article",
      url: "https://archive.nytimes.com/query.nytimes.com/gst/fullpage-9F06E4DE153AF936A35750C0A96F9C8B63.html",
      publisher: "New York Times",
    },
    {
      "@type": "Article",
      url: "https://www.valleyreporter.com/index.php/news/artsent/18053-willy-wonka-a-world-of-pure-imagination",
      publisher: "The Valley Reporter",
    },
    {
      "@type": "Article",
      url: "https://www.valleyreporter.com/index.php/news/artsent/18031-willy-wonka-coming-to-the-valley-players",
      publisher: "The Valley Reporter",
    },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cuteNotes.variable} ${balgin.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://umami.hogwarts.dev" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="alternate" type="application/rss+xml" href="/press.xml" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://ka-f.fontawesome.com"
          crossOrigin="anonymous"
        />

        <script
          defer
          src="https://umami.hogwarts.dev/script.js"
          data-website-id="00bdf44f-0b0b-4c26-bc25-730672583d82"
        />

        {/* Enhanced favicon setup */}
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png?v=2"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=2"
        />

        <link rel="me" href="https://jsp.lat" />
        <link rel="me" href="https://jaspermayone.cv" />
        <link rel="me" href="https://jasper.cv" />
        <link rel="me" href="https://hogwarts.dev" />
        <link rel="me" href="https://singlefeather.com" />
        <link rel="me" href="https://singlefeather.dev" />

        {/* <meta name="fediverse:creator" content="@taciturnaxoltol@social.dino.icu" /> */}

        <div className="h-card" style={{ display: "none" }}>
          <a className="u-url" rel="me home" href="https://jaspermayone.com">
            <span className="p-name">Jasper Mayone</span>
          </a>
          <p className="p-given-name">Jasper</p>
          <p className="p-family-name">Mayone</p>
          <p className="dt-bday">2006-08-05</p>
          <p className="p-sex">male</p>
          <p className="p-note">
            {age}, college student from rural Vermont, currently residing in
            Boston, attending Wentworth Institute of Technology as a computer
            science major. Hobbies include reading, being in the great outdoors,
            photography, computer programming, cooking, and running away to join
            the circus.
          </p>
          <a className="u-email" href="mailto:me@dunkirk.sh" rel="me">
            me@dunkirk.sh
          </a>
          <div className="p-adr h-adr">
            <span className="p-country-name">United States of America</span>
          </div>
          <img
            className="u-photo"
            src="/images/jmdark-min.webp"
            alt="Jasper Mayone"
          />
        </div>

        {redirects
          .filter((redirect) => redirect.linkrelme)
          .map((redirect) => (
            <link rel="me" href={redirect.destination} key={redirect.slug} />
          ))}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />

        <meta name="apple-mobile-web-app-title" content="Jasper Mayone" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#56ba8e" />
        <meta name="msapplication-TileColor" content="#56ba8e" />
        <meta name="msapplication-TileImage" content="/mstile-150x150.png" />

        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${cuteNotes.variable} ${balgin.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeUpdater />
          <Script
            src="https://kit.fontawesome.com/96163f3b63.js"
            crossOrigin="anonymous"
          />
          <ViewTransitions>{children}</ViewTransitions>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
