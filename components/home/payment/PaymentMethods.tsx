import Image from "next/image";

const paymentMethods = [
  {
    name: "MoMo",
    icon: (
      <Image
        src="/momo.png"
        alt="MoMo"
        width={20}
        height={20}
        className="w-5 h-5 object-contain"
      />
    ),
    activeClass:
      "border-pink-300 text-pink-600 bg-pink-50/10 hover:bg-pink-50/60",
  },
  {
    name: "VNPay",
    icon: (
      <Image
        src="/vnpay.png"
        alt="VNPay"
        width={48}
        height={20}
        className="w-12 h-5 object-contain"
      />
    ),
    activeClass:
      "border-blue-300 text-blue-600 bg-blue-50/10 hover:bg-blue-50/60",
  },
  {
    name: "Thẻ",
    icon: (
      <Image
        src="/card.png"
        alt="Thẻ"
        width={20}
        height={20}
        className="w-5 h-5 object-contain"
      />
    ),
    activeClass: "border-gray-800 text-gray-800 bg-gray-50 hover:bg-gray-100",
  },
];

const PaymentMethods = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {paymentMethods.map((method) => (
        <button
          key={method.name}
          className={`border rounded-xl py-2.5 text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${method.activeClass}`}
        >
          {method.icon}
          <span>{method.name}</span>
        </button>
      ))}
    </div>
  );
};

export default PaymentMethods;
