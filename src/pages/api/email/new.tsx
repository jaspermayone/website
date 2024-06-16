import { NextApiRequest, NextApiResponse } from "next";
import { LoopsClient } from "loops";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;

  const loops = new LoopsClient(process.env.LOOPS_API_KEY);
  try {
    const properties = {
      source: "jaspermayone.com",
      acquisitionMethod: "jaspermayone.com",
    };
    const resp = await loops.createContact(email, properties);
    if (resp.success) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false });
    }
  } catch (error) {
    console.error("Failed to create contact", error);
    res.status(500).json({ success: false });
  }
}
