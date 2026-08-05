import { and, eq } from "drizzle-orm";
import { db } from "../DataBase/Db";
import { teamMembers } from "../DataBase/Schema";
import { Role } from "../Constants/Role";

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

export async function getTeamMembersByTeamId(id: number) {
  const members = await db
    .select({
      id: teamMembers.id,
      user_id: teamMembers.user_id,
      team_id: teamMembers.team_id,
      role: teamMembers.role,
      joind_at: teamMembers.joined_at,
    })
    .from(teamMembers)
    .where(eq(teamMembers.team_id, id));

  return members ?? null;
}

export async function changeTeamOwner(team_id: number, newOwner: number) {
  const oldOwner = await db
    .update(teamMembers)
    .set({
      role: Role.USER,
    })
    .where(
      and(eq(teamMembers.team_id, team_id), eq(teamMembers.role, Role.OWNER)),
    );

  if (oldOwner[0].affectedRows === 0) return false;

  const setNewOwner = await db
    .update(teamMembers)
    .set({
      role: Role.OWNER,
    })
    .where(
      and(eq(teamMembers.team_id, team_id), eq(teamMembers.user_id, newOwner)),
    );

  if (setNewOwner[0].affectedRows === 0) return false;

  return true;
}
