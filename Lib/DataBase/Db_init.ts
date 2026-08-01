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
        userName VARCHAR(100) NULL UNIQUE,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NULL,
        avatar VARCHAR(255) NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NULL
        `,
    },
    {
      name: "status",
      columns: `
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NULL
        `,
    },
    {
      name: "priority",
      columns: `
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NULL
        `,
    },
    {
      name: "teams",
      columns: `
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT NULL,
        owner_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NULL,
        FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE RESTRICT ON UPDATE CASCADE
        `,
    },
    {
      name: "team_members",
      columns: `
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        team_id INT NOT NULL,
        joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(team_id) REFERENCES teams(id),
        FOREIGN KEY(user_id) REFERENCES users(id)
        `,
    },
    {
      name: "projects",
      columns: `
        id INT AUTO_INCREMENT PRIMARY KEY,
        team_id INT NOT NULL,
        name VARCHAR(100) NOT NULL,
        description TEXT NULL,
        status INT NOT NULL,
        manager_id INT NOT NULL,
        start_date DATE NOT NULL,
        end_date DATE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NULL,
        FOREIGN KEY(team_id) REFERENCES teams(id),
        FOREIGN KEY(manager_id) REFERENCES users(id)
        `,
    },
    {
      name: "check_lists",
      columns: `
        id INT AUTO_INCREMENT PRIMARY KEY,
        project_id INT NOT NULL,
        title VARCHAR(100) NOT NULL,
        order_number INT NOT NULL,
        is_completed BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(project_id) REFERENCES projects(id)
        `,
    },
    {
      name: "project_members",
      columns: `
        id INT AUTO_INCREMENT PRIMARY KEY,
        project_id INT NOT NULL,
        user_id INT NOT NULL,
        joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(project_id) REFERENCES projects(id),
        FOREIGN KEY(user_id) REFERENCES users(id)
        `,
    },
    {
      name: "tasks",
      columns: `
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        description TEXT NULL,
        project_id INT NOT NULL,
        asignee_id INT NOT NULL,
        manager_id INT NOT NULL,
        created_by INT NOT NULL,
        status_id INT NOT NULL,
        priority_id INT NOT NULL,
        start_date DATE NOT NULL,
        end_date DATE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NULL,
        FOREIGN KEY(project_id) REFERENCES projects(id),
        FOREIGN KEY(asignee_id) REFERENCES users(id),
        FOREIGN KEY(created_by) REFERENCES users(id),
        FOREIGN KEY(manager_id) REFERENCES users(id),
        FOREIGN KEY(status_id) REFERENCES status(id),
        FOREIGN KEY(priority_id) REFERENCES priority(id)
        `,
    },
    {
      name: "notifications",
      columns: `
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        message TEXT NULL,
        type TINYINT NOT NULL,
        user_id INT NOT NULL,
        is_read BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES users(id)
        `,
    },
    {
      name: "attachments",
      columns: `
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        file_name VARCHAR(255) NOT NULL,
        file_path VARCHAR(500) NOT NULL,
        file_size BIGINT NOT NULL,
        mime_type VARCHAR(100) NOT NULL,
        entity_type TINYINT NOT NULL,
        entity_id INT NOT NULL,
        uploaded_by INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(uploaded_by) REFERENCES users(id)
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
