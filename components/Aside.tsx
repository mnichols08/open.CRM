import Link from "next/link";
import {
    Home,
    Package,
    Ticket,
    Settings,
    ShoppingCart,
    Users2,
  } from "lucide-react"
  import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
  } from "@/components/ui/tooltip"
  
export default function Aside() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
    <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
      <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/dashboard"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Home className="h-5 w-5" />
            <span className="sr-only">Dashboard</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Dashboard</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/customers"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Users2 className="h-5 w-5" />
            <span className="sr-only">Customers</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Customers</TooltipContent>
      </Tooltip>
 
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/tickets"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Ticket className="h-5 w-5" />
            <span className="sr-only">Tickets</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Tickets</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/products"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Package className="h-5 w-5" />
            <span className="sr-only">Products</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Products</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/orders"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Orders</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Orders</TooltipContent>
      </Tooltip>
      </TooltipProvider>
    </nav>
    <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
      <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/settings"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Settings className="h-5 w-5" />
            <span className="sr-only"><Link href="/settings">Settings</Link></span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Settings</TooltipContent>
      </Tooltip>
      </TooltipProvider>
    </nav>
  </aside>
  );
}