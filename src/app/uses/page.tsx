import AnimatedTitle from "@/components/AnimatedTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
  description: "What I use to get things done.",
};

export default function Uses() {
  const defaults = [
    {
      emoji: "📨",
      name: "Mail Client",
      result: "Apple Mail",
    },
    {
      emoji: "📮",
      name: "Mail Server",
      result: "Google Workspace, iCloud",
    },
    {
      emoji: "📝",
      name: "Notes",
      result: "Notes.app, Obsidian",
    },
    {
      emoji: "✅",
      name: "To-Do",
      result: "OmniFocus",
    },
    {
      emoji: "📷",
      name: "iPhone Photo Shooting",
      result: "iOS Camera",
    },
    {
      emoji: "🟦",
      name: "Photo Management",
      result: "Immich",
    },
    {
      emoji: "📅",
      name: "Calendar",
      result: "Google Calendar",
    },
    {
      emoji: "📁",
      name: "Cloud File Storage",
      result: "Google Drive",
    },
    {
      emoji: "🙍🏻",
      name: "Contacts",
      result: "Contacts.app",
    },
    {
      emoji: "🌐",
      name: "Browser",
      result: "Dia, Chrome",
    },
    {
      emoji: "💬",
      name: "Chat",
      result: "Discord, Slack",
    },
    {
      emoji: "📑",
      name: "Read It Later",
      result: "Linkace",
    },
    {
      emoji: "📜",
      name: "Word Processing",
      result: "Google Docs",
    },
    {
      emoji: "📈",
      name: "Spreadsheets",
      result: "Google Sheets, Excel",
    },
    {
      emoji: "📊",
      name: "Presentations",
      result: "Google Slides",
    },
    {
      emoji: "🛒",
      name: "Shopping Lists",
      result: "Mealie",
    },
    {
      emoji: "🍴",
      name: "Meal Planning",
      result: "Mealie",
    },
    {
      emoji: "🎵",
      name: "Music",
      result: "Apple Music",
    },
    {
      emoji: "🎤",
      name: "Podcasts",
      result: "Apple Podcasts",
    },
    {
      emoji: "🔐",
      name: "Password Management",
      result: "Vaultwarden",
    },
  ];

  return (
    <div className="m-2">
      <AnimatedTitle firstWord="Uses" />
      {defaults.map((item, index) => (
        <div key={index}>
          {item.emoji} <strong>{item.name}:</strong> {item.result}
        </div>
      ))}
    </div>
  );
}
