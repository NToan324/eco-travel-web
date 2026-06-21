"use client";

import { useState } from "react";

export default function CarbonOffsetCard({
  amount,
  onAmountChange,
}: {
  amount: number;
  onAmountChange: (next: number) => void;
}) {
  const [enabled, setEnabled] = useState(true);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(String(amount));

  function commitDraft() {
    const parsed = Number(draft.replace(/[^\d]/g, ""));
    if (!Number.isNaN(parsed) && parsed > 0) {
      onAmountChange(parsed);
    } else {
      setDraft(String(amount));
    }
    setEditing(false);
  }

  return (
    <section className="rounded-card border border-amber/40 bg-cream p-6 shadow-card">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 20c0-8 6-14 16-16-2 10-8 16-16 16Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
          </span>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="font-body text-sm font-semibold text-ink">
                Đóng góp bù đắp carbon
              </p>
              <span className="rounded-full bg-amber-300 px-3 py-1.5 text-[11px] font-semibold text-amber">
                Được khuyến nghị
              </span>
            </div>
            <p className="font-body text-sm text-black mt-1 leading-relaxed">
              Cùng chung tay trồng cây đước tại Cần Giờ để bù đắp 100% lượng
              phát thải cho chuyến bay của bạn.
            </p>
          </div>
        </div>

        <button
          type="button"
          role="switch"
          aria-checked={enabled}
          aria-label="Bật hoặc tắt đóng góp bù đắp carbon"
          onClick={() => setEnabled((v) => !v)}
          className={[
            "relative h-6 w-11 shrink-0 rounded-full transition-colors",
            enabled ? "bg-forest" : "bg-line",
          ].join(" ")}
        >
          <span
            className={[
              "absolute top-0.5 h-5 w-5 rounded-full bg-cream shadow transition-transform",
              enabled ? "translate-x-5" : "translate-x-0.5",
            ].join(" ")}
          />
        </button>
      </div>

      {enabled && (
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-mintBg px-4 py-3">
          <span className="font-body text-sm text-black">Số tiền đóng góp</span>
          {editing ?
            <input
              autoFocus
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onBlur={commitDraft}
              onKeyDown={(e) => e.key === "Enter" && commitDraft()}
              className="w-28 rounded-md border border-line bg-cream px-2 py-1 text-right font-mono text-sm text-ink"
            />
          : <button
              type="button"
              onClick={() => {
                setDraft(String(amount));
                setEditing(true);
              }}
              className="flex items-center gap-1.5 font-mono text-sm font-semibold text-ink"
            >
              {amount.toLocaleString("vi-VN")}đ
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 20h4l11-11-4-4L4 16v4Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          }
        </div>
      )}

      <p className="mt-3 font-body text-xs text-black">
        Bạn có thể tùy chọn mức đóng góp khác hoặc bỏ qua bất cứ lúc nào.
      </p>
    </section>
  );
}
