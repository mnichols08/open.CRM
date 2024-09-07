"use client";
import { useState, useEffect } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { fetchCustomers } from "@/lib/actions";
import { Customer } from "@/lib/definitions";

export default function CustomerDropDown({
  selectedCustomer,
  updateCustomer,
}: {
  selectedCustomer: string | undefined;
  updateCustomer: any;
}) {
  const [customers, setCustomers] = useState<Customer[]>([]);
  useEffect(() => {
    fetchCustomers().then((customers) => setCustomers(customers));
  }, []);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(selectedCustomer);

  useEffect(() => updateCustomer(value), [value]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? customers.find((customer) => customer.id === value)?.name
            : "Select customer..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search customer..." />
          <CommandList>
            <CommandEmpty>No customer found.</CommandEmpty>
            <CommandGroup>
              {customers.map((customer) => {
                return (
                  <CommandItem
                    key={customer.id}
                    value={customer.name || ""}
                    onSelect={(currentValue: any) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === customer.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {customer.name}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
