import TeamModifier from "@/Containers/Team/TeamModifier";
import "../profile/profile.css";

export default function TeamPage() {
  return (
    <div className="w-full flex flex-col gap-3 p-5">
      <TeamModifier />
    </div>
  );
}
