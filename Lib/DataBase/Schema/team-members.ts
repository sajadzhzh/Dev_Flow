import {
  mysqlTable,
  int,
  timestamp,
} from "drizzle-orm/mysql-core";


export const teamMembers = mysqlTable("team_members", {

  id: int("id")
    .autoincrement()
    .primaryKey(),

  user_id: int("user_id")
    .notNull(),

  team_id: int("team_id")
    .notNull(),

  joined_at: timestamp("joined_at")
    .defaultNow(),

});