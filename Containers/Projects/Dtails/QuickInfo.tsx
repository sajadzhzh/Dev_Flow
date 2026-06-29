export default function QuickInfo(){
    return(
        <div className="w-full py-3 px-5">
            <h3 className="mb-2">اطلاعات سريع</h3>
            <div className="flex flex-col gap-1">
                <div className=" text-sm lg:text-md border border-gray-600 rounded-xl hover:-translate-y-0.5 flex justify-between items-center text-gray-500 py-3 px-5">
                    تعداد كل تسک ها
                    <p className="text-white">200</p>
                </div>
                <div className=" text-sm lg:text-md border border-gray-600 rounded-xl hover:-translate-y-0.5 flex justify-between items-center text-gray-500 py-3 px-5">
                    تسک های تکمیل شده
                    <p className="text-[#22C55E]">150</p>
                </div>
                <div className=" text-sm lg:text-md border border-gray-600 rounded-xl hover:-translate-y-0.5 flex justify-between items-center text-gray-500 py-3 px-5">
                    تسک های در حال انجام
                    <p className="text-[#3B82F6]">30</p>
                </div>
                <div className=" text-sm lg:text-md border border-gray-600 rounded-xl hover:-translate-y-0.5 flex justify-between items-center text-gray-500 py-3 px-5">
                    تسک های باقی مانده
                    <p className="text-[#F59E0B]">20</p>
                </div>
            </div>
        </div>
    )
}