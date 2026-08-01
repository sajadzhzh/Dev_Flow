import {
  mysqlTable,
  int,
  varchar,
  text,
  timestamp,
} from "drizzle-orm/mysql-core";

export const teams = mysqlTable("teams", {
  id: int("id").autoincrement().primaryKey(),

  name: varchar("name", {
    length: 100,
  }).notNull(),

  description: text("description"),

  owner_id: int("owner_id").notNull(),

  created_at: timestamp("created_at").defaultNow(),

  updated_at: timestamp("updated_at"),
});