import { eq } from "drizzle-orm";
import { db } from "../DataBase/Db";
import { teamMembers, teams } from "../DataBase/Schema";
import { Role } from "../Constants/Role";

export async function InitialTeam(data: {
  name: string;
  description?: string;
  owner_id: number;
}) {
  return await db.transaction(async (tx) => {
    await tx.insert(teams).values(data);

    const [team] = await tx
      .select({
        id: teams.id,
      })
      .from(teams)
      .where(eq(teams.owner_id, data.owner_id));

    if (!team) {
      return null;
    }

    await tx.insert(teamMembers).values({
      team_id: team.id,
      user_id: data.owner_id,
      role: Role.OWNER,
    });

    return {
      teamId: team.id,
    };
  });
}

export async function UpdateTeam(data: {
  id: number;
  name: string;
  description?: string;
  owner: number;
}) {
  console.log("update");

  const team = await db
    .update(teams)
    .set({
      name: data.name,
      description: data.description,
      owner_id: data.owner,
      updated_at: new Date(),
    })
    .where(eq(teams.id, data.id));

  if (team[0].affectedRows === 0) return false;

  return true;
}

export async function getTeamByTeamName(name: string) {
  const [team] = await db
    .select({
      id: teams.id,
      name: teams.name,
      description: teams.description,
      owner_id: teams.owner_id,
    })
    .from(teams)
    .where(eq(teams.name, name));

  return team ?? null;
}

export async function getTeamByTeamId(id: number) {
  const [team] = await db
    .select({
      id: teams.id,
      name: teams.name,
      description: teams.description,
      owner_id: teams.owner_id,
    })
    .from(teams)
    .where(eq(teams.id, id));

  return team ?? null;
}
