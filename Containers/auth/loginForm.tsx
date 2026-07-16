"use client";

import { login } from "@/Actions/auth";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    switch (state?.status) {
      case "error":
        toast.error(state.message);
        break;
      case "success":
        toast.success(state.message);
        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
        break;
    }
  }, [state]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!email || !password) {
      e.preventDefault();
      toast.error("تمام بخش ها الزامی هستند!");
      return;
    }
  };

  return (
    <form action={formAction} onSubmit={handleSubmit}>
      <div className="mb-2 flex flex-col gap-1 focus-within:text-cyan-500">
        <label htmlFor="email">ایمیل</label>
        <input
          type="email"
          name="email"
          className="border rounded p-2 py-1"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-2 flex flex-col gap-1 focus-within:text-cyan-500">
        <label htmlFor="password">رمز عبور</label>
        <input
          type="password"
          name="password"
          className="border rounded p-2 py-1"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="w-full py-1 bg-black/25 cursor-pointer rounded hover:bg-black/75"
        disabled={pending}
      >
        ورود
      </button>
    </form>
  );
}
