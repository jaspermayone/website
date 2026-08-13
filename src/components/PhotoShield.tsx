// components/PhotoShield.tsx
"use client";

// Casual-deterrence wrapper for the photo gallery: blocks the right-click
// menu, drag-to-save, and text selection. This deters quick saves only —
// it cannot stop screenshots or the network tab.
export default function PhotoShield({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="select-none"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      {children}
    </div>
  );
}
