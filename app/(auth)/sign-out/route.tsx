import { signOut } from "@/auth";
import { redirect } from "next/navigation";

export async function GET(req: any, res: any) {
  const signedOut = await signOut();
  if (signedOut) {
    res.writeHead(302, {
      Location: "/",
    });
    redirect("/");
  } else {
    res.writeHead(500, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify({ error: "An unexpected error occurred" }));
  } 
}
