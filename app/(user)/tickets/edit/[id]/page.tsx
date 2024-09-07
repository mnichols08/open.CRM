"use client";
import { useState, useEffect } from "react";
import CustomerDropDown from "@/components/CustomerDropDown";
import EditTicketPage from "@/components/Tickets/editTicketForm";
import { db } from "@vercel/postgres";
import { fetchCustomerFromTicket } from "@/lib/actions";
import { Customer } from "@/lib/definitions";

export default function Page({ params }: { params: { id: string } }) {
  const ticketID = params.id;
  const [customer, setCustomer] = useState("");
  const [currentCustomer, setCurrentCustomer] = useState("customer");

  // useEffect(() => {
  //   fetchCustomerFromTicket(ticketID).then((customer) => {
  //     console.log(customer);
  //     setCustomer(customer);
  //     setCurrentCustomer(customer);
  //   });
  // }, []);

  const updateCustomer = (val: string) => setCurrentCustomer(val);

  return (
    <EditTicketPage ticketID={ticketID} currentCustomer={customer}>
      <CustomerDropDown
        selectedCustomer={customer}
        updateCustomer={updateCustomer}
      />
    </EditTicketPage>
  );
}
