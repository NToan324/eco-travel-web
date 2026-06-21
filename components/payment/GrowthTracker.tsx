"use client";

type Step = {
  key: string;
  label: string;
  sub: string;
};

const STEPS: Step[] = [
  { key: "checkout", label: "Thanh toán", sub: "Vé & bù đắp carbon" },
  { key: "impact", label: "Tác động", sub: "Cây bạn vừa trồng" },
  { key: "confirmed", label: "Hoàn tất", sub: "Đặt chỗ thành công" },
];

/**
 * Signature element: a growing stem that fills in as the traveller
 * moves through checkout — the same visual idea as the seedling in
 * the carbon-offset flow, used as navigation instead of generic dots.
 */
export default function GrowthTracker({
  activeIndex,
  onStepClick,
}: {
  activeIndex: number;
  onStepClick?: (index: number) => void;
}) {
  return (
    <nav aria-label="Tiến trình đặt chuyến" className="w-full">
      <div className="relative flex items-start justify-between">
        {/* stem line */}
        <div className="absolute left-0 right-0 top-[18px] h-[3px] bg-line rounded-full" />
        <div
          className="absolute left-0 top-[18px] h-[3px] bg-forest rounded-full transition-all duration-700 ease-out"
          style={{
            width:
              activeIndex === 0 ? "0%"
              : activeIndex === 1 ? "50%"
              : "100%",
          }}
        />

        {STEPS.map((step, i) => {
          const reached = i <= activeIndex;
          const isCurrent = i === activeIndex;
          return (
            <button
              key={step.key}
              type="button"
              onClick={() => onStepClick?.(i)}
              className="relative z-10 flex flex-col items-center gap-2 px-1 text-left disabled:cursor-default"
              disabled={!onStepClick}
              aria-current={isCurrent ? "step" : undefined}
            >
              <span
                className={[
                  "flex h-9 w-9 items-center justify-center rounded-full border-2 transition-colors",
                  reached ?
                    "border-forest bg-forest text-cream"
                  : "border-line bg-cream text-black",
                  isCurrent ? "ring-4 ring-forest/15" : "",
                ].join(" ")}
              >
                {/* leaf glyph */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 20c0-8 6-14 16-16-2 10-8 16-16 16Z"
                    fill={reached ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </span>
              <span className="hidden sm:flex flex-col items-center">
                <span
                  className={`font-body text-sm font-semibold ${
                    reached ? "text-ink" : "text-black"
                  }`}
                >
                  {step.label}
                </span>
                <span className="font-body text-xs text-black">{step.sub}</span>
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
