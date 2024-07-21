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

export async function checkIfAdmin() {
  const client = await db.connect();
  const data =
    await client.sql<User>`SELECT * FROM users WHERE is_admin = true`;
  const adminUsers = data.rows;
  const session: Session | null | undefined = await auth();
  const isAdmin: boolean = adminUsers.some(
    (user: User) => user.email === session?.user?.email
  );
  return isAdmin;
}

/**
 *
 * // ${formData.get("reason")} as string, 
      // ${formData.get("status")},
      //  ${formData.get("year")}, 
      //  ${formData.get("make")}, 
      //  ${formData.get("model")}, 
      //  ${formData.get("engine")}, 
      //  ${formData.get("submodel")}, 
      //  ${formData.get("created_by")}, 
      //  ${formData.get("customer_id")}
 *
 */
const createTicket = async (ticket: {
  reason: string;
  status: string;
  year: string;
  make: string;
  model: string;
  engine: string;
  submodel: string;
  created_by: string;
  customer_id: string;
}) => {
  // const createTicket = async (formData: FormData) => {
  const session: Session | null | undefined = await auth();
  const user: User = session?.user as User;
  const client = await db.connect();
  const data = await client.sql`
    INSERT INTO tickets (reason, status, year, make, model, engine, submodel, created_by, customer_id)
    VALUES (
      ${ticket.reason}, ${ticket.status}, ${ticket.year}, ${ticket.make}, ${ticket.model}, ${ticket.engine}, ${ticket.submodel}, ${user.id}, ${ticket.customer_id}
     )
      ON CONFLICT (id) DO NOTHING;
  `;
};

export async function saveTicket(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const ticket = {
      customer_id: formData.get("customer") as string,
      reason: formData.get("reason") as string,
      status: formData.get("status") as string,
      year: formData.get("year") as string,
      make: formData.get("make") as string,
      model: formData.get("model") as string,
      engine: formData.get("engine") as string,
      submodel: formData.get("submodel") as string,
      created_by: formData.get("created_by") as string,
    };
    await createTicket(ticket);
    revalidatePath("/tickets");
    redirect("/tickets");
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
