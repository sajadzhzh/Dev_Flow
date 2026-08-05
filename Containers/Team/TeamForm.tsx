"use client";

import { initialTeam } from "@/Actions/team";
import Button from "@/Components/ui/Input/Button";
import { SubmitEvent, useState } from "react";
import toast from "react-hot-toast";
import SelectOwner from "./SelectOwner";

type Team = {
  id: number;
  name: string;
  description: string;
  owner_id: number;
};

type Owner = {
  id: number;
  userName: string;
  email: string;
};

export default function TeamForm({
  createTeam,
  team,
  owner,
}: {
  createTeam?: boolean;
  team?: Team;
  owner?: Owner | null;
}) {
  
  const [name, setName] = useState(team?.name ?? "");
  const [description, setDescription] = useState(team?.description ?? "");

  const request = async (e: SubmitEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("مقدار نام تیم الزامی است");
      return;
    }

    const res = await initialTeam({ name, description });

    switch (res.status) {
      case "error":
        toast.error(res.message);
        break;
      case "success":
        toast.success(res.message);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        break;
    }
  };
  return (
    <form className="w-full flex flex-col gap-2" onSubmit={(e) => request(e)}>
      <div className="flex flex-col gap-2">
        <label htmlFor="teamName" className="text-[13px] w-max">
          نام تیم
        </label>
        <input
          type="text"
          name="teamName"
          id="teamName"
          onChange={(e) => setName(e.target.value)}
          defaultValue={!createTeam ? team?.name : ""}
          className="w-full border border-gray-800 py-2 ps-4 rounded-xl focus:border-gray-400 placeholder:text-gray-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="teamDescription" className="text-[13px] w-max">
          توضیحات تیم
        </label>
        <textarea
          rows={5}
          name="teamDescription"
          id="teamDescription"
          onChange={(e) => setDescription(e.target.value)}
          defaultValue={!createTeam ? team?.description : ""}
          className="w-full border outline-0 border-gray-800 py-2 ps-4 rounded-xl focus:border-gray-400 placeholder:text-gray-500"
        />
      </div>

      {!createTeam && (
        <div className="flex flex-col gap-2">
          {team && owner && (
            <SelectOwner owner={owner?.userName} team_id={team?.id} />
          )}
        </div>
      )}

      <Button
        type="submit"
        className="flex gap-1 justify-center w-full py-2 px-4 bg-[#8B5CF6] rounded-xl cursor-pointer hover:bg-[#9a71fa]"
      >
        ثبت
      </Button>
    </form>
  );
}
