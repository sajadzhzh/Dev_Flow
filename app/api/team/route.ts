import { auth } from "@/auth";
import { getTeamMembersByUserId } from "@/Lib/Repository/Teams.Repository";
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
