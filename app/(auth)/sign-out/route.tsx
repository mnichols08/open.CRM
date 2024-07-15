import { signOut } from "@/auth";

export async function GET(req: any, res: any) {
  const signedOut = await signOut();
  return signedOut ? res.status(200).end() : res.status(400).end();
}
