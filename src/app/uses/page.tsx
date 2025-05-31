import { Metadata } from "next";
import MENU from "@/components/MENU";
import FOOTER from "@/components/FOOTER";
import SquigglyLine from "@/components/SquigglyLine";
import styles from "@/styles/Home.module.css";

export const metadata: Metadata = {
  title: "Uses",
  description: "What I use to get things done.",
};

export default function Uses() {
  const tools = [
    { emoji: "📨", name: "Mail Client", result: "Apple Mail" },
    { emoji: "📮", name: "Mail Server", result: "Google Workspace, iCloud" },
    { emoji: "📝", name: "Notes", result: "Notes.app, Obsidian" },
    { emoji: "✅", name: "To-Do", result: "OmniFocus" },
    { emoji: "📅", name: "Calendar", result: "Google Calendar" },
    { emoji: "📁", name: "Storage", result: "Google Drive" },
    { emoji: "🙍🏻", name: "Contacts", result: "Contacts.app" },
    { emoji: "🌐", name: "Browser", result: "Dia, Chrome" },
    { emoji: "💬", name: "Chat", result: "Discord, Slack" },
    { emoji: "📑", name: "Read Later", result: "Linkace" },
    { emoji: "📷", name: "Photos", result: "iOS Camera, Immich" },
    { emoji: "🎵", name: "Music", result: "Apple Music" },
    { emoji: "🎤", name: "Podcasts", result: "Apple Podcasts" },
    { emoji: "🔐", name: "Passwords", result: "Vaultwarden" },
    { emoji: "📊", name: "Presentations", result: "Google Slides" },
    { emoji: "🍴", name: "Food Planning", result: "Mealie" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MENU pageFirstWord="Uses" />
      <main className="flex-1">
        <div className="mx-5 mt-4 mb-4">
          <h1 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
            What I Use
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {tools.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-2 bg-white/50 dark:bg-gray-800/20 rounded-md"
              >
                <div className="text-lg mr-2">{item.emoji}</div>
                <div>
                  <div className="font-medium text-sm text-gray-800 dark:text-gray-100">
                    {item.name}
                  </div>
                  <div className="text-gray-600 dark:text-white/70 text-xs">
                    {item.result}
                  </div>
                </div>
              </div>
            ))}
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
  );
}
