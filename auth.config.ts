import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authConfig = {
  trustHost: true,
  pages: {
    signIn: "/",
    signOut: "/sign-out",
  },
  debug: true,
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const user: any = auth?.user;
      const isLoggedIn = !!auth?.user;
      const isOnLandingPage = nextUrl.pathname === "/";
      const isOnSignupPage = nextUrl.pathname.startsWith("/sign-up");
      const isOnLoginPage = nextUrl.pathname.startsWith("/sign-in");
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnLoginPage || isOnLandingPage || isOnSignupPage) {
        if (isLoggedIn) {
          return Response.redirect(new URL("/dashboard", nextUrl)); // Redirect authenticated users to dashboard
        }
        return true;
      }

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }
      return true;
    },
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
} satisfies NextAuthConfig;
