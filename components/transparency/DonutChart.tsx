function DonutChart() {
  const r = 70;
  const cx = 90;
  const cy = 90;
  const stroke = 28;
  const circ = 2 * Math.PI * r;

  const segments = [
    { pct: 0.5, color: "#2D6A4F", offset: 0 },
    { pct: 0.5, color: "#95D5B2", offset: 0.5 },
  ];

  return (
    <div className="relative flex items-center justify-center">
      <svg width="180" height="180" viewBox="0 0 180 180">
        {segments.map((seg, i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={seg.color}
            strokeWidth={stroke}
            strokeDasharray={`${seg.pct * circ} ${circ}`}
            strokeDashoffset={-seg.offset * circ}
            transform={`rotate(-90 ${cx} ${cy})`}
          />
        ))}
        {/* Inner disbursed arc */}
        <circle
          cx={cx}
          cy={cy}
          r={r - stroke - 2}
          fill="none"
          stroke="#74C69D"
          strokeWidth={8}
          strokeDasharray={`${0.8 * 2 * Math.PI * (r - stroke - 2)} ${2 * Math.PI * (r - stroke - 2)}`}
          strokeDashoffset={0}
          transform={`rotate(-90 ${cx} ${cy})`}
          opacity={0.5}
        />
      </svg>
      <div className="absolute text-center">
        <p className="text-xs text-gray-500 font-medium">Tổng quỹ</p>
        <p className="text-lg font-black text-[#1B4332] leading-tight">
          249.600.000
        </p>
        <p className="text-xs font-bold text-[#1B4332]">VNĐ</p>
      </div>
    </div>
  );
}

export default DonutChart;
