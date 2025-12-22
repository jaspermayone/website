import { Metadata } from "next";

export const metadata: Metadata = {
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
