"use client";
import styles from "@/styles/Misc.module.css";
import { useState, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const predefinedEmails = [
  "jaspermayone@gmail.com",
  "jasperphoenixmayone@gmail.com",
  "me@jaspermayone.com",
  "jasper.mayone@jaspermayone.com",
  "jasper.mayone@singlefeather.com",
  "jasper.mayone@phish.directory",
  "jasper.mayone@icloud.com",
  "mayonej@wit.edu",
  "jasper.mayone.skiskate@gmail.com",
  "jasper@patchworklabs.org",
];

export default function Email() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [woahThere, setWoahThere] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setWoahThere(false);

    if (predefinedEmails.includes(email)) {
      setWoahThere(true);
      setIsLoading(false);
      return;
    }

    fetch("/api/email/new", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSubmitted(true);
        } else {
          setError("Failed to submit. Please try again.");
        }
      })
      .catch(() => {
        setError("An error occurred during submission.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      {/* h2 with custom .ul class  */}
      <h2 className={styles.lightUl}>Newsletter</h2>
      <p className="mb-4 text-sm text-gray-700 dark:text-white/70">
        Subscribe to my newsletter to get <i>occasioal</i> updates on what
        I&apos;m up to.
      </p>

      {!submitted ? (
        <form onSubmit={onSubmit} className="w-full">
          <div className="flex w-full flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="example@example.com"
              className="flex-1 border-1 border-gray-300 text-sm outline-none focus:border-blue-400 focus:ring-blue-400"
              value={email}
              onChange={handleInputChange}
              aria-label="email"
              required
            />
            <Button
              type="submit"
              className="bg-blue-400 text-sm whitespace-nowrap"
              aria-label="submit"
              disabled={isLoading}
              data-umami-event="newsletter_submit"
              data-umami-event-email={email}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </div>

          {woahThere && (
            <p className="mt-2 text-sm text-purple-500">
              Slow down cowboy! You&apos;re not Jasper!
            </p>
          )}
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </form>
      ) : (
        <p className="text-sm text-green-400">
          Submitted! Be sure to look out for emails in the future!
        </p>
      )}
    </div>
  );
}
