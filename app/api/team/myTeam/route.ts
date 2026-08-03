import { auth } from "@/auth";
import { getTeamByTeamId } from "@/Lib/Repository/Teams.Repository";
import { getUserById } from "@/Lib/Repository/User.Repository";
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
      { status: "error", message: "آیدی تیم ارسال نشده است!" },
      { status: 401 },
    );
  }

  try {
    const team = await getTeamByTeamId(team_id);

    if (!team) {
      return NextResponse.json(
        { status: "error", message: "تیم پیدا نشد !" },
        { status: 404 },
      );
    }

    const owner = await getUserById(team.owner_id);

    return NextResponse.json(
      { status: "success", data: team, owner },
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
