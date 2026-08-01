import TeamInfoModal from "./InfoModal";

export default function TeamCard() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 items-center border border-gray-600 rounded-xl py-4 px-6 relative bg-[#18181b]">
      <div className="userCard-gradiant absolute w-full h-full right-0 rounded-xl z-0 hidden lg:block"></div>
      <div className="w-full flex flex-col gap-4 z-10">
        <div className="w-full flex flex-col lg:flex-row gap-4 justify-between">
          <h3 className="text-xl">تیم توسعه هم‌افزا</h3>

          <TeamInfoModal />
        </div>
        <p className="text-[13px] text-gray-400 text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
        <p className="text-[13px] text-gray-400 text-end">
          مالک : <span className="text-[15px] text-white ">Sajadzhzh</span>
        </p>
      </div>
    </div>
  );
}
