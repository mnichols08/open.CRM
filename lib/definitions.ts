// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type Summary = {
  title: string | null;
  description: string | null;
  buttonText: string | null;
  buttonLink: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  is_admin: boolean;
};

export interface Session {
  user?: {
    email?: string | null;
    name?: string | null;
  };
  expires: string;
}

export interface Note {
  id: string;
  ticket_id: string;
  user_id: string;
  note: string;
  created_at: string;
}

export type Customer = {
  id: string | null;
  name: string | null;
  address1: string | null;
  address2: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  country: string | null;
  phone: string | null;
  created_at: string | null;
};

export type Product = {
  id: string | null;
  linecode: string | null;
  partnumber: string | null;
  name: string | null;
  order_id: string | null;
  cost: number | null;
  quoted_price: number | null;
  extra_cost: number | null;
  source: string | null;
  description: string | null;
  created_at: string | null;
};

export type Order = {
  id: string | null;
  source: string | null;
  parts: string | null;
  eta: string | null;
  freight: string | null;
  created_at: string | null;
};

export type Ticket = {
  id: string | null;
  reason: string | null;
  status: string | null;
  year: number | null;
  make: string | null;
  model: string | null;
  engine: string | null;
  submodel: string | null;
  created_by: string | null;
  customer_id: string | null;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: "pending" | "paid";
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, "amount"> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: "pending" | "paid";
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: "pending" | "paid";
};
