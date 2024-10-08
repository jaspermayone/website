"use client";
import { useState, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const predefinedEmails = [
  "jaspermayone@gmail.com",
  "jasperphoenixmayone@gmail.com",
  "me@jaspermayone.com",
  "jasper@jaspermayone.com",
  "jasper.mayone@jaspermayone.com",
  "jasper@singlefeather.com",
  "jasper.mayone@singlefeather.com",
  "jasper@purplebubble.org",
  "jasper@phish.directory",
];

export default function Email() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [woahThere, setWoahThere] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null); // Clear previous error
    setWoahThere(false); // Reset "Woah there!" state
    setSuccess(false); // Reset success state

    // Check if the email is in the predefined array
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
      });
  }

  const handleInputChange = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="space-y" aria-label="Jasper's Newsletter Signup">
        <p className="font-[450]">Newsletter</p>
        <p className="text-gray-500">
          Join my newsletter to get updates on new projects.
        </p>
        {!submitted ? (
          <form onSubmit={onSubmit}>
            <div className="flex flex-row space-x-5 pt-5">
              <Input
                type="email"
                placeholder="example@example.com"
                className="w-48 z-10 relative" // Adjust z-index or add relative positioning
                value={email}
                onChange={handleInputChange}
                aria-label="email"
                required
              />
              <Button
                type="submit"
                className="w-24 z-10 relative"
                aria-label="submit"
              >
                Submit
              </Button>
            </div>
            {woahThere && (
              <p className="text-purple-500 pt-2">
                Slow down cowboy! You&apos;re not Jasper!
              </p>
            )}
            {error && <p className="text-red-500 pt-2">{error}</p>}
          </form>
        ) : (
          <p className="text-green-400 pt-2">
            Submitted! Be sure to look out for emails in the future!
          </p>
        )}
      </div>
    </>
  );
}
