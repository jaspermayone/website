"use client";

import { useEffect, useState } from "react";

export default function MobileRedirect({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  if (!mounted) return null;

  if (isMobile) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-8 text-center bg-white dark:bg-[#0d0d0d]">
        <h1 className="mb-4 text-4xl font-[var(--font-cuteNotes)] text-[#242424] dark:text-white">
          Desktop Experience Recommended
        </h1>
        <p className="mb-8 text-lg text-[#242424] dark:text-white">
          This website is designed for desktop viewing. Please visit on a larger
          screen for the best experience.
        </p>
        <button
          onClick={() => setIsMobile(false)}
          className="font-medium rounded-lg bg-[#242424] px-4 py-2 text-white dark:bg-white dark:text-[#242424] hover:opacity-80 transition-opacity"
        >
          Continue anyway
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
