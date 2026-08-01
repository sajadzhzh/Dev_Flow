import {
  mysqlTable,
  int,
  varchar,
  text,
  timestamp,
  date,
} from "drizzle-orm/mysql-core";


export const tasks = mysqlTable("tasks", {

  id: int("id").autoincrement().primaryKey(),

  title: varchar("title", {
    length:100
  }).notNull(),

  description: text("description"),

  project_id: int("project_id").notNull(),

  assignee_id: int("assignee_id").notNull(),

  created_by: int("created_by").notNull(),

  manager_id: int("manager_id").notNull(),

  status_id: int("status_id").notNull(),

  priority_id: int("priority_id").notNull(),

  start_date: date("start_date").notNull(),

  end_date: date("end_date").notNull(),

  created_at: timestamp("created_at").defaultNow(),

  updated_at: timestamp("updated_at"),
});