export default function ProgressLine({percent}: {percent:number}) {
  return (
    <>
      <p>{percent}%</p>
      <div className="ms-auto border-b-4 rounded-xl border-gray-700 w-full relative">
        <div className={`border-b-4 border-[#3B82F6] rounded-xl w-[${percent}%] absolute`}></div>
      </div>
    </>
  );
}
