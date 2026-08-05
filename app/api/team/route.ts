import { auth } from "@/auth";
import {
  changeTeamOwner,
  getTeamMembersByUserId,
} from "@/Lib/Repository/Team_members.Repository";
import {
  getTeamByTeamId,
  getTeamByTeamName,
  InitialTeam,
  UpdateTeam,
} from "@/Lib/Repository/Teams.Repository";
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
    const isTaken = await getTeamByTeamName(name);

    if (isTaken) {
      return NextResponse.json(
        {
          status: "error",
          message: "نام تیم تکراری است.لطفا نام دیگری انتخاب کنید.",
        },
        { status: 401 },
      );
    }

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

export async function PUT(request: Request) {
  const { id, name, owner, description } = await request.json();
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

  if (!id) {
    return NextResponse.json(
      { status: "error", message: "آیدی وارد نشد.لطفا دوباره تلاش کنید." },
      { status: 401 },
    );
  }

  if (!owner) {
    return NextResponse.json(
      { status: "error", message: "آیدی مالک وارد نشد.لطفا دوباره تلاش کنید." },
      { status: 401 },
    );
  }

  try {
    const team = await getTeamByTeamId(id);

    if (!team) {
      return NextResponse.json(
        {
          status: "error",
          message: "تیم با آیدی ارسال شده پیدا نشد",
        },
        { status: 404 },
      );
    } 
    
    const update = await UpdateTeam({ id, name, owner, description });
    
    if (!update) {
      return NextResponse.json(
        {
          status: "error",
          message: "مشکلی در ایجاد تغییر در تیم پیش آمد.لطفا دوباره تلاش کنید.",
        },
        { status: 500 },
      );
    }

    if (team.owner_id !== owner) {
      const changeOwner = await changeTeamOwner(team.id, owner);

      if (!changeOwner) {
        return NextResponse.json(
          {
            status: "error",
            message:
              "مشکلی در ایجاد تغییر مالک تیم پیش آمد.لطفا دوباره تلاش کنید.",
          },
          { status: 500 },
        );
      }
    }

    return NextResponse.json(
      {
        status: "success",
        message: "تغییرات تیم با موفقیت انجام شد",
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
