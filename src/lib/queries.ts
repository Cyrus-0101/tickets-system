import { db } from "@/db";
import { customers, tickets } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getCustomer(id: string) {
  const customer = await db
    .select()
    .from(customers)
    .where(eq(customers.id, id));

  return customer[0];
}

export async function getTicket(id: string) {
  const ticket = await db.select().from(tickets).where(eq(tickets.id, id));

  return ticket[0];
}

export async function getCustomers() {
  const allCustomers = await db.select().from(customers);

  return allCustomers;
}

export async function getTickets() {
  const allTickets = await db.select().from(tickets);

  return allTickets;
}
