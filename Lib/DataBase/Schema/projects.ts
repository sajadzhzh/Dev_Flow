import {
  mysqlTable,
  int,
  varchar,
  text,
  timestamp,
  date,
} from "drizzle-orm/mysql-core";

export const projects = mysqlTable("projects", {
  id: int("id").autoincrement().primaryKey(),

  team_id: int("team_id").notNull(),

  name: varchar("name", {
    length: 100,
  }).notNull(),

  description: text("description"),

  status: int("status").notNull(),

  manager_id: int("manager_id").notNull(),

  start_date: date("start_date").notNull(),

  end_date: date("end_date").notNull(),

  created_at: timestamp("created_at").defaultNow(),

  updated_at: timestamp("updated_at"),
});