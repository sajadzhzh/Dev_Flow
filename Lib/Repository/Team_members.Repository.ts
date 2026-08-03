import { eq } from "drizzle-orm";
import { db } from "../DataBase/Db";
import { teamMembers } from "../DataBase/Schema";

export async function getTeamMembersByUserId(id: number) {
  const [team] = await db
    .select({
      id: teamMembers.id,
      user_id: teamMembers.user_id,
      team_id: teamMembers.team_id,
      role: teamMembers.role,
      joind_at: teamMembers.joined_at,
    })
    .from(teamMembers)
    .where(eq(teamMembers.user_id, id));

  return team ?? null;
}