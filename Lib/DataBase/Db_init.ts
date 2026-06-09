import mysql from "mysql2/promise";

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || "",
  port: Number(process.env.DB_PORT) || 3306,
};

export const databaseSchema = {
  database: process.env.DB_DATABASE,
  tables: [
    {
      name: "users",
      columns: `
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        `,
    },
  ],
};

export async function initialDatabase() {
  let connection;
  console.log("starting database ...");

  try {
    connection = await mysql.createConnection(config);

    await connection.query(
      `CREATE DATABASE IF NOT EXISTS ${databaseSchema.database}`,
    );

    await connection.query(`USE ${databaseSchema.database}`);

    for (const table of databaseSchema.tables) {
      await connection.query(
        `CREATE TABLE IF NOT EXISTS ${table.name}(
                ${table.columns}
                )`,
      );
    }

    console.log("Database and Tables Created!");
  } catch (err) {
    console.log(err);
  } finally {
    if (connection) await connection.end();
  }
}
