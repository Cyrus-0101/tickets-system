import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { tickets } from "@/db/schema";

// Schema for inserting tickets
export const insertTicketSchema = createInsertSchema(tickets, {
  id: z.union([z.string(), z.literal("New")]),
  title: z
    .string()
    .min(1, "Title is required")
    .max(255, "Title is too long")
    .transform((str) => str.trim()),
  description: z
    .string()
    .optional()
    .transform((str) => (str === "" ? undefined : str?.trim())),
  mech: z
    .string()
    .default("Unassigned")
    .refine((val) => ["Unassigned", "In Progress", "Completed"].includes(val), {
      message: "Invalid mechanic status",
    }),
  completed: z.boolean().default(false),
});

// Schema for selecting/querying tickets
export const selectTicketSchema = createSelectSchema(tickets);

// TypeScript types
export type InsertTicket = z.infer<typeof insertTicketSchema>;
export type SelectTicket = z.infer<typeof selectTicketSchema>;
