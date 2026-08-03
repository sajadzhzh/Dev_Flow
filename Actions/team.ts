"use server";

import { auth } from "@/auth";
import { getFetch } from "@/Lib/Helper/Fetch";
import { cookies } from "next/headers";

export async function getTeam() {
  const session = await auth();

  if (!session?.user) {
    return {
      status: "error",
      message: "فاقد اعتبار سنجی.لطفا دوباره وارد حساب خود شوید",
    };
  }

  const cookieStore = await cookies();

  try {
    const res = await getFetch("/team", {
      Cookie: cookieStore.toString(),
    });

    if (res.status == "error") {
      
      return {
        status: "error",
        message: res.message,
      };
    }

    return{
        status: "success",
        data: res.data,
    }
  } catch (e: any) {
    console.log(e.message);
    return {
      status: "error",
      messsage: "مشکلی در دریافت اطلاعات پیش آمد. لطفا دوباره تلاش کنید.",
    };
  }
}
