import UserCard from "@/Containers/Profile/UserCard";
import "./profile.css";

export default function ProfilePage() {
  return (
    <div className="w-full flex felx-col gap-3 py-3 px-5">
      <UserCard />
    </div>
  );
}
