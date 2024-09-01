import { NextApiRequest, NextApiResponse } from "next";
import { LoopsClient } from "loops";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email } = req.body;

  const loops = new LoopsClient(process.env.LOOPS_API_KEY);
  try {
    
    const properties = {
      source: "jaspermayone.com",
      acquisitionMethod: "jaspermayone.com",
    };

    const mailingLists = {
  cm0jn176000w10ll52vow4jf4: true,
  cm0jn1xdu01ny0ll94dhq7puy: false,
};
    
    const resp = await loops.createContact(email, properties, mailingLists);
    
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
