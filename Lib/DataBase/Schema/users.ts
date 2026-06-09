import { mysqlTable, varchar, int, timestamp } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),

  name: varchar("name", {
    length: 100,
  }),

  email: varchar("email", {
    length: 100,
  })
    .notNull()
    .unique(),

  password: varchar("password", {
    length: 255,
  }),

  createdAt: timestamp("createdAt").defaultNow(),
});
