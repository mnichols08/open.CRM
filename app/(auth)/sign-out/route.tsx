import { signOut } from "@/auth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.method);
  if (req.method === 'GET') {
    const signedOut = await signOut();
    signedOut ? res.status(200).end() : res.status(500).end();
  }
}

