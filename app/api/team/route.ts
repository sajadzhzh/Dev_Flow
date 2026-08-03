import { auth } from "@/auth";
import { getTeamMembersByUserId } from "@/Lib/Repository/Team_members.Repository";
import { InitialTeam } from "@/Lib/Repository/Teams.Repository";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json(
      { status: "error", message: "فاقد اعتبار سنجی" },
      { status: 401 },
    );
  }

  try {
    const teamMember = await getTeamMembersByUserId(Number(session.user.id));

    if (!teamMember) {
      return NextResponse.json(
        { status: "error", message: "شما عضو تیمی نیستید !" },
        { status: 401 },
      );
    }

    return NextResponse.json(
      { status: "success", data: teamMember },
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

export async function POST(request: Request) {
  const { name, description } = await request.json();
  const finalDescription = description?.trim() || "فاقد توضیحات!";
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json(
      { status: "error", message: "فاقد اعتبار سنجی" },
      { status: 401 },
    );
  }

  if (!name.trim()) {
    return NextResponse.json(
      { status: "error", message: "مقدار نام الزامی است" },
      { status: 401 },
    );
  }

  try {
    const res = await InitialTeam({
      name,
      description: finalDescription,
      owner_id: Number(session.user.id),
    });

    if (!res) {
      return NextResponse.json(
        {
          status: "error",
          message: "مشکلی در ایجاد تیم پیش آمد.لطفا دوباره تلاش کنید.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        status: "success",
        message: "تیم با موفقیت ایجاد شد",
        team_id: res.teamId,
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
