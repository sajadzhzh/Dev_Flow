import UserCard from "@/Containers/Profile/UserCard";
import "./profile.css";
import Card from "@/Components/ui/SmallCard";
import { Box, ChartLine, SquareCheck, Zap } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="w-full flex flex-col gap-3 py-3 px-5">
      <UserCard />

      <div className="flex items-center flex-wrap gap-3">
        <Card
        color="orange"
        icon={Zap}
        title="فعالیت های این هفته"
        value={12}
        />
        <Card
        color="blue"
        icon={ChartLine}
        title="نرخ تکمیل"
        value={"91%"}
        />
        <Card
        color="green"
        icon={SquareCheck}
        title="تسک های تکمیل شده"
        value={50}
        />
        <Card
        color="purple"
        icon={Box}
        title="پروژه ها"
        value={12}
        />
      </div>
    </div>
  );
}
