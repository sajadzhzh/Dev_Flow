import { ValidateEmail, ValidatePassword } from "@/Lib/Helper/CheckValid";
import { createUser, getUserByEmail } from "@/Lib/Repository/User.Repository";
import { Hash } from "@/Lib/Security/Hash";
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
    const user = await getUserByEmail(email);

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

    await createUser({
      userName: name,
      email: email,
      password: hashed,
    });

    return NextResponse.json(
      {
        status: "success",
        message: "ثبت نام با موفقیت انجام شد. لطفا وارد حساب شوید.",
      },
      { status: 200 },
    );
  } catch (e: any) {
    console.log(e.message);

    return NextResponse.json(
      {
        status: "error",
        message: `Something happend. Try again later.`,
      },
      { status: 500 },
    );
  }
}
