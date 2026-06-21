type LineItem = {
  label: string;
  amount: number;
};

function formatVND(amount: number) {
  return amount.toLocaleString("vi-VN") + "đ";
}

export default function PaymentBreakdown({
  items,
  total,
}: {
  items: LineItem[];
  total: number;
}) {
  return (
    <section className="rounded-card bg-cream p-6 shadow-card">
      <h2 className="font-display text-lg font-semibold text-ink mb-4">
        Chi tiết thanh toán
      </h2>
      <dl className="space-y-3">
        {items.map((item) => (
          <div key={item.label} className="flex items-baseline justify-between">
            <dt className="font-body text-sm text-black">{item.label}</dt>
            <dd className="font-mono text-sm text-ink">
              {formatVND(item.amount)}
            </dd>
          </div>
        ))}
      </dl>
      <div className="hairline my-4" />
      <div className="flex items-baseline justify-between">
        <span className="font-body text-sm font-semibold text-ink">
          Tổng cộng
        </span>
        <span className="font-mono text-lg font-semibold text-forest">
          {formatVND(total)}
        </span>
      </div>
    </section>
  );
}
