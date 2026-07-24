import { ChevronDown, Filter } from "lucide-react";

export default function SelectBox({
  name,
  id,
  values,
  smallY,
  wFull,
}: {
  name: string;
  id: string;
  values: string[];
  smallY?: boolean;
  wFull?: boolean;
}) {
  return (
    <div className={`relative w-full ${wFull ? "w-full" : "xl:w-52"}`}>
      <select
        className={`
          peer
          w-full
          appearance-none
          rounded-xl
          border border-white/10
          bg-[#18181B]
          px-4
          ${smallY ? "py-2" : "py-3"}
          pr-11
          text-sm
          text-white
          outline-none
          transition
          hover:border-violet-500/50
          focus:border-violet-500
          focus:ring-2
          focus:ring-violet-500/20
          `}
        name={name}
        id={id}
      >
        {values.map((i, index) => (
          <option value={i} key={index}>
            {i}
          </option>
        ))}
      </select>

      <Filter
        size={18}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
      />

      <ChevronDown
        size={18}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 transition peer-focus:rotate-180"
      />
    </div>
  );
}
