import { TableCell, TableRow } from "@/components/ui/table";

function Customer(customer: { name: string}) {
  const { name } = customer;
  return (
    <TableRow className="bg-accent">
      <TableCell>
        <div className="font-medium">{name}</div>
        <div className="hidden text-sm text-muted-foreground md:inline">
        
        </div>
      </TableCell>
    </TableRow>
  );
}

export default Customer;
