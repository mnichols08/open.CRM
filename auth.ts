import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/lib/definitions';

import bcrypt from 'bcrypt';
 
async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
export const { auth, signIn, signOut, } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);
         if (passwordsMatch) return user;
          return user
        }
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});

export const register = async (credentials: { email: string; password: string, name: string }) => {
  const hashedPassword = await bcrypt.hash(credentials.password, 10);
  try {
    await sql<User>`INSERT INTO users (email, password, name) VALUES (${credentials.email}, ${hashedPassword}, ${credentials.name})`;
  } catch (error) {
    console.error('Failed to register user:', error);
    throw new Error('Failed to register user.');
  }
};

export const config = {
  trustHost: true,
  }