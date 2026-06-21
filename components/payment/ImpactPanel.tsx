function Mangrove({ delay = 0 }: { delay?: number }) {
  return (
    <svg
      width="96"
      height="120"
      viewBox="0 0 96 120"
      fill="none"
      style={{ animationDelay: `${delay}ms` }}
      className="animate-[sway_4s_ease-in-out_infinite]"
    >
      <ellipse cx="48" cy="104" rx="34" ry="8" fill="#BFE0D2" opacity="0.6" />
      <path
        d="M48 100V52M48 70 30 96M48 70 66 96M48 82 36 100M48 82 60 100"
        stroke="#5C4632"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <g fill="#2E6B4F">
        <circle cx="48" cy="30" r="22" />
        <circle cx="28" cy="42" r="14" />
        <circle cx="68" cy="42" r="14" />
      </g>
      <g fill="#3E8463">
        <circle cx="48" cy="38" r="14" />
      </g>
    </svg>
  );
}

export default function ImpactPanel({
  treeCount,
  location,
}: {
  treeCount: number;
  location: string;
}) {
  return (
    <section className="rounded-card bg-cream p-8 text-center shadow-card">
      <h2 className="font-display text-2xl font-semibold text-ink">
        Cảm ơn bạn!
      </h2>
      <p className="font-body text-sm text-black mt-2">
        Bạn vừa đóng góp để bù đắp carbon cho chuyến đi của mình.
      </p>

      <div className="mt-6 rounded-2xl bg-mintBg px-4 py-8">
        <p className="font-body text-sm font-medium text-ink mb-6">
          Tác động của bạn
        </p>
        <div className="flex items-end justify-center gap-6">
          <Mangrove delay={0} />
          <Mangrove delay={600} />
        </div>
        <div className="space-y-2">
          <p className="font-body text-sm text-black mt-6">Bạn đã giúp trồng</p>
          <p className="font-display text-xl font-semibold text-forest">
            {treeCount} cây đước
          </p>
          <p className="font-body text-sm text-black">tại {location}</p>
        </div>
      </div>

      <a
        href="#"
        className="mt-5 inline-flex items-center gap-1 font-body text-sm font-medium text-forest underline-offset-4 hover:underline"
      >
        Tìm hiểu thêm về dự án
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </a>
    </section>
  );
}
