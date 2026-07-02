import SearchItems from "@/Components/Layout/Search";
import Button from "@/Components/ui/Button";
import SelectBox from "@/Components/ui/Select";
import Card from "@/Components/ui/SmallCard";
import { Brush, CodeXml, Plus, User, Users, UserStar } from "lucide-react";

export default function ProjectDetailsUsers() {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex flex-wrap flex-col lg:flex-row gap-3">
        <Card title="ناظر" value={1} color="orange" icon={UserStar} />
        <Card title="طراح" value={1} color="red" icon={Brush} />
        <Card title="توسعه دهنده" value={4} color="blue" icon={CodeXml} />
        <Card title="مدیر پروژه" value={2} color="green" icon={User} />
        <Card title="کل اعضا" value={8} color="purple" icon={Users} />
      </div>

      <div className="w-full flex justify-between flex-wrap flex-col lg:flex-row gap-3">
        <SelectBox
          id="filterUsers"
          name="filterUsers"
          values={["همه", "ناظر", "طراح", "توسعه دهنده", "مدیر پروژه"]}
        />

        <div className="flex flex-col lg:flex-row flex-wrap gap-3 lg:w-2/3 justify-end">
          <div className="lg:w-1/2">
            <SearchItems name="searchUsers" placeholder="جستجو در اعضا" />
          </div>
          <Button style="flex items-center justify-center bg-[#3b83f665] text-[#3B82F6] cursor-pointer hover:bg-[#3B82F6] hover:text-white rounded-xl p-2">
            <Plus />
            دعوت عضو جدید
          </Button>
        </div>
      </div>

      
    </div>
  );
}
