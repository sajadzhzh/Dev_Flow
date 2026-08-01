import {
  mysqlTable,
  int,
  varchar,
  text,
  timestamp,
  boolean,
} from "drizzle-orm/mysql-core";


export const notifications = mysqlTable("notifications", {

  id: int("id").autoincrement().primaryKey(),

  title: varchar("title", {
    length:100
  }).notNull(),

  message: text("message"),

  type: int("type").notNull(),

  user_id: int("user_id").notNull(),

  is_read: boolean("is_read")
    .default(false),

  created_at: timestamp("created_at")
    .defaultNow(),

});