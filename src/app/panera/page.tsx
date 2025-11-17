import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import { PaneraCard } from "@/components/PaneraCard";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Panera",
  description:
    "What I usually get at Panera, in case anyone wants to get me Panera.",
  alternates: {
    canonical: "https://www.jaspermayone.com/panera",
  },
};

const paneraPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.jaspermayone.com/panera#webpage",
      url: "https://www.jaspermayone.com/panera",
      name: "Panera - Jasper Mayone",
      description:
        "What I usually get at Panera, in case anyone wants to get me Panera.",
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
            name: "Panera",
            item: "https://www.jaspermayone.com/panera",
          },
        ],
      },
    },
  ],
};

export default function Panera() {
  return (
    <>
      <Script
        id="panera-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(paneraPageSchema),
        }}
      />
      <div
        className="min-h-screen w-full"
        style={{
          backgroundImage: "url('/images/panera/panera-bg.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        <MENU
          pageFirstWord="Panera"
          color="#ffffff"
          addBackground={true}
          disableSquig={true}
        />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div
              className="inline-block rounded-lg p-8 mb-4"
              style={{
                background: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <div
                className="text-3xl font-bold mb-4"
                style={{
                  fontFamily: "var(--font-balgin)",
                  color: "#051402",
                  fontWeight: 600,
                }}
              >
                Jasper's Panera Bread Order
              </div>
              <p
                className="text-gray-600 max-w-2xl mx-auto"
                style={{ lineHeight: "1.6", fontFamily: "var(--font-balgin)" }}
              >
                Inspired by people creating /chipotle pages with their Chipotle
                order for when their friends get them Chipotle, here's what I
                usually get at Panera in case anyone wants to get me Panera and
                is wondering what to get.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <PaneraCard
              imagesrc="/images/panera/toastedgardencaprese.webp"
              name="Toasted Garden Caprese"
              calories={890}
              size="Whole"
              text="Customizations: Add Bacon, Sub Black Pepper Focaccia"
              link="https://www.panerabread.com/content/panerabread_com/en-us/menu/products/toasted-garden-caprese.html"
            />

            <PaneraCard
              imagesrc="/images/panera/mangosmoothie.webp"
              name="Mango Smoothie"
              calories={300}
              link="https://www.panerabread.com/content/panerabread_com/en-us/menu/products/mango-smoothie.html"
            />

            <PaneraCard
              imagesrc="/images/panera/cinnamonroll.webp"
              name="Cinnamon Roll"
              calories={520}
              link="https://www.panerabread.com/content/panerabread_com/en-us/menu/products/cinnamon-roll.html"
            />
          </div>
          <div className="h-5" />
          <FOOTER color="#ffffff" addBackground={true} />
        </main>
      </div>
    </>
  );
}
