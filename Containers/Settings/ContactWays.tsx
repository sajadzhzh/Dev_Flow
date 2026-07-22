import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

type apps = "telegram" | "instagram" | "email" | "tel";

interface ContactWaysProps {
  app: apps;
  id: string;
}

const variants = {
  telegram: {
    title: "تلگرام",
    bg: "bg-[#3b83f665]",
    hover: "hover:bg-[#3b83f665]",
    text: "text-[#3B82F6]",
    border: "border-[#3b83f665]",
    icon: FaTelegramPlane,
  },
  tel: {
    title: "تلفن",
    bg: "bg-[#22c55e2f]",
    hover: "hover:bg-[#22c55e2f]",
    text: "text-[#22C55E]",
    border: "border-[#22c55e4d]",
    icon: Phone,
  },
  email: {
    title: "ایمیل پشتیبانی",
    bg: "bg-[#8a5cf646]",
    hover: "hover:bg-[#8a5cf646]",
    text: "text-[#8B5CF6]",
    border: "border-[#8a5cf65b]",
    icon: Mail,
  },
  instagram: {
    title: "اینستاگرام",
    bg: "bg-[#ef44444d]",
    hover: "hover:bg-[#ef44444d]",
    text: "text-[#EF4444]",
    border: "border-[#ef44444d]",
    icon: FaInstagram,
  },
};

export default function ContactWays({ app, id }: ContactWaysProps) {
  const variant = variants[app];
  return (
    <div
      className={`w-full grow lg:max-w-65 flex gap-2 items-center border ${variant.border} ${variant.hover} py-1 px-2 rounded`}
    >
      <div className={`${variant.bg} ${variant.text} p-3 rounded-xl`}>
        <variant.icon size={25} />
      </div>
      <div className="flex flex-col gap-1">
        <h5 className="text-lg">{variant.title}</h5>
        <p className="text-[13px] text-gray-500 text-justify">{id}</p>
      </div>
    </div>
  );
}
