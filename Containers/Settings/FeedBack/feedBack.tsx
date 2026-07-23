"use client";

import { useState } from "react";
import Modal from "@/Components/ui/Modal";
import Button from "@/Components/ui/Input/Button";
import SelectBox from "@/Components/ui/Input/Select";

export default function FeedBack() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="cursor-pointer py-2 bg-[#8a5cf660] text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6] flex items-center justify-center gap-2 text-[14px] w-full lg:w-1/6 rounded ms-auto mb-auto transition"
      >
        ثبت بازخورد
      </Button>

      <Modal open={open} onClose={() => setOpen(false)} size="lg">
        <Modal.Header>ثبت بازخورد</Modal.Header>

        <form>
          <Modal.Body>
            <label htmlFor="feedType" className="text-[13px]">
              نوع بازخورد
            </label>
            <SelectBox
              id="feedType"
              name="feedType"
              values={["پیشنهاد ویژگی", "گزارش مشکل", "نظر کلی"]}
            />

            <div className="my-4 flex flex-col gap-2">
              <label htmlFor="feedTitle" className="text-[13px]">
                موضوع
              </label>
              <input
                type="text"
                name="feedTitle"
                id="feedTitle"
                placeholder="موضوع بازخورد شما"
                className="w-full border border-gray-800 py-2 ps-4 rounded-xl focus:border-gray-400 placeholder:text-gray-500"
              />
            </div>

            <div className="my-4 flex flex-col gap-2">
              <label htmlFor="feedExplain" className="text-[13px]">
                توضیحات
              </label>
              <textarea
                rows={5}
                name="feedExplain"
                id="feedExplain"
                placeholder="توضیحات خود را وارد کنید"
                className="w-full resize-none outline-0 border border-gray-800 py-2 ps-4 rounded-xl focus:border-gray-400 placeholder:text-gray-500"
              />
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button
              onClick={() => setOpen(false)}
              className="cursor-pointer px-4 py-2 rounded bg-gray-700 hover:bg-gray-600"
            >
              انصراف
            </Button>

            <Button
              type="submit"
              className="cursor-pointer px-4 py-2 rounded bg-[#8B5CF6] hover:bg-[#7C3AED]"
            >
              ارسال
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
