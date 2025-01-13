import { drizzle } from "drizzle-orm/neon-http";
import { config } from "dotenv";
import { neon } from "@neondatabase/serverless";

config({ path: ".env" });

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql);

export { db };
