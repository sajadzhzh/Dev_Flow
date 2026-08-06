import { auth } from "@/auth";
import { getTeamMembersByTeamId } from "@/Lib/Repository/Team_members.Repository";
import { getTeamStats } from "@/Lib/Repository/Teams.Repository";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { team_id } = await request.json();
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json(
      { status: "error", message: "فاقد اعتبار سنجی" },
      { status: 401 },
    );
  }

  if (!team_id) {
    return NextResponse.json(
      { status: "error", message: "آیدی تیم ارسال نشد.لطفا دوباره تلاش کنید." },
      { status: 400 },
    );
  }

  try {
    const res = await getTeamStats(team_id);

    if (!res) {
      return NextResponse.json(
        {
          status: "error",
          message:
            "مشکلی در دریافت اطلاعات تیم به وجود آمد.لطفا دوباره تلاش کنید.",
        },
        { status: 400 },
      );
    }

    const users = await getTeamMembersByTeamId(team_id);

    if (!users) {
      return NextResponse.json(
        {
          status: "error",
          message:
            "مشکلی در دریافت اطلاعات کاربران تیم به وجود آمد.لطفا دوباره تلاش کنید.",
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        status: "success",
        data: res,
        users: users,
      },
      { status: 200 },
    );
  } catch (e: any) {
    console.log(e.message);
    return NextResponse.json(
      {
        status: "error",
        message: "مشکلی در دریافت اطلاعات پیش آمد.لطفا دوباره تلاش کنید.",
      },
      { status: 500 },
    );
  }
}
