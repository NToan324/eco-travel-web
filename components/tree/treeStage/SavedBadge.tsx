import { HiOutlineCheckCircle } from "react-icons/hi";

const SavedBadge = () => {
  return (
    <div className="flex items-center gap-2 bg-[#1B4332] text-white text-sm font-semibold py-3 px-5 rounded-full w-fit">
      <HiOutlineCheckCircle size={24} />
      Tiến trình cây được lưu để đặt chỗ trong tương lai
    </div>
  );
};

export default SavedBadge;
