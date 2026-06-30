import { Search } from "lucide-react";

export default function SearchItems({
  name,
  placeholder,
}: {
  name: string;
  placeholder: string;
}) {
  return (
    <form className="flex items-center relative w-full">
      <Search className="absolute right-2 text-gray-500" />
      <input
        type="text"
        name={name}
        className="w-full border border-gray-800 py-3 ps-9 rounded-xl focus:border-gray-400 placeholder:text-gray-500"
        placeholder={placeholder}
      />
    </form>
  );
}
