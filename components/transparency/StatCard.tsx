function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="w-full sm:flex-1 sm:min-w-35 bg-gray-50 rounded-xl px-4 py-4 flex items-center gap-3 min-w-0">
      <div className="shrink-0">{icon}</div>
      <div>
        <p className="text-lg sm:text-xl font-black text-gray-900 leading-tight">
          {value}
        </p>
        <p className="text-xs text-gray-500 mt-0.5 leading-tight">{label}</p>
      </div>
    </div>
  );
}

export default StatCard;
