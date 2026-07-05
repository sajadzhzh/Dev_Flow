import SelectBox from "@/Components/ui/Select";
import Card from "@/Components/ui/SmallCard";
import TaskRow from "@/Containers/Projects/Details/Tasks/TaskItem";
import {
  Calendar,
  Clock,
  ClockAlert,
  Gavel,
  LayoutGrid,
  SquareCheck,
} from "lucide-react";

export default function TasksPage() {
  return (
    <div className="w-full flex flex-col gap-3 p-5">
      <div className="w-full flex flex-col lg:flex-row gap-3">
        <div className="flex items-center justify-end gap-2 w-full lg:w-1/2 h-max order-1 lg:order-2">
          <div className="text-sm m-0">Dashboard / Tasks</div>
          <LayoutGrid className="text-blue-700" />
        </div>
        <div className="flex flex-col justify-center gap-2 w-full lg:w-1/2 h-max order-2 lg:order-1">
          <h2 className="text-2xl m-0">تسک‌های من</h2>
          <p className="text-sm text-gray-400">
            همه تسک‌هایی که به شما اختصاص داده شده است
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-3 flex-wrap">
        <Card title="همه تسک‌ها" value={20} color="blue" icon={Clock} />
        <Card title="امروز" value={20} color="orange" icon={Calendar} />
        <Card title="درحال انجام" value={20} color="purple" icon={Gavel} />
        <Card title="تکمیل شده" value={20} color="green" icon={SquareCheck} />
        <Card title="عقب مانده" value={20} color="red" icon={ClockAlert} />
      </div>

      <div className="w-full flex flex-col justify-between flex-wrap lg:flex-row gap-3">
        <SelectBox
          id="tasksTimeSort"
          name="tasksTimeSort"
          values={["جدیدترین", "قدیمی ترین"]}
        />
        <SelectBox
          id="tasksEndSort"
          name="tasksEndSort"
          values={["همه موعد‌های تحویل", "نزدیک ترین", "دور ترین"]}
        />
        <SelectBox
          id="tasksPrioritySort"
          name="tasksPrioritySort"
          values={["همه اولویت ها", "حیاتی", "بالا", "متوسط", "پائین"]}
        />
        <SelectBox
          id="tasksStatusSort"
          name="tasksStatusSort"
          values={[
            "همه وضعیت‌ها",
            "در حال انجام",
            "در انتظار بررسی",
            "تکمیل شده",
            "عقب مانده",
          ]}
        />
        <SelectBox
          id="tasksProjectSort"
          name="tasksProjectSort"
          values={["همه پروژه ها", "فلان", "بیسار", "بهمان"]}
        />
      </div>

      <div className="w-full xl:bg-[#18181B] xl:border border-gray-600 rounded-xl">
        <div className="py-3 px-5 hidden xl:flex border-b border-gray-600">
          <p className="text-gray-500 w-3/9">تسک</p>
          <p className="text-gray-500 text-center w-2/9">پروژه</p>
          <p className="text-gray-500 text-center w-1/9">اولویت</p>
          <p className="text-gray-500 text-center w-1/9">موعد تحویل</p>
          <p className="text-gray-500 text-center w-1/9">وضعیت</p>
          <p className="text-gray-500 text-center w-1/9">عملیات</p>
        </div>
        <div className="flex flex-col gap-2 p-2 h-115 overflow-y-scroll scrollbar-none z-0">
          <TaskRow
            title={"تحقیق و تحلیل نیازمندی ها"}
            project="هم افزا"
            myTasks={true}
            owner="sajadzhzh"
            date="1405/05/05"
            priority="حیاتی"
            Status="inProccess"
          />
        </div>
      </div>
    </div>
  );
}
