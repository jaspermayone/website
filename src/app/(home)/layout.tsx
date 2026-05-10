import { age } from "@/lib/defs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Jasper Mayone" },
  description: `A ${age}-year-old college student from rural Vermont, currently residing in Boston.`,
  alternates: {
    canonical: "https://jaspermayone.com",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
