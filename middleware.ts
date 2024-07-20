import type { NextRequest } from "next/server";
import { authConfig } from "./auth.config";
import NextAuth from "next-auth";

// export function middleware(request: NextRequest) {
//   const currentUser = request.cookies.get("currentUser")?.value;
//   console.log("request.nextUrl", request);
//   console.log("currentUser", currentUser);
//   if (currentUser && !request.nextUrl.pathname.startsWith("/dashboard")) {
//     return Response.redirect(new URL("/dashboard", request.url));
//   }

//   if (!currentUser && !request.nextUrl.pathname.startsWith("/sign-in")) {
//     return Response.redirect(new URL("/sign-in", request.url));
//   }
// }
export default NextAuth(authConfig).auth;
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
