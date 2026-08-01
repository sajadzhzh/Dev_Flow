import {
  mysqlTable,
  int,
  varchar,
  boolean,
  timestamp,
} from "drizzle-orm/mysql-core";


export const checklists = mysqlTable("check_lists", {

  id: int("id")
    .autoincrement()
    .primaryKey(),

  project_id: int("project_id")
    .notNull(),

  title: varchar("title", {
    length:100,
  }).notNull(),

  order_number: int("order_number")
    .notNull(),

  is_completed: boolean("is_completed")
    .default(false),

  created_at: timestamp("created_at")
    .defaultNow(),

});