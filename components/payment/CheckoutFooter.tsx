import formatMoney from "@/utils/formatMoney";
import { Button } from "../ui/button";

export default function CheckoutFooter({
  total,
  ctaLabel,
  onSubmit,
}: {
  total: number;
  ctaLabel: string;
  onSubmit: () => void;
}) {
  return (
    <div className="sticky bottom-0 left-0 right-0 border-t border-line bg-primary backdrop-blur px-6 py-4">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="font-body text-xs text-white">Tổng thanh toán</p>
          <p className="font-mono text-white text-lg font-semibold text-forest">
            {formatMoney(total)}
          </p>
        </div>
        <Button
          variant="default"
          type="button"
          onClick={onSubmit}
          className="sm:w-52 w-full bg-white text-black h-10 hover:bg-gray-100 font-bold py-3 px-5 rounded-xl transition-colors whitespace-nowrap"
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
