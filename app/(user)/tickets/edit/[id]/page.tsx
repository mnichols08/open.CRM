import CustomerDropDown from "@/components/CustomerDropDown";
import EditTicketPage from "@/components/Tickets/editTicketForm";
import { db } from "@vercel/postgres";

export default async function Page({ params }: { params: { id: string} }) {
  const ticketID = params.id;
  const client = await db.connect();
  const customerQuery = await client.sql`SELECT customer_id from TICKETS where id = ${ticketID}`;
  const customer = customerQuery.rows[0].customer_id;
  return (
    <EditTicketPage ticketID={ticketID}>
      <CustomerDropDown selectedCustomer={customer} />
    </EditTicketPage>
  );
}
