import { CgCreditCard } from "react-icons/cg";

interface PaymentCTAButtonProps {
  offsetChecked: boolean | string;
}

export const PaymentCTAButton = ({ offsetChecked }: PaymentCTAButtonProps) => {
  return (
    <button className="w-full bg-green-800 hover:bg-green-900 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-colors text-sm">
      Thanh toán ngay
      {offsetChecked === true || offsetChecked === "true" ?
        " + Bù đắp "
      : ""}{" "}
      <CgCreditCard />
    </button>
  );
};

export const PoweredByNote = () => {
  return (
    <p className="text-center text-xs text-gray-400">
      Được vận hành bởi{" "}
      <span className="font-semibold text-gray-500">MakeSense</span>
    </p>
  );
};
