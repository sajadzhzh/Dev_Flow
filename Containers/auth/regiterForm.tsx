"use client";

import { register } from "@/Actions/auth";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const [state, formAction, pending] = useActionState(register, null);

  useEffect(() => {    
    switch (state?.status) {
      case "error":        
        toast.error(state.message);
        break;
      case "success":
        toast.success(state.message);
        break;
    }
  }, [state]);

  return (
    <form action={formAction}>
      <div className="mb-2 flex flex-col gap-1 focus-within:text-cyan-500">
        <label htmlFor="name">نام کاربری</label>
        <input type="text" name="name" className="border rounded p-2 py-1" />
      </div>
      <div className="mb-2 flex flex-col gap-1 focus-within:text-cyan-500">
        <label htmlFor="email">ایمیل</label>
        <input type="email" name="email" className="border rounded p-2 py-1" />
      </div>
      <div className="mb-2 flex flex-col gap-1 focus-within:text-cyan-500">
        <label htmlFor="password">رمز عبور</label>
        <input
          type="password"
          name="password"
          className="border rounded p-2 py-1"
        />
      </div>
      <div className="mb-2 flex flex-col gap-1 focus-within:text-cyan-500">
        <label htmlFor="passwordCheck">تکرار رمز عبور</label>
        <input
          type="password"
          name="passwordCheck"
          className="border rounded p-2 py-1"
        />
      </div>
      <button
        className="w-full py-1 bg-black/25 cursor-pointer rounded hover:bg-black/75"
        disabled={pending}
      >
        ثبت نام
      </button>
    </form>
  );
}
