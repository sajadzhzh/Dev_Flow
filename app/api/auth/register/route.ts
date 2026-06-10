import { db } from "@/Lib/DataBase/Db";
import { users } from "@/Lib/DataBase/Schema/users";
import { ValidateEmail, ValidatePassword } from "@/Lib/Helper/CheckValid";
import { Hash } from "@/Lib/Security/Hash";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const name = body.name;
  const email = body.email;
  const password = body.password;
  const passwordCheck = body.passwordCheck;

  if (!name || !email || !password || !passwordCheck) {
    return NextResponse.json(
      {
        status: "error",
        message: "تمام بخش ها الزامی هستند!",
      },
      { status: 400 },
    );
  }

  if (password !== passwordCheck) {
    return NextResponse.json(
      {
        status: "error",
        message: "رمز عبور و تکرار آن یکسان نیستند!",
      },
      { status: 400 },
    );
  }

  if (!ValidateEmail(email as string)) {
    return NextResponse.json(
      {
        status: "error",
        message: "ایمیل نامعتبر!",
      },
      { status: 400 },
    );
  }
  if (!ValidatePassword(password as string)) {
    return NextResponse.json(
      {
        status: "error",
        message: "رمز عبور باید حداقل 8 و حداکثر 50 کاراکتر باشد.",
      },
      { status: 400 },
    );
  }

  try {
    const [user] = await db
      .select({
        id: users.id,
        name: users.name,
        password: users.password,
        email: users.email,
      })
      .from(users)
      .where(eq(users.email, email as string));

    if (user) {
      return NextResponse.json(
        {
          status: "error",
          message: "کاربری با این ایمیل وجود دارد ، لطفا وارد حساب خود شوید.",
        },
        { status: 409 },
      );
    }

    const hashed = await Hash(password);

    const insert = await db
      .insert(users)
      .values({ name: name, email: email, password: hashed });

    return NextResponse.json(
      {
        status: "success",
        message: "ثبت نام با موفقیت انجام شد. لطفا وارد حساب شوید.",
      },
      { status: 200 },
    );
  } catch (e: any) {
    return NextResponse.json(
      {
        status: "error",
        message: `Something happend: ${e.message}`,
      },
      { status: 500 },
    );
  }
}
