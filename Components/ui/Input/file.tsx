import { Paperclip } from "lucide-react";

export default function InputFile() {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[13px]">پیوست فایل</label>

      <label
        htmlFor="attachments"
        className="group flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-gray-600 bg-[#18181B] py-8 transition-all hover:border-[#3B82F6] hover:bg-[#202024]"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3b83f633] text-[#3B82F6] group-hover:scale-105 transition">
          <Paperclip className="size-6" />
        </div>

        <div className="text-center">
          <p className="font-medium">فایل را اینجا رها کنید</p>

          <p className="mt-1 text-sm text-gray-500">
            یا برای انتخاب فایل کلیک کنید
          </p>

          <p className="mt-2 text-xs text-gray-600">
            PNG, JPG, PDF, ZIP تا ۱۰ مگابایت
          </p>
        </div>

        <input id="attachments" name="attachments" type="file" multiple className="hidden" />
      </label>
    </div>
  );
}
