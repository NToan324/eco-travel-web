export default function BarChart() {
  const bars = [
    { label: "T1", height: 45 },
    { label: "T2", height: 58 },
    { label: "T3", height: 72 },
    { label: "T4", height: 65 },
    { label: "T5", height: 80 },
    { label: "T6", height: 100 },
  ];

  return (
    <div className="flex items-end gap-3 h-28 relative">
      {bars.map((bar) => (
        <div
          key={bar.label}
          className="flex flex-col items-center flex-1 h-full justify-end"
        >
          <div
            className="w-full rounded-t-2xl bg-linear-to-t from-[#52B788] to-[#95D5B2]"
            style={{
              height: `${bar.height}%`,
              minHeight: "4px",
            }}
          />
          <span className="text-white/50 text-xs mt-1">{bar.label}</span>
        </div>
      ))}
    </div>
  );
}
