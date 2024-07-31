"use server";
import { signIn, register as authRegister } from "@/auth";
import { db } from "@vercel/postgres";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

async function createOrder(
  source: string,
  parts: string,
  eta: string,
  freight: string
) {
  // Create order in database
  try {
    const client = await db.connect();
    const data =
      await client.sql`INSERT INTO orders (source, parts, eta, freight) VALUES (${source}, ${parts}, ${eta}, ${freight})`;
  } catch (error) {
    console.log("Error:------------------------------------->", error);
    throw error;
  }
}

export async function saveOrder(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const source = formData.get("source") as string;
    const parts = formData.get("parts") as string;
    const eta = formData.get("eta") as string;
    const freight = formData.get("freight") as string;

    await createOrder(source, parts, eta, freight);
    revalidatePath("/orders");
    redirect("/orders");
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
