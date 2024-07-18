"use server";
import { signIn, register as authRegister, auth } from "@/auth";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@vercel/postgres";
import type { User, Session } from "@/lib/definitions";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function register(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const firstName = formData.get("first-name") as string;
    const lastName = formData.get("last-name") as string;
    const credentials = {
      name: `${firstName} ${lastName}`,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    await authRegister(credentials);
    await authenticate(undefined, formData);
    revalidatePath("/");
    redirect("/");
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function signOut() {
  await signOut();
  revalidatePath("/");
  redirect("/");
}

export async function checkIfAdmin() {
  const client = await db.connect();
  const data =
    await client.sql<User>`SELECT * FROM users WHERE is_admin = true`;
  const adminUsers = data.rows;
  const session: Session | null | undefined = await auth();
  const isAdmin: boolean = adminUsers.some((user: User) => user.email === session?.user?.email);
  return isAdmin;
}
