import arcjet, { protectSignup } from "@arcjet/next";
import { LoopsClient } from "loops";
import { NextApiRequest, NextApiResponse } from "next";

// Arcjet setup for signup protection with multiple rules
const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    protectSignup({
      email: {
        mode: "LIVE", // Block requests live
        block: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"], // Block invalid and disposable emails
      },
      bots: {
        mode: "LIVE", // Block bot requests live
        allow: [], // Block all detected bots
      },
      rateLimit: {
        mode: "LIVE", // Apply live rate limiting
        interval: "10m", // Time window for rate limiting
        max: 5, // Max 5 requests in 10 minutes per IP
      },
    }),
  ],
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ success: false, reason: "Email is required." });
  }

  // Validate the request with Arcjet
  const decision = await aj.protect(req, { email });

  if (decision.isDenied()) {
    if (decision.reason.isEmail()) {
      return res.status(400).json({ success: false, reason: "Invalid email" });
    }
    return res.status(403).json({ success: false, reason: decision.reason });
  }

  // Loops client for contact creation
  const loops = new LoopsClient(process.env.LOOPS_API_KEY);
  try {
    const properties = {
      source: "jaspermayone.com",
      acquisitionMethod: "jaspermayone.com",
    };

    const mailingLists = {
      cm0jn176000w10ll52vow4jf4: true,
      cm0jn1xdu01ny0ll94dhq7puy: true,
      cm0jsbqcv00rq0mldg90307xj: false,
    };

    const resp = await loops.createContact(email, properties, mailingLists);

    if (resp.success) {
      return res.status(200).json({ success: true });
    } else {
      return res
        .status(400)
        .json({ success: false, reason: "Failed to create contact" });
    }
  } catch (error) {
    console.error("Failed to create contact", error);
    return res.status(500).json({ success: false, reason: "Server error" });
  }
}
