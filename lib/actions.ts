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

export async function fetchOrder(orderId: string) {
  const client = await db.connect();
  const data = await client.sql`SELECT * FROM orders where id = ${orderId}`;
  const orders = data.rows;
  client.release();
  return orders;
}

export async function updateOrder(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const source = formData.get("source") as string;
    const parts = formData.get("parts") as string;
    const eta = formData.get("eta") as string;
    const freight = formData.get("freight") as string;
    const orderID = formData.get("id") as string;
    console.log(formData)
    const client = await db.connect();
    const data =
      await client.sql`Update orders set source = ${source}, parts = ${parts}, eta = ${eta}, freight = ${freight} where id = ${orderID}`;
    console.log(data);
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

export const updateTicket = async (
  prevState: string | undefined,
  formData: FormData
) => {
  try {
    const session: Session | null | undefined = await auth();
    const user: User = session?.user as User;
    const ticket = {
      customer_id: formData.get("customer") as string,
      reason: formData.get("reason") as string,
      status: formData.get("status") as string,
      year: formData.get("year") as string,
      make: formData.get("make") as string,
      model: formData.get("model") as string,
      engine: formData.get("engine") as string,
      submodel: formData.get("submodel") as string,
      ticketID: formData.get("ticketID") as string ,
    };
    const { reason, status, year, make, model, engine, submodel, customer_id, ticketID } =
      ticket;
    const client = await db.connect();

    await client.sql`
    UPDATE tickets
    SET reason = ${reason}, status = ${status}, year = ${year}, make = ${make}, model = ${model}, engine = ${engine}, submodel = ${submodel}, customer_id = ${customer_id}, created_by = ${user.id}
    WHERE id = ${ticketID}
  `;
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
};

export async function fetchTicket(
  prevState: string | undefined,
  ticketID: string
) {
  try {
    const client = await db.connect();
    const data = await client.sql`
    SELECT * FROM tickets where id = ${ticketID}
  `;
    return data.rows[0];
  } catch (err) {
    console.error(err);
  }
}

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
