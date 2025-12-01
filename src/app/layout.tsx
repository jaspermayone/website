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
  alternates: {
    canonical: "https://www.jaspermayone.com",
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
        <div className="h-card vcard" hidden={true}>
          {" "}
          {/* vcard class added for backward compatibility */}
          {/* === NAMES & IDENTITY === */}
          <span className="p-name fn">Jasper Mayone</span>{" "}
          {/* Full/formatted name */}
          <span className="p-given-name">Jasper</span> {/* First name */}
          <span className="p-additional-name">Devon</span>{" "}
          {/* Middle name(s) */}
          <abbr className="p-additional-name">D.</abbr>{" "}
          {/* Alt format for middle initial */}
          <span className="p-family-name">Mayone</span> {/* Last name */}
          <span className="p-sort-string">Mayone, Jasper</span>{" "}
          {/* How to sort alphabetically */}
          <span className="p-nickname">jaspermayone</span>{" "}
          {/* Nickname/alias/handle */}
          {/* === CONTACT INFORMATION === */}
          <a className="u-email" href="mailto:me@jaspermayone.com">
            me@jaspermayone.com
          </a>
          <a className="u-url" href="https://www.jaspermayone.com" rel="me">
            jaspermayone.com
          </a>
          <a className="u-url" href="https://github.com/jaspermayone" rel="me">
            GitHub
          </a>
          <a
            className="u-url"
            href="https://linkedin.com/in/jaspermayone"
            rel="me"
          >
            LinkedIn
          </a>
          {/* === VISUAL IDENTITY === */}
          <img
            className="u-photo"
            src="/images/jmdark-min.webp"
            alt="Jasper Mayone"
          />{" "}
          {/* Photo */}
          {/* === PERSONAL DETAILS === */}
          <time className="dt-bday bday" dateTime="2006-08-05">
            August 5, 2006
          </time>{" "}
          {/* Birthday */}
          <time className="dt-bday bday">--08-05</time>{" "}
          {/* Birthday without year */}
          <span className="p-sex">male</span> {/* Biological sex (vCard4) */}
          <span className="p-gender-identity">he/they</span>{" "}
          {/* Gender identity (vCard4) */}
          {/* === CATEGORIES & TAGS === */}
          <span className="p-category category">programmer</span>
          <span className="p-category category">photographer</span>
          <span className="p-category category">student</span>
          <span className="p-category category">vermonter</span>
          {/* === CRYPTOGRAPHIC KEYS === */}
          <pre className="u-key key">{`-----BEGIN PGP PUBLIC KEY BLOCK-----
mDMEZZzPrRYJKwYBBAHaRw8BAQdAKf9dZyL4NlwRAMdVoXkJpv//W/4HLpSIdr4+
SBRSVAe0I0phc3BlciBNYXlvbmUgPG1lQGphc3Blcm1heW9uZS5jb20+iQVJBBMW
CgTxAheABQsJCAcDBRUKCQgLBBYCAwECHgUCGQECGyOEFIAAAAAAEABrcHJvb2ZA
YXJpYWRuZS5pZGh0dHBzOi8vd3d3LnJlZGRpdC5jb20vdXNlci9qLWRvZ2NvZGVy
L2NvbW1lbnRzLzFsc3BubnAvb3BlbnBncDRmcHIwMGU2NDNjMjFmYWM5NjVmZmIy
OGQzYjcxNGQwZDQ1YTFkYWRhYWYvWhSAAAAAABAAQXByb29mQGFyaWFkbmUuaWRo
dHRwczovL2Jza3kuYXBwL3Byb2ZpbGUvdGVzdC5qYXNwZXJtYXlvbmUuY29tL3Bv
c3QvM2xwbmp6dXJvNGMydz4UgAAAAAAQACVwcm9vZkBhcmlhZG5lLmlkaHR0cHM6
Ly9vcmNpZC5vcmcvMDAwOS0wMDA5LTMwNDMtOTMwOT4UgAAAAAAQACVwcm9vZkBh
cmlhZG5lLmlkaHR0cHM6Ly9tYXN0b2Rvbi5zb2NpYWwvQGphc3Blcm1heW9uZUoU
gAAAAAAQADFwcm9vZkBhcmlhZG5lLmlkaHR0cHM6Ly9uZXdzLnljb21iaW5hdG9y
LmNvbS91c2VyP2lkPWphc3Blcm1heW9uZS0UgAAAAAAQABRwcm9vZkBhcmlhZG5l
LmlkZG5zOmpzcC5sYXQ/dHlwZT1UWFQyFIAAAAAAEAAZcHJvb2ZAYXJpYWRuZS5p
ZGRuczpob2d3YXJ0cy5kZXY/dHlwZT1UWFRVFIAAAAAAEAA8cHJvb2ZAYXJpYWRu
ZS5pZGh0dHBzOi8vYnNreS5hcHAvcHJvZmlsZS9qYXNwZXJtYXlvbmUuY29tL3Bv
c3QvM2xwYXIybmUyNnMyYjYUgAAAAAAQAB1wcm9vZkBhcmlhZG5lLmlkZG5zOmph
c3Blcm1heW9uZS5jb20/dHlwZT1UWFQ2FIAAAAAAEAAdcHJvb2ZAYXJpYWRuZS5p
ZGRuczpob2d3YXJ0cy5jaGFubmVsP3R5cGU9VFhUXhSAAAAAABAARXByb29mQGFy
aWFkbmUuaWRodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qYXNwZXJtYXlvbmUvNWU0
ZDkwZmFlMzVlZmUyZWZhYTdjZDQ3ZGQzNjZmODSXFIAAAAAAEAB+cHJvb2ZAYXJp
YWRuZS5pZG1hdHJpeDp1L2phc3Blci5tYXlvbmU/b3JnLmtleW94aWRlLnI9ZEJm
UVp4Q29HVm1TVHVqZml2Om1hdHJpeC5vcmcmb3JnLmtleW94aWRlLmU9Y0RkQzlw
Z19tbWFXb2lSX2ZWTEJTaFhScDZJZDA0NFJ5djQ0cTEzZl9rQUAUgAAAAAAQACdw
cm9vZkBhcmlhZG5lLmlkaHR0cHM6Ly9vcGVuY29sbGVjdGl2ZS5jb20vamFzcGVy
bWF5b25lXhSAAAAAABAARXByb29mQGFyaWFkbmUuaWRodHRwczovL2Jza3kuYXBw
L3Byb2ZpbGUvcmlnaHRub3cuamFzcGVybWF5b25lLmNvbS9wb3N0LzNscG5sYTdp
cjcyMnI4FIAAAAAAEAAfcHJvb2ZAYXJpYWRuZS5pZGh0dHBzOi8va2V5YmFzZS5p
by9qYXNwZXJtYXlvbmUYGGhrcHM6Ly9rZXlzLm9wZW5wZ3Aub3JnFiEEAOZDwh+s
ll/7KNO3FNDUWh2tqvoFAmjcHowACgkQFNDUWh2tqvqLDAEA/pz1mAPqCykBl5i2
6QIUEyQCpED7H5bJGLnKEwHqsyABALcHx/8Sv5ukkTkpV7iymu3+VO26rt1MMWa3
TmAxYksHiQI2BBABCAAgFiEEMnwMc7y+nVaXw+oj2IUMB3v6T80FAmWc1okCBwAA
CgkQ2IUMB3v6T82zGg//fUCltf/wZH2i0lR47plbpYUdYINug28wdzDZ6naY/kNP
ZTtcUkxtNsk9xV0xsyWjdYdnvwZdALCjnbuPsGYyHjyQZrqs05SEKYIkGNiphKMi
UUtQV2QQZXfw6z6fqubn0F6F1GR0Oe2Ntji2xMGPCKJJbWzesUhsQl3fwRM+QuYC
MCoDWgCKMy3kJp8BM3Vep2s5XbgdvsfIEbPIj0pl141I3S5Ygy7L2i46naRiJNun
Oe6gzBrQ+0KBxrUCyGSMxF2ojAIH+BHNne1brEEnn35IhF0I7Ygf/62TRCTSSGzX
uI20ZgBvmudKSxgV5OhLgtOLBzbKZlxHRHnP/u6RaNQAhY4jWa8YDpwZ7u/bopIe
ySdTg/9NN55Txt7yyh2va6Fgtk/Ds5NuVwn+lVt3xMM7kK1ngnCiXxwAlhqW50Qh
1H0o+EiSiwMnx9VJHwrd7dzwRnrIaXQ2Kd8g974MMXP//42RPp6+5NBImUdUXhWL
oTPz/AKnzPeZ4FVZKM7IbGPSiS4SeDsDvJH8qPztx08rMhWS1fESgYx4LTFYmBIk
qy73A9ba6SL4c4e9bKxBow4N3o55FH+HUfLawg1M+vtCWEhVMWInyWkzPz+P0lpK
Hfgrt89XZNq4ot8yPVTJKhGmh6c3lDZX7oVvxsMYag+3meVi7xox81ELqf+FuZC0
aE9ic2lkaWFuIEdpdCBTeW5jIH4gSmFzcGVyIE1heW9uZSAoT2JzaWRpYW4gR2l0
IFN5bmMpIDxqYXNwZXIubWF5b25lK29ic2lkaWFuLWdpdC1zeW5jQGphc3Blcm1h
eW9uZS5jb20+iKwEExYKAFQCGwEFCwkIBwICIgIGFQoJCAsCBBYCAwECHgcCF4AY
GGhrcHM6Ly9rZXlzLm9wZW5wZ3Aub3JnFiEEAOZDwh+sll/7KNO3FNDUWh2tqvoF
AmjcHowACgkQFNDUWh2tqvrioQD+NSmbHSJg58vOzmoREbtX43WHfwXb1p+F5+9N
5EHVn70BAJKA9pRvQxvxgfBgz8hjC2/X8jAIy2Jy/DRZzG54DAIMtD9KYXNwZXIg
TWF5b25lIChQZXJzb25hbCBBbGlhcykgPGphc3Blci5tYXlvbmVAamFzcGVybWF5
b25lLmNvbT6IeAQwFggAIBYhBADmQ8IfrJZf+yjTtxTQ1Fodrar6BQJnhFCaAh0A
AAoJEBTQ1Fodrar6YsAA/Ak5bio3K4Tnr5RL20+XsV6IWNim4T4zI9Xtv7aEXgq1
AP9nJ0YYA3y7UriZ74XcN+j5SmF1Fl8ONGD9/Wxa8HyuCYiTBBMWCgA7AhsjBQsJ
CAcCAiICBhUKCQgLAgQWAgMBAh4HAheAFiEEAOZDwh+sll/7KNO3FNDUWh2tqvoF
AmjcHowACgkQFNDUWh2tqvrcbwEA8kUXMehYPh+ZBRUm+8Tb5SloEmhKzmRi/VvY
4EUG3jYA/0DX3VI6KUBKw7oLJ/+MukVOu9gRbhnBBOGnDOI2020MtERKYXNwZXIg
TWF5b25lIChTaW5nbGUgRmVhdGhlciBMTEMpIDxqYXNwZXIubWF5b25lQHNpbmds
ZWZlYXRoZXIuY29tPokBHAQTFgoAxAIbAQULCQgHAgIiAgYVCgkICwIEFgIDAQIe
BwIXgDcUgAAAAAAQAB5wcm9vZkBhcmlhZG5lLmlkZG5zOnNpbmdsZWZlYXRoZXIu
ZGV2P3R5cGU9VFhUNxSAAAAAABAAHnByb29mQGFyaWFkbmUuaWRkbnM6c2luZ2xl
ZmVhdGhlci5jb20/dHlwZT1UWFQYGGhrcHM6Ly9rZXlzLm9wZW5wZ3Aub3JnFiEE
AOZDwh+sll/7KNO3FNDUWh2tqvoFAmjcHowACgkQFNDUWh2tqvqdJQD+KBmysNl7
JzbOArp2n9/gtk9eBH6Yq2sMdN92iAD6Ui4BAOPKOCTQiAsc651BhLRBm6I0SHsj
1+B0C5wa35yHf18ItEFKYXNwZXIgTWF5b25lIChKYXNwZXIgTWF5b25lIC0gUGVy
c29uYWwpIDxqYXNwZXJtYXlvbmVAZ21haWwuY29tPoisBBMWCgBUAhsBBQsJCAcC
AiICBhUKCQgLAgQWAgMBAh4HAheAGBhoa3BzOi8va2V5cy5vcGVucGdwLm9yZxYh
BADmQ8IfrJZf+yjTtxTQ1Fodrar6BQJo3B6MAAoJEBTQ1Fodrar6kYgA/0H3jrLP
moWpAvZvuHXpV1TdTGGs7QbH5AfMkjqCkC3MAQCKmlYeDNy98hkfXvIUdjxr3oaN
VQJJAjj3P/CKbqCMBbRISmFzcGVyIE1heW9uZSAoSmFzcGVyIE1heW9uZSAtIFBl
cnNvbmFsKSA8amFzcGVycGhvZW5peG1heW9uZUBnbWFpbC5jb20+iKwEExYKAFQC
GwEFCwkIBwICIgIGFQoJCAsCBBYCAwECHgcCF4AYGGhrcHM6Ly9rZXlzLm9wZW5w
Z3Aub3JnFiEEAOZDwh+sll/7KNO3FNDUWh2tqvoFAmjcHowACgkQFNDUWh2tqvov
FgEArq+7bBTQvgMUvIOL4ac6aF8rOUCkouf6Mj4X+0jLvnkA/3n8bDXA0+/u0UGy
Co/lzep1OGlmLU8guzQlaWusYKIPtD9KYXNwZXIgTWF5b25lIChQcm9qZWN0IFB1
cnBsZSBCdWJibGUpIDxqYXNwZXJAcHVycGxlYnViYmxlLm9yZz6IeAQwFggAIBYh
BADmQ8IfrJZf+yjTtxTQ1Fodrar6BQJnOkdIAh0AAAoJEBTQ1Fodrar6sTgA/iR6
IzBihmxrgu8cMLP6W6EaKa8vZbDxo9bwyKppuKQlAP9WdZAXTn8iz5SZVWIc8TPt
W4n5pZXQnRimUIKtinSuA4iTBBMWCgA7AhsjBQsJCAcCAiICBhUKCQgLAgQWAgMB
Ah4HAheAFiEEAOZDwh+sll/7KNO3FNDUWh2tqvoFAmjcHowACgkQFNDUWh2tqvor
CwD6Azcw7ZYzYEIDqnSALZMkfLHmXGUUKr+Eeb0LpU0iTnsBAJMd7gcl0urqkkwT
W+nsdQ0IMiy+06NgP5OLHRRhCi8LtDZKYXNwZXIgTWF5b25lIChDeWFuZXVzIENv
KSA8amFzcGVyLm1heW9uZUBjeWFuZXVzLm9yZz6IeAQwFggAIBYhBADmQ8IfrJZf
+yjTtxTQ1Fodrar6BQJnOkclAh0AAAoJEBTQ1Fodrar6gbwBAKx/bOWIFy6wA9pY
7LGCSQ5fwzEzo4OLYOo/FIoR8IbPAQCxEtZhAgfpNVlUjzLb74QyBtpPfsyAXydP
8kk/Mi+PBoiSBBMWCgA7AhsjBQsJCAcCAiICBhUKCQgLAgQWAgMBAh4HAheAFiEE
AOZDwh+sll/7KNO3FNDUWh2tqvoFAmjcHowACgkQFNDUWh2tqvovaAD4yZ+DIgVK
XKImKovOaYJUc1eU2ngOjgXNxbYI2Sd54AD9EXga3T+zqv8yIKmL8b+99eijFepb
LyzgoaLwcy3yNQDR0jrSOAEQAAEBAAAAAAAAAAAAAAAA/9j/4AAQSkZJRgABAQAA
SABIAAD/4QBARXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQA
AAABAAAA+qADAAQAAAABAAAA7wAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQA
AAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8IAEQgA7wD6AwEiAAIR
AQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAMCBAEFAAYHCAkKC//EAMMQAAEDAwIE
AwQGBAcGBAgGcwECAAMRBBIhBTETIhAGQVEyFGFxIweBIJFCFaFSM7EkYjAWwXLR
Q5I0ggjhU0AlYxc18JNzolBEsoPxJlQ2ZJR0wmDShKMYcOInRTdls1V1pJXDhfLT
RnaA40dWZrQJChkaKCkqODk6SElKV1hZWmdoaWp3eHl6hoeIiYqQlpeYmZqgpaan
qKmqsLW2t7i5usDExcbHyMnK0NTV1tfY2drg5OXm5+jp6vP09fb3+Pn6/8QAHwEA
AwEBAQEBAQEBAQAAAAAAAQIAAwQFBgcICQoL/8QAwxEAAgIBAwMDAgMFAgUCBASH
AQACEQMQEiEEIDFBEwUwIjJRFEAGMyNhQhVxUjSBUCSRoUOxFgdiNVPw0SVgwUTh
cvEXgmM2cCZFVJInotIICQoYGRooKSo3ODk6RkdISUpVVldYWVpkZWZnaGlqc3R1
dnd4eXqAg4SFhoeIiYqQk5SVlpeYmZqgo6SlpqeoqaqwsrO0tba3uLm6wMLDxMXG
x8jJytDT1NXW19jZ2uDi4+Tl5ufo6ery8/T19vf4+fr/2wBDAAwMDAwMDBQMDBQd
FBQUHScdHR0dJzEnJycnJzE7MTExMTExOzs7Ozs7OztHR0dHR0dTU1NTU11dXV1d
XV1dXV3/2wBDAQ4PDxgWGCgWFihhQjZCYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFh
YWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWH/2gAMAwEAAhEDEQAAAaGZ1bbVttUT
tW21Rp1Rp1ROmo06onao06ttq0TqTp1JhUUmFaibattq22radUadUbJpSBpqUoTR
iNNVhLBxR9pqNMVonVETqjTFRCtStOqNOqNOqNM1ETFDbQqpLaXtc7PXErjWndc3
XNY7eluWa6f5KqjTqjTFRp1RtqXp1Rp1Rp1Rp1Q3csaR0dL2VFINVEU3r6uWoHdc
xQ91x1NVLFT8jCwqNOqInVETqjTqVp1aJ1aJ1bTqits6un/W8m5rqB0fS1zduakq
/DR31K5Tr6KufEhdDs6x/RYVFRpio06k6dS9tW06o06o06orLRjXSDqLyq7qeb6i
hN3UUM4jUiufgrjrezJXGuLirqdMVonVGmKjTFL2monatp1Rp1Qlep07aO6bdDxN
vVk8JNBUnVATBqNlU1oHTetp1Rp1RE6o0xSttWnattNbbVttSLqnc0R/QWVXqUGp
EqTUBKGhcp2nIUVe1bTFaJ1Rpio0xUzE1ttWnatMTUaYrQqKC8YOa6Rw0d1EZFYS
C0Tler5ygTpqNMVonVG2qNtWmJrTGqdtU7attq22qAnHVs45TV1AWl1QnaVUqiva
yqmWL6ttqjTFRpio0xW0alaNUzGqZjVOia22qEqimNvTnrqVtXFEWgtKprTj6EYc
U+wiVttWjatG1JmNU6JqdGpWianRNTo1SFo2pbpm7roH/O3VOzN6SgMo1KHOrECu
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
asl6XcxvlGu5q+XIwuTumJkA/jWda/+zhqB1HQIV9Ki9RpHGMQ07jfQr6uMouzur
GNMEtD9KYXNwZXIgTWF5b25lIChwaGlzaC5kaXJlY3RvcnkpIDxqYXNwZXIubWF5
b25lQHBoaXNoLmRpcmVjdG9yeT6I3wQTFggAhwIbIwULCQgHAgYVCgkICwIEFgID
AQIeAQIXgDUUgAAAAAAQABxwcm9vZkBhcmlhZG5lLmlkZG5zOnBoaXNoLmRpcmVj
dG9yeT90eXBlPVRYVBgYaGtwczovL2tleXMub3BlbnBncC5vcmcWIQQA5kPCH6yW
X/so07cU0NRaHa2q+gUCaNwejAAKCRAU0NRaHa2q+iDPAP92oKA0CuU0DUjAv0P5
Yn/tKjkykONl/A6wijUHHBdcTgD+N8x+55r/DqvhLfhShVuyEWYrk9pleo0aCJYR
HmJKLg60W0phc3BlciBEIE1heW9uZSAoV2VudHdvcnRoIEluc3RpdHV0ZSBvZiBU
ZWNobm9sb2d5IE9mZmljYWwgU3R1ZGVudCBFbWFpbCkgPG1heW9uZWpAd2l0LmVk
dT6IqQQTFggAUQIbIwULCQgHAgYVCgkICwIEFgIDAQIeAQIXgBgYaGtwczovL2tl
eXMub3BlbnBncC5vcmcWIQQA5kPCH6yWX/so07cU0NRaHa2q+gUCaNwejAAKCRAU
0NRaHa2q+sW6AP90y3SHXdkxA/PSO9e358bBegaizoWNv6TOxJGK+xsdBwD+OVlP
XVDNyspmn0rpQlIHqT8Kq2brGi3Y0MzKGP61qQi0OUphc3BlciBNYXlvbmUgKFBh
dGNod29yayBMYWJzKSA8amFzcGVyQHBhdGNod29ya2xhYnMub3JnPojkBBMWCgCM
AhsjBQsJCAcCAiICBhUKCQgLAgQWAgMBAh4HAheANxSAAAAAABAAHnByb29mQGFy
aWFkbmUuaWRkbnM6cGF0Y2h3b3JrbGFicy5vcmc/dHlwZT1UWFQYGGhrcHM6Ly9r
ZXlzLm9wZW5wZ3Aub3JnFiEEAOZDwh+sll/7KNO3FNDUWh2tqvoFAmjcHowACgkQ
FNDUWh2tqvpvEwD+JJzSaUhQlOLN+lJ0RNX2JYb0cxuWZYYcAXMRl+AFqbMA/iXQ
Qdm074NJvR6o6IrI4aEJhcPEXb3DPP3Hk0vXEvIJtDdKYXNwZXIgTWF5b25lIChB
cHBsZSBpQ2xvdWQpIDxqYXNwZXIubWF5b25lQGljbG91ZC5jb20+iKwEExYKAFQC
GyMFCwkIBwICIgIGFQoJCAsCBBYCAwECHgcCF4AYGGhrcHM6Ly9rZXlzLm9wZW5w
Z3Aub3JnFiEEAOZDwh+sll/7KNO3FNDUWh2tqvoFAmjcHowACgkQFNDUWh2tqvp2
2gEA/7TWI/asJu0Z4NC8EvWrnd2N+Y+OCqDAJv207HltT2sA+wbU3qLDxUc/sAGP
rkSt9hzgadJWMU+/pVm3e5U6Yu0KtDlKYXNwZXIgTWF5b25lIChNTEggLS0gZG90
aW8gYWxpYXMpIDxqYXNwZXIubWF5b25lQG1saC5pbz6IrAQTFgoAVAIbIwULCQgH
AgIiAgYVCgkICwIEFgIDAQIeBwIXgBgYaGtwczovL2tleXMub3BlbnBncC5vcmcW
IQQA5kPCH6yWX/so07cU0NRaHa2q+gUCaNwejAAKCRAU0NRaHa2q+jALAP92+K3i
q+Rtb2wgkuydZYMVMnW71xv2eNT/+Mqr5N6ifQEAnnqu0+kuUr85PRIUft+DptzI
GFNPXOHpBQM0e6NFDwe0Qkphc3BlciBNYXlvbmUgKE1MSCAtLSBtYWluKSA8amFz
cGVyLm1heW9uZUBtYWpvcmxlYWd1ZWhhY2tpbmcuY29tPoisBBMWCgBUAhsjBQsJ
CAcCAiICBhUKCQgLAgQWAgMBAh4HAheAGBhoa3BzOi8va2V5cy5vcGVucGdwLm9y
ZxYhBADmQ8IfrJZf+yjTtxTQ1Fodrar6BQJo3B6MAAoJEBTQ1Fodrar6cigBAOM9
Etq8VO8NWWDOEQeTI5Q/2InU7NnoKBL4GWIzDpgbAP9w1knBqYvwosulSIyIAlA/
w+ej2Am3R2x9XuYKH/2ZCbgzBGWc0C8WCSsGAQQB2kcPAQEHQO6kCrnFBMUllLP3
sTkvOGtVL3HrbpLQ4YYBT7aJDb10iO8EGBYKACAWIQQA5kPCH6yWX/so07cU0NRa
Ha2q+gUCZZzQLwIbAgCBCRAU0NRaHa2q+nYgBBkWCgAdFiEEmKyR/V12IROZqvz1
GSXBZlXld+sFAmWc0C8ACgkQGSXBZlXld+t7zwEAjl+i23aGAneWu5fIY0uyN17R
uox1X1VJQLroNJO7PIMA/1s6RryDCUO9x2/5Ae36xLHxbARQNVXLOCAu2HcWeJME
kkQA/3w4X3V7uvCqMkKxzCFX/AMK7eGxrOERVe8ZxMVTZEWAAQCDvfOnylgfQygw
/f1LDteOfVZVab9DHS/YyrQnOczGD7g4BGWc0F0SCisGAQQBl1UBBQEBB0BfmR8g
yjfz6Fgwatt6A+7JDijaDa7WJALWLRWuQI8gKwMBCAeIeAQYFgoAIBYhBADmQ8If
rJZf+yjTtxTQ1Fodrar6BQJlnNBdAhsMAAoJEBTQ1Fodrar6He8A/iqh2Gh3jq1E
6vyB8NpfWhqj3t+tvwPL343qeW6etPloAP9M+qGF38Sb2E8KzKPc4P92PjudVlXF
PpSbc4Ic1toWCLgzBGWc0IQWCSsGAQQB2kcPAQEHQA6sub8JFVi0UdsjFG2gBVyr
3/lEsC+9Y2nkVp228wuuiHgEGBYKACAWIQQA5kPCH6yWX/so07cU0NRaHa2q+gUC
ZZzQhAIbIAAKCRAU0NRaHa2q+tRcAP9hylAEk/3ib9GJg9KR871iTJRmK+kk4L+k
ceGgVoDIjQD/VvED/0BjhOdmOSV8YUtoWQ1rJvzxR5DDKzIIPFbUkAA=
=8C25
-----END PGP PUBLIC KEY BLOCK-----`}</pre>
          <code className="u-key">
            ssh-ed25519
            AAAAC3NzaC1lZDI1NTE5AAAAIHm7lo7umraewipgQu1Pifmoo/V8jYGDHjBTmt+7SOCe
            jsp@remus
          </code>{" "}
          {/* SSH key */}
          <code className="u-key">
            ssh-ed25519
            AAAAC3NzaC1lZDI1NTE5AAAAIOqi0ZRAHUqBL4zolSeVTgp1oZ6HKD+Hq5AktpLolely
            jsp@Dippet
          </code>{" "}
          {/* SSH key */}
          {/* === UNIQUE IDENTIFIER === */}
          <data className="u-uid uid" value="https://www.jaspermayone.com">
            {/* Unique identifier, preferably canonical URL */}
          </data>
          {/* === BIOGRAPHICAL NOTE === */}
          <p className="p-note note">
            {age} year old college student from rural Vermont, currently
            residing in Boston. Attending Wentworth Institute of Technology as a
            Computer Science major. Treasurer of WITCC. Former Software
            Engineering Intern at Major League Hacking. Interests include
            aviation (glider pilot), photography, circus performance, and
            building software for communities.
          </p>
          {/* === MULTIPLE INSTANCES EXAMPLES === */}
          {/* You can have multiple of any property: */}
          <span className="p-nickname">jaspermayone</span>
          <span className="p-nickname">jmayone</span>
          <a className="u-url" href="https://twitter.com/jaspermayone">
            Twitter
          </a>
        </div>
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
