import { Search } from "lucide-react";

export default function SearchHeader() {
  return (
    <form className="flex items-center relative">
      <Search className="absolute right-2 text-gray-500" />
      <input
        type="text"
        name="search"
        className="w-full border border-gray-800 py-1 ps-9 rounded focus:border-gray-400 placeholder:text-gray-500"
        placeholder="جستجو در پروژه ها ، تسک ها و ..."
      />
    </form>
  );
}
