import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { db } from "./Lib/DataBase/Db";
import { users } from "./Lib/DataBase/Schema/users";
import { eq } from "drizzle-orm";
import { ValidateEmail, ValidatePassword } from "./Lib/Helper/CheckValid";
import { VerifyPass } from "./Lib/Security/Hash";
import { getUserByEmail } from "./Lib/Repository/User.Repository";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          return null;
        }

        if (
          !ValidateEmail(credentials.email as string) ||
          !ValidatePassword(credentials.password as string)
        ) {
          return null;
        }

        const user = await getUserByEmail(credentials.email as string)

        if (!user) {
          return null;
        }

        if (
          !(await VerifyPass(
            user.password as string,
            credentials.password as string,
          ))
        ) {
          return null;
        }

        return {
          id: String(user.id),
          name: user.userName,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name!;
        session.user.email = token.email!;
      }

      return session;
    },
  },
});
