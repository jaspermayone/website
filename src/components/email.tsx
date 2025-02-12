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
  "jasper.mayone@everywhere.pub",
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
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* h2 with custom .ul class  */}
      <h2 className={styles.lightUl}>Newsletter</h2>
      <p className="text-gray-700 text-sm mb-4">
        Subscribe to my newsletter to get <i>occasioal</i> updates on what I'm
        up to.
      </p>

      {!submitted ? (
        <form onSubmit={onSubmit} className="w-full">
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Input
              type="email"
              placeholder="example@example.com"
              className="flex-1 text-sm outline-dashed outline-1.5 outline-blurre"
              value={email}
              onChange={handleInputChange}
              aria-label="email"
              required
            />
            <Button
              type="submit"
              className="text-sm whitespace-nowrap bg-blue-400"
              aria-label="submit"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </div>

          {woahThere && (
            <p className="text-purple-500 text-sm mt-2">
              Slow down cowboy! You&apos;re not Jasper!
            </p>
          )}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
      ) : (
        <p className="text-green-400 text-sm">
          Submitted! Be sure to look out for emails in the future!
        </p>
      )}
    </div>
  );
}
