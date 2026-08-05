import { auth } from "@/auth";
import { getTeamMembersByTeamId } from "@/Lib/Repository/Team_members.Repository";
import { getUserById } from "@/Lib/Repository/User.Repository";
import { NextResponse } from "next/server";

type User = {
  id: number;
  userName: string;
  email: string;
};

export async function POST(request: Request) {
  const { team_id } = await request.json();
  const session = await auth();

  console.log(team_id);

  if (!session?.user) {
    return NextResponse.json(
      { status: "error", message: "فاقد اعتبار سنجی" },
      { status: 401 },
    );
  }

  if (!team_id) {
    return NextResponse.json(
      { status: "error", message: "آیدی تیم ارسال نشد. لطفا دوباره تلاش کنید" },
      { status: 401 },
    );
  }

  try {
    const users = await getTeamMembersByTeamId(team_id);

    if (!users) {
      return NextResponse.json(
        {
          status: "error",
          message: "هیچ کاربری در تیمی با آیدی ارسالی عضو نیست!",
        },
        { status: 404 },
      );
    }

    const info = await Promise.all(
      users.map(async (user) => {
        const userInfo = await getUserById(user.user_id);

        if (!userInfo) {
          throw new Error(`User ${user.user_id} not found`);
        }

        return userInfo;
      }),
    );

    return NextResponse.json(
      {
        status: "success",
        data: info,
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
