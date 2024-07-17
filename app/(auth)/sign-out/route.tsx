import { signOut } from "@/auth";

export async function GET(req: any, res: any) {
  const signedOut = await signOut();
  if (signedOut) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
  } else {
    res.writeHead(500, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify({ error: "An unexpected error occurred" }));
  } 
}
