"use client";
import { emails } from "@/lib/defs";
import styles from "@/styles/Misc.module.css";
import { useReducer, useState, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const predefinedEmails = [
  ...emails.map((e) => e.address),
  "jasperphoenixmayone@gmail.com",
  "jasper.mayone@jaspermayone.com",
  "jasper.mayone.skiskate@gmail.com",
];

type SubmitState = {
  submitted: boolean;
  error: string | null;
  woahThere: boolean;
  isLoading: boolean;
};

type SubmitAction =
  | { type: "start" }
  | { type: "success" }
  | { type: "error"; message: string }
  | { type: "woah_there" };

function submitReducer(state: SubmitState, action: SubmitAction): SubmitState {
  switch (action.type) {
    case "start":
      return {
        submitted: false,
        error: null,
        woahThere: false,
        isLoading: true,
      };
    case "success":
      return { ...state, submitted: true, isLoading: false };
    case "error":
      return { ...state, error: action.message, isLoading: false };
    case "woah_there":
      return { ...state, woahThere: true, isLoading: false };
  }
}

export default function Email() {
  const [email, setEmail] = useState("");
  const [state, dispatch] = useReducer(submitReducer, {
    submitted: false,
    error: null,
    woahThere: false,
    isLoading: false,
  });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch({ type: "start" });

    if (predefinedEmails.includes(email)) {
      dispatch({ type: "woah_there" });
      return;
    }

    fetch("/api/email/new", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch({ type: "success" });
        } else {
          dispatch({
            type: "error",
            message: "Failed to submit. Please try again.",
          });
        }
      })
      .catch(() => {
        dispatch({
          type: "error",
          message: "An error occurred during submission.",
        });
      });
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      <h2 className={styles.lightUl}>Newsletter</h2>
      <p className="mb-4 text-sm text-zinc-700 dark:text-white/70">
        Subscribe to my newsletter to get <i>occasioal</i> updates on what
        I&apos;m up to.
      </p>

      {!state.submitted ? (
        <form onSubmit={onSubmit} className="w-full">
          <div className="flex w-full flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="example@example.com"
              className="flex-1 border-1 border-zinc-300 text-sm outline-none focus:border-blue-400 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="email"
              required
            />
            <Button
              type="submit"
              className="bg-blue-400 text-sm whitespace-nowrap"
              aria-label="submit"
              disabled={state.isLoading}
              data-umami-event="newsletter_submit"
              data-umami-event-email={email}
            >
              {state.isLoading ? "Submitting…" : "Submit"}
            </Button>
          </div>

          {state.woahThere && (
            <p className="mt-2 text-sm text-purple-500">
              Slow down cowboy! You&apos;re not Jasper!
            </p>
          )}
          {state.error && (
            <p className="mt-2 text-sm text-red-500">{state.error}</p>
          )}
        </form>
      ) : (
        <p className="text-sm text-green-400">
          Submitted! Be sure to look out for emails in the future!
        </p>
      )}
    </div>
  );
}
