"use client";
import { useState, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Email() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null); // Clear previous error
    setSuccess(false); // Reset success state

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

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="space-y">
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
                className="w-48"
                value={email}
                onChange={handleInputChange}
                required
              />
              <Button type="submit" className="w-24">
                Submit
              </Button>
            </div>
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
