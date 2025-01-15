import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { customers } from "@/db/schema";

export const countyEnum = z.enum([
  "Baringo",
  "Bomet",
  "Bungoma",
  "Busia",
  "Elgeyo Marakwet",
  "Embu",
  "Garissa",
  "Homa Bay",
  "Isiolo",
  "Kajiado",
  "Kakamega",
  "Kericho",
  "Kiambu",
  "Kilifi",
  "Kirinyaga",
  "Kisii",
  "Kisumu",
  "Kitui",
  "Kwale",
  "Laikipia",
  "Lamu",
  "Machakos",
  "Makueni",
  "Mandera",
  "Marsabit",
  "Meru",
  "Migori",
  "Mombasa",
  "Murang'a",
  "Nairobi",
  "Nakuru",
  "Nandi",
  "Narok",
  "Nyamira",
  "Nyandarua",
  "Nyeri",
  "Samburu",
  "Siaya",
  "Taita Taveta",
  "Tana River",
  "Tharaka Nithi",
  "Trans Nzoia",
  "Turkana",
  "Uasin Gishu",
  "Vihiga",
  "Wajir",
  "West Pokot",
]);

// Type for TypeScript
export type County = z.infer<typeof countyEnum>;

export const insertCustomerSchema = createInsertSchema(customers, {
  first_name: z.string().min(3, "First name is required"),
  last_name: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(
      /^(\+254|0)(7[0-9]|11)[0-9]{7}$/,
      "Phone number must be Kenyan and have 10 digits"
    ),
  address1: z.string().min(3, "At least one addrress is required"),
  address2: z.string().optional(),
  city: z.string().min(3, "A city needs at least 3 characters"),
  county: countyEnum,
  zip: z.string().length(5, "ZIP code must be at least  5 digits"),
});

export const selectCustomerSchema = createSelectSchema(customers);

export type InsertCustomer = typeof insertCustomerSchema._type;

export type SelectCustomer = typeof selectCustomerSchema._type;
