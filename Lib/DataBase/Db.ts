import mysql from "mysql2/promise";
import { initialDatabase } from "./Db_init";
import { drizzle } from "drizzle-orm/mysql2";


await initialDatabase()
const connection= mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

export const db = drizzle(connection)