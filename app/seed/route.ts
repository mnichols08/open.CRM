import bcrypt from "bcrypt";
import { db } from "@vercel/postgres";
import { users, customers } from "./placeholder-data";

const client = await db.connect();

async function seedCustomers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
        CREATE TABLE IF NOT EXISTS customers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255),
        address1 VARCHAR(255),
        address2 VARCHAR(255),
        city VARCHAR(255),
        state VARCHAR(255),
        zip VARCHAR(10),
        country VARCHAR(255),
        phone VARCHAR(20),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;

  const insertedCustomers = await Promise.all(
    customers.map(
      (customer, i) =>
        client.sql`
            INSERT INTO customers (name )
            VALUES (${customer.customer})
            ON CONFLICT (id) DO NOTHING;
        `
    )
  );

  return insertedCustomers;
}

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
        CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        is_admin BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
              INSERT INTO users (name, email, password)
              VALUES (${user.name}, ${user.email}, ${hashedPassword})
              ON CONFLICT (id) DO NOTHING;
          `;
    })
  );

  return insertedUsers;
}

async function seedOrders() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  return await client.sql`
  CREATE TABLE IF NOT EXISTS orders (
     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    source TEXT NOT NULL,
        parts VARCHAR(255),
        eta VARCHAR(255),
        freight VARCHAR(1000),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        
  )
  `;
}

async function seedTickets() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  //await client.sql`CREATE TYPE statustype AS ENUM('${open}', ${helpWanted}, ${closed})`;

  await client.sql`
            CREATE TABLE IF NOT EXISTS tickets (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            reason VARCHAR(255) NOT NULL,
            status statustype NOT NULL,
            year varchar(4),
            make VARCHAR(255),
            model VARCHAR(255),
            engine VARCHAR(255),
            submodel VARCHAR(255),
            created_by UUID NOT NULL REFERENCES users(id),
            customer_id UUID NOT NULL REFERENCES customers(id),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
}

async function seedNotes() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
        CREATE TABLE IF NOT EXISTS notes (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            ticket_id UUID NOT NULL REFERENCES tickets(id),
            user_id UUID NOT NULL REFERENCES users(id),
            note TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;
}

export async function seedProducts() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  console.log("Creating products table");

  return await client.sql`
        CREATE TABLE IF NOT EXISTS products (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            linecode varchar(255) NOT NULL,
            partnumber varchar(255) NOT NULL,
            name varchar(255) NOT NULL,
            order_id UUID NOT NULL,
            cost DECIMAL NOT NULL,
            quoted_price DECIMAL NOT NULL,
            extra_cost DECIMAL NOT NULL,
            source VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;
}
export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedCustomers();
    await seedTickets();
    await seedNotes();
    await seedProducts();
    await seedOrders();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
