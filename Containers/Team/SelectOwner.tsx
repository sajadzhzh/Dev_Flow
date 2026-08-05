"use client";

import { teamMembers } from "@/Actions/team";
import SelectBox from "@/Components/ui/Input/Select";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type User = {
  id: number;
  userName: string;
  email: string;
};

type Owner = {
  id: number;
  userName: string;
  email: string;
};

export default function SelectOwner({
  owner,
  team_id,
  onChange,
}: {
  owner: Owner;
  team_id: number;
  onChange?: (value: string) => void;
}) {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const request = async () => {
      const res = await teamMembers(team_id);

      switch (res.status) {
        case "error":
          toast.error(res.message);
          setUsers([]);
          break;
        case "success":
          setUsers(res.data);
          break;
      }
    };
    request();
  }, []);

  return (
    <>
      <label htmlFor="teamOwner" className="text-[13px] w-max">
        مالک تیم
      </label>
      <SelectBox
        name="teamOwner"
        id="teamOwner"
        wFull
        onChange={onChange}
        values={[
          {
            label: owner.userName,
            value: owner.id.toString(),
          },

          ...users
            .filter((user) => user.id !== owner.id)
            .map((user) => ({
              label: user.userName,
              value: user.id.toString(),
            })),
        ]}
      />
    </>
  );
}
