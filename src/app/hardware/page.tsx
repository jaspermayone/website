import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import { hardware } from "@/lib/defs";
import { HardwareItem } from "@/lib/types";
import {
  Laptop,
  Smartphone,
  Watch,
  Pencil,
  Home,
  Wifi,
  Printer,
} from "lucide-react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hardware",
  description:
    "My tech setup - computers, mobile devices, wearables, and other hardware I use daily.",
  keywords: [
    "hardware",
    "tech setup",
    "apple devices",
    "macbook",
    "iphone",
    "jasper mayone hardware",
  ],
  alternates: {
    canonical: "https://jaspermayone.com/hardware",
  },
};

const hardwarePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://jaspermayone.com/hardware#webpage",
      url: "https://jaspermayone.com/hardware",
      name: "Hardware - Jasper Mayone",
      description:
        "My tech setup - computers, mobile devices, wearables, and other hardware I use daily.",
      isPartOf: {
        "@id": "https://jaspermayone.com/#website",
      },
      about: {
        "@id": "https://jaspermayone.com/#person",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        "@id": "https://jaspermayone.com/hardware#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://jaspermayone.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Hardware",
            item: "https://jaspermayone.com/hardware",
          },
        ],
      },
    },
  ],
};

const categoryLabels: Record<HardwareItem["category"], string> = {
  computer: "Computers",
  mobile: "Mobile Devices",
  wearable: "Wearables",
  accessory: "Accessories",
  "smart-home": "Smart Home",
  networking: "Networking",
  "3d-printer": "3D Printing",
};

const categoryIcons: Record<
  HardwareItem["category"],
  React.ComponentType<{ size?: number; className?: string }>
> = {
  computer: Laptop,
  mobile: Smartphone,
  wearable: Watch,
  accessory: Pencil,
  "smart-home": Home,
  networking: Wifi,
  "3d-printer": Printer,
};

const categoryOrder: HardwareItem["category"][] = [
  "computer",
  "mobile",
  "wearable",
  "accessory",
  "smart-home",
  "networking",
  "3d-printer",
];

export default function Hardware() {
  const groupedHardware = categoryOrder.reduce(
    (acc, category) => {
      const items = hardware.filter((item) => item.category === category);
      if (items.length > 0) {
        acc[category] = items;
      }
      return acc;
    },
    {} as Record<HardwareItem["category"], HardwareItem[]>
  );

  return (
    <>
      <Script
        id="hardware-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hardwarePageSchema),
        }}
      />
      <div className="flex min-h-screen flex-col">
        <MENU pageFirstWord="Hardware" />
        <main className="flex-1">
          <div className="mx-5 mt-4 mb-4">
            <h1
              className="mb-2 text-xl font-bold text-gray-800 dark:text-white"
              style={{ fontFamily: "var(--font-balgin)" }}
            >
              My Hardware
            </h1>
            <p className="mb-6 text-gray-600 italic dark:text-white/70">
              All my Apple devices are named after Harry Potter characters.
            </p>

            <div className="space-y-8">
              {categoryOrder.map((category) => {
                const items = groupedHardware[category];
                if (!items) return null;
                const Icon = categoryIcons[category];

                return (
                  <section key={category}>
                    <h2
                      className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-gray-200"
                      style={{ fontFamily: "var(--font-balgin)" }}
                    >
                      <Icon
                        size={20}
                        className="text-green-600 dark:text-green-400"
                      />
                      <span>{categoryLabels[category]}</span>
                      <span className="ml-1 text-sm font-normal text-gray-400 dark:text-gray-500">
                        ({items.length})
                      </span>
                    </h2>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {items.map((item, index) => (
                        <div
                          key={index}
                          className="rounded-lg border border-gray-200 bg-white/50 p-4 transition-all hover:border-gray-300 hover:shadow-sm dark:border-gray-700 dark:bg-gray-800/20 dark:hover:border-gray-600"
                        >
                          <div className="font-medium text-gray-800 dark:text-gray-100">
                            {item.device}
                          </div>
                          {item.name && (
                            <div className="mt-1 text-sm text-green-600 dark:text-green-400">
                              &ldquo;{item.name}&rdquo;
                            </div>
                          )}
                          {item.details && (
                            <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                              {item.details}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </main>
        <FOOTER />
      </div>
    </>
  );
}
