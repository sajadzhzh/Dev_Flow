import { mysqlTable, int, varchar } from "drizzle-orm/mysql-core";

export const status = mysqlTable("status", {
  id: int("id").autoincrement().primaryKey(),

  name: varchar("name", {
    length: 100,
  }),
});