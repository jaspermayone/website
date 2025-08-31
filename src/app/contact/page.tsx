import MENU from "@/components/MENU";
import FOOTER from "@/components/FOOTER";
import SquigglyLine from "@/components/SquigglyLine";
import styles from "@/styles/Home.module.css";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Jasper Mayone - Email, Signal, and verified communication channels for professional inquiries and collaboration.",
  keywords: [
    "contact",
    "email",
    "jasper mayone contact",
    "signal",
    "communication",
    "professional inquiries",
  ],
  alternates: {
    canonical: "https://www.jaspermayone.com/contact",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.jaspermayone.com/contact#webpage",
      url: "https://www.jaspermayone.com/contact",
      name: "Contact - Jasper Mayone",
      description:
        "Contact Jasper Mayone - Email, Signal, and verified communication channels for professional inquiries and collaboration.",
      isPartOf: {
        "@id": "https://www.jaspermayone.com/#website",
      },
      about: {
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
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact",
            item: "https://www.jaspermayone.com/contact",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How can I contact Jasper Mayone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can email me at me [at] jaspermayone [dot] com or reach me on Signal at @jaspermayone.10",
          },
        },
        {
          "@type": "Question",
          name: "What's the best way to reach Jasper for professional inquiries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Email is the best way to reach me for professional inquiries. I respond quickly on all listed platforms.",
          },
        },
        {
          "@type": "Question",
          name: "How can I verify Jasper's identity?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can verify my identity and all the ways I might contact you by checking out the /verify page on my website.",
          },
        },
      ],
    },
  ],
};

export default function Contact() {
  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />
      <div className="min-h-screen flex flex-col">
        <MENU pageFirstWord="Contact" />
        <main className="flex-1">
          <div className="mx-5 mt-4 mb-4">
            <h1 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Get in Touch
            </h1>

            <div className="space-y-4">
              <p className="text-gray-600 dark:text-white/70">
                You can email me at me [at] jaspermayone [dot] com
              </p>
              <p className="text-gray-600 dark:text-white/70">
                I can also be reached on Signal at{" "}
                <a
                  className={styles.lnk}
                  href="https://signal.me/#eu/jaspermayone.10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @jaspermayone.10
                </a>
              </p>
              <p className="text-gray-600 dark:text-white/70">
                Want my phone number? Let's be friends first! I promise I
                respond super quick on the other platforms 😁
              </p>
            </div>

            <div className="mt-6 p-4 bg-white/50 dark:bg-gray-800/20 rounded-lg">
              <p className="text-gray-600 dark:text-white/70">
                You can verify my identity and all the ways I might contact you
                by checking out the{" "}
                <a className={styles.lnk} href="/verify">
                  /verify
                </a>{" "}
                page.
              </p>
            </div>
          </div>

          <div className="py-2" />
          <SquigglyLine
            frequency={50}
            amplitude={0.4}
            className="min-w-screen"
            color="#4299e1"
          />
        </main>
        <FOOTER />
      </div>
    </>
  );
}
