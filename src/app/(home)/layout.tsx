import { getAge } from "@/lib/defs";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: "Jasper Mayone" },
    description: `A ${getAge()}-year-old college student from rural Vermont, currently residing in Boston.`,
    alternates: {
      canonical: "https://jaspermayone.com",
    },
  };
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
