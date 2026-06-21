import { SlLocationPin } from "react-icons/sl";

const Banner = () => {
  return (
    <div className="w-fit flex justify-between items-center font-semibold text-sm gap-2 border rounded-full p-3 border-gray-300 text-primary">
      <SlLocationPin strokeWidth={2.5} />
      <p className="flex items-center gap-1 whitespace-nowrap">
        Chuyến đi Hồ Chí Minh - Hà Nội
        <span>•</span>
        45 kg CO₂
      </p>
    </div>
  );
};

export default Banner;
