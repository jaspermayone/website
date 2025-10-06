import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.jaspermayone.com",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
