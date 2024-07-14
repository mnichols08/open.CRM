import { db } from "@vercel/postgres";
import TicketsPage from "@/components/Tickets/AllTickets";
import { Ticket } from "@/app/lib/definitions";

export default async function Page() {
  const client = await db.connect()
  const data = await client.sql<Ticket>`SELECT * FROM tickets`;
  client.release();
  return <TicketsPage data={data} />;
}
