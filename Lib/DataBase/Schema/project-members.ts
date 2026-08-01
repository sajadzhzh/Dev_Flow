import {
  mysqlTable,
  int,
  timestamp,
} from "drizzle-orm/mysql-core";


export const projectMembers = mysqlTable("project_members", {

  id: int("id")
    .autoincrement()
    .primaryKey(),

  project_id: int("project_id")
    .notNull(),

  user_id: int("user_id")
    .notNull(),

  joined_at: timestamp("joined_at")
    .defaultNow(),

});