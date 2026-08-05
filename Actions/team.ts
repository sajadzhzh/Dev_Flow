"use server";

import { auth } from "@/auth";
import { getFetch, postFetch } from "@/Lib/Helper/Fetch";
import { cookies } from "next/headers";

type InitialTeamDto = {
  name: string;
  description: string;
};

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

    return {
      status: "success",
      data: res.data,
    };
  } catch (e: any) {
    console.log(e.message);
    return {
      status: "error",
      messsage: "مشکلی در دریافت اطلاعات پیش آمد. لطفا دوباره تلاش کنید.",
    };
  }
}

export async function initialTeam(data: InitialTeamDto) {
  const { name, description } = data;
  const session = await auth();

  if (!session?.user) {
    return {
      status: "error",
      message: "فاقد اعتبار سنجی.لطفا دوباره وارد حساب خود شوید",
    };
  }

  if (!name.trim()) {
    return {
      status: "error",
      message: "مقدار نام تیم الزامی است",
    };
  }

  const cookieStore = await cookies();

  try {
    const res = await postFetch(
      "/team",
      { name, description },
      {
        Cookie: cookieStore.toString(),
      },
    );

    if (res.status == "error") {
      return {
        status: "error",
        message: res.message,
      };
    }

    return {
      status: "success",
      message: res.message,
      data: res.data,
    };
  } catch (e: any) {
    console.log(e.message);
    return {
      status: "error",
      messsage: "مشکلی در دریافت اطلاعات پیش آمد. لطفا دوباره تلاش کنید.",
    };
  }
}

export async function myTeam(team_id: number) {
  const session = await auth();

  if (!session?.user) {
    return {
      status: "error",
      message: "فاقد اعتبار سنجی.لطفا دوباره وارد حساب خود شوید",
    };
  }
  if (!team_id) {
    return {
      status: "error",
      message: "آیدی تیم وارد نشده است. دوباره تلاش کنید",
    };
  }

  const cookieStore = await cookies();

  try {
    const res = await postFetch(
      "/team/myTeam",
      { team_id },
      {
        Cookie: cookieStore.toString(),
      },
    );

    if (res.status == "error") {
      return {
        status: "error",
        message: res.message,
      };
    }

    return {
      status: "success",
      data: res.data,
      owner: res.owner
    };
  } catch (e: any) {
    console.log(e.message);
    return {
      status: "error",
      messsage: "مشکلی در دریافت اطلاعات پیش آمد. لطفا دوباره تلاش کنید.",
    };
  }
}

export async function teamMembers(team_id: number) {
  const session = await auth();

  if (!session?.user) {
    return {
      status: "error",
      message: "فاقد اعتبار سنجی.لطفا دوباره وارد حساب خود شوید",
    };
  }
  if (!team_id) {
    return {
      status: "error",
      message: "آیدی تیم وارد نشده است. دوباره تلاش کنید",
    };
  }

  const cookieStore = await cookies();

  try {
    const res = await postFetch(
      "/team/members",
      { team_id },
      {
        Cookie: cookieStore.toString(),
      },
    );

    if (res.status == "error") {
      return {
        status: "error",
        message: res.message,
      };
    }

    return {
      status: "success",
      data: res.data,
    };
  } catch (e: any) {
    console.log(e.message);
    return {
      status: "error",
      messsage: "مشکلی در دریافت اطلاعات پیش آمد. لطفا دوباره تلاش کنید.",
    };
  }
}