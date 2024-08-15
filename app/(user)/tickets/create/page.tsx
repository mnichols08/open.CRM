import CustomerDropDown from "@/components/CustomerDropDown";
import CreateTicketPage from "@/components/Tickets/createTicketForm";

export default function Page() {
  return (
    <CreateTicketPage>
      <CustomerDropDown selectedCustomer={undefined} />
    </CreateTicketPage>
  );
}
