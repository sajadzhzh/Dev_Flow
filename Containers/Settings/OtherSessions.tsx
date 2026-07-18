interface SessionProps {
  app: string;
  platform: string;
  device: string;
  lastSeen: string;
}

export default function OtherSessions({
  app,
  platform,
  device,
  lastSeen,
}: SessionProps) {
  return (
    <div className="w-full flex justify-between items-center py-2 px-4 border border-gray-600 rounded-xl hover:-translate-y-0.5">
      <h5>
        {app}
        <span className="mx-2">در</span>
        {platform}
      </h5>

      <p className="bg-[#22c55e4d] text-[#22C55E] p-1 rounded text-[13px]">
        {device}
      </p>

      <p className="text-gray-500 rounded text-[13px]">{lastSeen}</p>
    </div>
  );
}
