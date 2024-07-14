import { db } from "@vercel/postgres";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default async function CustomerDropDown() {
  const client = await db.connect();
  const customerQuery = await client.query("SELECT * FROM customers");
  const customers = customerQuery.rows;
  client.release();
  return (
      <Select>
        <SelectTrigger id="status" aria-label="Select Customer">
          <SelectValue placeholder="Select Customer" />
        </SelectTrigger>
        <SelectContent>
          {customers.map((customer) => (
            <SelectItem key={customer.id} value={customer.id}>{customer.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
  );
}
