interface UpdatedTotalProps {
  total: number;
  formatVND: (amount: number) => string;
}

const UpdatedTotal = ({ total, formatVND }: UpdatedTotalProps) => {
  return (
    <div className="flex justify-between items-center">
      <span className="font-bold text-gray-900">Phương thức thanh toán</span>
      <span className="font-bold text-green-800 text-lg">
        {formatVND(total)}
      </span>
    </div>
  );
};

export default UpdatedTotal;
