function TxRow({
  icon,
  title,
  date,
  contribution,
  matching,
  trees,
  co2,
}: {
  icon: React.ReactNode;
  title: string;
  date: string;
  contribution: string;
  matching: string;
  trees: string;
  co2: string;
}) {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0">
      <div className="w-10 h-10 rounded-xl bg-[#e8f5ef] text-[#2D6A4F] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="min-w-0 flex-2">
        <p className="text-sm font-semibold text-gray-800 truncate">{title}</p>
        <p className="text-xs text-gray-400 mt-0.5">{date}</p>
      </div>
      <div className="flex-1 hidden sm:block">
        <p className="text-xs text-gray-400">Bạn đóng góp</p>
        <p className="text-sm font-bold text-gray-800">{contribution}</p>
      </div>
      <div className="flex-1 hidden sm:block">
        <p className="text-xs text-gray-400">DN đối ứng</p>
        <p className="text-sm font-bold text-gray-800">{matching}</p>
      </div>
      <div className="flex-1 text-right hidden md:block">
        <p className="text-xs text-gray-400">~ {trees}</p>
        <p className="text-xs text-gray-400">~ {co2}</p>
      </div>
      <button className="text-xs text-[#2D6A4F] font-semibold whitespace-nowrap hover:underline shrink-0">
        Xem chi tiết &gt;
      </button>
    </div>
  );
}

export default TxRow;
