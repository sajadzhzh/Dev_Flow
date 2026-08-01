import {
  mysqlTable,
  int,
  varchar,
  timestamp,
  bigint,
} from "drizzle-orm/mysql-core";


export const attachments = mysqlTable("attachments", {

  id: int("id")
    .autoincrement()
    .primaryKey(),

  name: varchar("name", {
    length:255
  }).notNull(),

  file_name: varchar("file_name", {
    length:255
  }).notNull(),

  file_path: varchar("file_path", {
    length:500
  }).notNull(),

  file_size: bigint("file_size", {
    mode:"number"
  }).notNull(),

  mime_type: varchar("mime_type", {
    length:100
  }).notNull(),

  entity_type: int("entity_type")
    .notNull(),

  entity_id: int("entity_id")
    .notNull(),

  uploaded_by: int("uploaded_by")
    .notNull(),

  created_at: timestamp("created_at")
    .defaultNow(),

});