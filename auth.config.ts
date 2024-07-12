import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  trustHost: true,
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLoginPage = nextUrl.pathname.startsWith("/sign-in");
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnLoginPage) {
        if (isLoggedIn) return Response.redirect(new URL("/dashboard", nextUrl));// Redirect authenticated users to dashboard
        return true;
      }
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
