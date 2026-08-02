import { eq } from "drizzle-orm";
import { db } from "../DataBase/Db";
import { users } from "../DataBase/Schema";

export async function getUserByEmail(email: string) {
  const [user] = await db
    .select({
      id: users.id,
      userName: users.userName,
      password: users.password,
      email: users.email,
    })
    .from(users)
    .where(eq(users.email, email as string));

  return user ?? null;
}

export async function createUser(data: {
  userName?: string;
  email: string;
  password: string;
}) {
  const result = await db.insert(users).values(data);

  return result;
}
