export default function CheckListItem({title, name}:{title: string; name: string;}) {
  return (
    <div className="flex flex-col gap-1 py-1 px-3 border border-gray-600 rounded-xl">
      <label
        htmlFor={name}
        className="flex items-center gap-1 justify-between  bg-[#18181B] cursor-pointer transition-colors"
      >
        <span className="text-[13px] text-gray-300">
          {title}
        </span>

        <div className="relative">
          <input
            id={name}
            name={name}
            type="checkbox"
            className="peer sr-only"
          />

          <div className="h-6 w-6 rounded-md border-2 border-gray-500 transition-all peer-checked:border-[#3B82F6] peer-checked:bg-[#3B82F6]"></div>

          <svg
            className="pointer-events-none absolute left-1 top-1 hidden h-4 w-4 text-white peer-checked:block"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </label>
    </div>
  );
}
