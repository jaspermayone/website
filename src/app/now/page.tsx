import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import PostList from "@/components/PostList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description: "What I'm currently doing.",
};

export default function Now() {
  return (
    <div className="h-screen flex flex-col">
      <MENU pageFirstWord="Now" />
      <main className="m-5 flex-1 overflow-hidden flex flex-col">
        <div className="mb-6">
          <p className="text-gray-700 mb-3">
            This is a semi-realtime status update system for posting updates to{" "}
            <a
              href="https://bsky.app/profile/rightnow.jaspermayone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              @rightnow.jaspermayone.com
            </a>{" "}
            on Bluesky. Think of it as a{" "}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              /now page
            </a>{" "}
            that updates automatically.
          </p>
          <p className="text-gray-600 text-sm">
            The original was called a.status.update and created by{" "}
            <a
              href="https://dame.is/creating/shortcuts/a-status-update/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              @dame.is
            </a>
            . I have since modified/adapted it to auto-update for things like
            sleeping, driving, and school based on indicators from various
            devices.
          </p>
        </div>
        <div className="flex-1 overflow-y-auto pb-4">
          <PostList />
        </div>
      </main>
      <FOOTER />
    </div>
  );
}
