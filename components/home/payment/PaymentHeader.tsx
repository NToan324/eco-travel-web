interface PaymentHeaderProps {
  tripTitle: string;
  tripSubtotal: number;
  formatVND: (amount: number) => string;
}

const PaymentHeader = ({
  tripTitle,
  tripSubtotal,
  formatVND,
}: PaymentHeaderProps) => {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
        Thanh toán
      </p>
      <h1 className="text-xl font-bold text-gray-900 leading-snug">
        {tripTitle}
      </h1>
      <div className="flex justify-between items-center mt-3">
        <span className="text-gray-500 text-sm">Tạm tính chuyến đi</span>
        <span className="font-bold text-gray-900 text-sm">
          {formatVND(tripSubtotal)}
        </span>
      </div>
    </div>
  );
};

export default PaymentHeader;
