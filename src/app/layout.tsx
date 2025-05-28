import "@/styles/globals.css"; 
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import MobileRedirect from "@/components/MobileRedirect";
import { redirects } from "@/lib/defs";

const cuteNotes = localFont({
  src: [
    {
      path: "../../public/fonts/CuteNotes.ttf",
      style: "normal",
    },
  ],
  variable: "--font-cuteNotes",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Jasper Mayone",
    default: "Jasper Mayone",
  },
  description:
    "Creative organizer from Vermont with passion for programming, photography and adventure. Turning big ideas into meaningful projects.",
  applicationName: "Jasper Mayone",
  keywords: ["Jasper", "Mayone", "Jasper Mayone"],
  authors: [
    {
      name: "Jasper Mayone",
      url: "https://jaspermayone.com",
    },
  ],
  creator: "Jasper Mayone",
  publisher: "Jasper Mayone",
  metadataBase: new URL("https://jaspermayone.com"),
  // verification: {
  // google:
  // },

// Enhanced Open Graph
openGraph: {
  title: "Jasper Mayone",
  description:
    "Creative organizer from Vermont with passion for programming, photography and adventure. Turning big ideas into meaningful projects.",
  url: "https://jaspermayone.com",
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
  description:
    "Creative organizer from Vermont with passion for programming, photography and adventure. Turning big ideas into meaningful projects.",
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

alternates: {
  canonical: "https://jaspermayone.com",
},

// Added category for better classification
category: "Personal",
}

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jasper Mayone",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://jaspermayone.com/#person",
      "name": "Jasper Mayone",
      "givenName": "Jasper",
      "familyName": "Mayone",
      "gender": "male",
      "pronouns": "he/they",
      "age": 18,
      "description": "18-year-old post high school graduate from rural Vermont. Circus performer, coder, and photographer pursuing a gap year after graduating high school a year early.",
      "url": "https://jaspermayone.com",
      "birthPlace": {
        "@type": "Place",
        "name": "Vermont",
        "addressCountry": "US"
      },
      "homeLocation": {
        "@type": "Place",
        "name": "Rural Vermont",
        "addressRegion": "Vermont",
        "addressCountry": "US"
      },
      "knowsAbout": [
        "Circus Arts",
        "Computer Programming",
        "Photography",
        "Documentary Film Production",
        "Event Organization",
        "Leadership",
        "Business Development"
      ],
      "hasSkill": [
        "Circus Performance",
        "Software Development",
        "Photography",
        "Film Production",
        "Event Management", 
        "Project Coordination",
        "Leadership"
      ],
      "interestIn": [
        "Reading",
        "Outdoor Activities",
        "Photography",
        "Computer Programming",
        "Cooking",
        "Circus Arts",
        "Environmental Issues",
        "Business Ventures"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Harwood Union High School"
      },
      "sameAs": [
        "https://jaspermayone.com"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://jaspermayone.com/#website",
      "url": "https://jaspermayone.com",
      "name": "Jasper Mayone - Personal Website",
      "alternateName": "Jasper Mayone Portfolio",
      "description": "Personal website of Jasper Mayone - an 18-year-old circus performer, coder, and photographer from rural Vermont",
      "about": {
        "@id": "https://jaspermayone.com/#person"
      },
      "author": {
        "@id": "https://jaspermayone.com/#person"
      },
      "creator": {
        "@id": "https://jaspermayone.com/#person"
      },
      "publisher": {
        "@id": "https://jaspermayone.com/#person"
      },
      "inLanguage": "en-US",
      "copyrightHolder": {
        "@id": "https://jaspermayone.com/#person"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://jaspermayone.com/#webpage",
      "url": "https://jaspermayone.com",
      "name": "Jasper Mayone - Circus Artist, Coder & Photographer",
      "description": "Meet Jasper Mayone, an 18-year-old circus performer, software developer, and photographer from rural Vermont. Currently on a gap year after graduating high school early.",
      "isPartOf": {
        "@id": "https://jaspermayone.com/#website"
      },
      "about": {
        "@id": "https://jaspermayone.com/#person"
      },
      "mainEntity": {
        "@id": "https://jaspermayone.com/#person"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://jaspermayone.com"
          }
        ]
      }
    }
  ],
  "mentions": [
   {
    "@type": "Article",
    "url": "https://www.valleyplayers.com/oliver-2019",
    "publisher": "Valley Players"
   },
   {
    "@type": "Article",
    "url": "https://www.valleyplayers.com/past-shows-1/oliver---revival",
    "publisher": "Valley Players"
   },
   {
    "@type": "Article",
    "url": "https://www.ourherald.com/articles/the-valley-players-will-present-the-mousetrap-in-waitsfield/",
    "publisher": "Our Herald"
   },
   {
    "@type": "Article",
    "url": "https://www.waterburyroundabout.org/community-archive/whwso8o3u19jbcj9gi50mzcdi6tm8d",
    "publisher": "Waterbury Roundabout"
   },
   {
    "@type": "Article",
    "url": "https://theaterengine.com/productions/2702",
    "publisher": "Theater Engine"
   },
   {
    "@type": "Article",
    "url": "https://huhsnewspaper.com/staff_name/jasper-mayone/",
    "publisher": "Harwood Union High School Newspaper"
   },
   {
    "@type": "Organization",
    "url": "https://www.madrivermentoring.com/staff",
    "name": "Mad River Mentoring"
   },
   {
    "@type": "Article",
    "url": "https://www.waterburyroundabout.org/education/yc7o3f5vz3lvmvi8ea3lgxzett17y7",
    "publisher": "Waterbury Roundabout"
   },
   {
    "@type": "Article",
    "url": "https://www.sevendaysvt.com/guides/the-art-of-a-frame-building-35270341",
    "publisher": "Seven Days"
   },
   {
    "@type": "Article",
    "url": "https://archive.nytimes.com/query.nytimes.com/gst/fullpage-9F06E4DE153AF936A35750C0A96F9C8B63.html",
    "publisher": "New York Times"
   },
   {
    "@type": "Article",
    "url": "https://www.valleyreporter.com/index.php/news/artsent/18053-willy-wonka-a-world-of-pure-imagination",
    "publisher": "The Valley Reporter" 
   },
   {
    "@type": "Article",
    "url": "https://www.valleyreporter.com/index.php/news/artsent/18031-willy-wonka-coming-to-the-valley-players",
    "publisher": "The Valley Reporter" 
   }
  ]
}

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
    <html lang="en" className={`light ${cuteNotes.variable}`}>
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

        {redirects.map((redirect) => (
          <link rel="me" href={redirect.destination} key={redirect.slug}/>
        ))}

       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData)
          }}
        />

        <meta name="apple-mobile-web-app-title" content="Jasper Mayone" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme color for mobile browsers */}
        {/* <meta name="theme-color" content="#1a1a1a" /> */}
        {/* <meta name="msapplication-TileColor" content="#1a1a1a" /> */}

      

      </head>
      <body className={`${cuteNotes.variable} font-sans`}>
        <Script
          src="https://kit.fontawesome.com/96163f3b63.js"
          crossOrigin="anonymous"
        />
        <MobileRedirect>
          {children}
        </MobileRedirect>
        <SpeedInsights />
      </body>
    </html>
  );
}
