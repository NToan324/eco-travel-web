import { BsPaintBucket } from "react-icons/bs";

const WateringInfo = () => {
  return (
    <div>
      <p className="text-sm text-gray-600 leading-relaxed">
        Cây của bạn cần{" "}
        <span className="font-semibold text-gray-800">500 giọt nước</span> trước
        khi đóng góp vào việc trồng một cây thật tại Rừng ngập mặn Cần Giờ.
      </p>

      <div className="bg-white border border-gray-100 rounded-xl px-4 py-3 flex items-start gap-3 mt-4">
        <div className="w-10 h-10 rounded-lg bg-blue-light flex items-center justify-center text-xl shrink-0">
          <BsPaintBucket className="text-[#0a78a8]" />
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          <span className="font-semibold">
            Đóng góp 30.000 VNĐ = 1 bình nước lớn = 50 giọt nước.
          </span>{" "}
          Nhấn để tưới, giúp cây phát triển và lưu lại tiến trình vào tài khoản
          của khách du lịch.
        </p>
      </div>
    </div>
  );
};

export default WateringInfo;
