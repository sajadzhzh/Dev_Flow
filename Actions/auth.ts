"use server";

import { signIn } from "@/auth";
import { ValidateEmail, ValidatePassword } from "@/Lib/Helper/CheckValid";
import { postFetch } from "@/Lib/Helper/Fetch";

export async function register(state: any, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const passwordCheck = formData.get("passwordCheck");

  if (!name || !email || !password || !passwordCheck) {
    return {
      status: "error",
      message: "تمام بخش ها الزامی هستند!",
    };
  }

  if (password !== passwordCheck) {
    return {
      status: "error",
      message: "رمز عبور و تکرار آن یکسان نیستند!",
    };
  }

  if (!ValidateEmail(email as string)) {
    return {
      status: "error",
      message: "ایمیل نامعتبر!",
    };
  }
  if (!ValidatePassword(password as string)) {
    return {
      status: "error",
      message: "رمز عبور باید حداقل 8 و حداکثر 50 کاراکتر باشد.",
    };
  }

  try {
    const res = await postFetch("auth/register", {
      name,
      email,
      password,
      passwordCheck,
    });

    switch (res.status) {
      case "error":
        return {
          status: "error",
          message: res.message,
        };
      case "success":
        return {
          status: "success",
          message: res.message,
        };
    }
  } catch (e: any) {
    return {
      status: "error",
      message: `Something happend: ${e.message}`,
    };
  }
}

export async function login(state: any, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return {
      status: "error",
      message: "تمام بخش ها الزامی هستند!",
    };
  }

  if (!ValidateEmail(email as string)) {
    return {
      status: "error",
      message: "ایمیل نامعتبر!",
    };
  }
  if (!ValidatePassword(password as string)) {
    return {
      status: "error",
      message: "رمز عبور باید حداقل 8 و حداکثر 50 کاراکتر باشد.",
    };
  }

  try {
    await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    return {
      status: "success",
      message: "خوش آمدید.",
    };
  } catch (e: any) {
    return {
      status: "error",
      message: `Something happend: ${e.message}`,
    };
  }
}
