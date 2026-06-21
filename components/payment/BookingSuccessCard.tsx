type DonationInfo = {
  amount: number;
  projectType: string;
  treesPlanted: number;
  co2Offset: string;
};

export default function BookingSuccessCard({
  donation,
}: {
  donation: DonationInfo;
}) {
  return (
    <section className="rounded-card bg-cream p-6 shadow-card">
      <div className="flex items-start gap-3 rounded-2xl bg-mintBg px-4 py-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-cream">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12l5 5 9-9"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <div>
          <p className="font-display text-base font-semibold text-ink">
            Đặt chỗ thành công!
          </p>
          <p className="font-body text-sm text-black mt-0.5">
            Cảm ơn bạn đã đồng hành vì một hành trình xanh.
          </p>
        </div>
      </div>

      <h3 className="font-body text-sm font-semibold text-ink mt-6 mb-3">
        Thông tin đóng góp
      </h3>
      <dl className="space-y-3">
        <Row
          label="Số tiền đóng góp"
          value={`${donation.amount.toLocaleString("vi-VN")}đ`}
        />
        <Row label="Loại dự án" value={donation.projectType} />
        <Row
          label="Số cây đã trồng"
          value={`${donation.treesPlanted} cây đước`}
        />
        <Row label="Lượng CO₂ bù đắp" value={donation.co2Offset} />
      </dl>

      <div className="hairline my-5" />

      <h3 className="font-body text-sm font-semibold text-ink mb-3">
        Huy hiệu sinh thái của bạn
      </h3>
      <div className="flex items-center gap-3 rounded-2xl border border-amber/30 bg-amber/5 px-4 py-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2 9.5 8.5 3 9l5 4.5L6.5 20 12 16.5 17.5 20 16 13.5l5-4.5-6.5-.5L12 2Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div>
          <p className="font-body text-sm font-semibold text-ink">
            Sổ giờ xanh
          </p>
          <p className="font-body text-xs text-black">
            Bạn vừa nhận được huy hiệu mới!
          </p>
        </div>
      </div>

      <button
        type="button"
        className="mt-4 w-full rounded-full border border-line bg-cream py-2.5 font-body text-sm font-medium text-ink hover:bg-mintBg"
      >
        Xem bộ sưu tập huy hiệu
      </button>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between">
      <dt className="font-body text-sm text-black">{label}</dt>
      <dd className="font-mono text-sm text-ink text-right">{value}</dd>
    </div>
  );
}
