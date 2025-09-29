// app/keys/[key]/CopyButton.tsx
"use client";

import { useState } from "react";

export default function CopyButton({
  label,
  valueToCopy,
}: {
  label: string;
  valueToCopy: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(valueToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      alert("Copy failed. Please copy manually.");
    }
  }

  return <button onClick={handleCopy}>{copied ? "Copied!" : label}</button>;
}
