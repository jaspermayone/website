"use client";
import { useState, Suspense } from "react";
import MainMenu from "@/components/MainMenu";
import { NewsletterArchive } from "@/components/newsletter-archive";
import { MenuItemType } from "@/lib/types";
import SquigglyLine from "@/components/SquigglyLine";

export default function PortfolioPage() {
  const [selectedTab, setSelectedTab] = useState<MenuItemType>("Portfolio");

  return (
    <div className="h-screen flex flex-col">
      <header className="flex-none px-6 py-4">
        <div className="mb-4 flex justify-center">
          <h1
            className="m-0 text-5xl font-cute-notes"
            style={{
              margin: 0,
              marginBottom: ".25rem",
              fontSize: "3.5em",
              fontFamily: '"Cute Notes", sans-serif',
            }}
          >
            Newsletter
          </h1>
        </div>

        <MainMenu selectedTab={selectedTab} onMenuClick={setSelectedTab} />

        <div className="py-1" />
        <SquigglyLine
          height={10}
          frequency={25}
          amplitude={1.2}
          strokeWidth={1.5}
          className="w-full"
          color="#4299e1"
        />
        <div className="py-2" />
      </header>
    </div>
  );
}
