import { mysqlTable, int, varchar } from "drizzle-orm/mysql-core";

export const priority = mysqlTable("priority", {
  id: int("id").autoincrement().primaryKey(),

  name: varchar("name", {
    length: 100,
  }),
});