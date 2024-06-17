import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { LoopsClient } from "loops";

export default function Email() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

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
        }
      });
  };
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
              />
              <Button type="submit" className="w-24">
                Submit
              </Button>
            </div>
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
