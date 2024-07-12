import { db } from "@vercel/postgres";
import { NextResponse } from "next/server"

async function getCustomers() {
  let client;

  try {
    client = await db.connect();
  } catch (connectionError) {
    console.error('Database connection error:', connectionError);
    return NextResponse.json({ error: 'Database connection failed' });
    ;
  }

  try {
    const result = await client.sql`SELECT * FROM customers`;
    return NextResponse.json(result.rows);
    
  } catch (queryError) {
    console.error('Query error:', queryError);
    return NextResponse.json({ error: 'Query failed' });
  } finally {
    client.release();
  }
}

export { getCustomers as GET };
