import { GiFruitTree } from "react-icons/gi";
import { IoIosWarning } from "react-icons/io";
import { TbCircleCheck } from "react-icons/tb";

interface EnvironmentalImpactCardProps {
  offsetAmount: number;
  showTooltip: boolean;
  onShowTooltip: () => void;
  onHideTooltip: () => void;
  formatVND: (amount: number) => string;
}

const EnvironmentalImpactCard = ({
  offsetAmount,
  showTooltip,
  onShowTooltip,
  onHideTooltip,
  formatVND,
}: EnvironmentalImpactCardProps) => {
  return (
    <div className="bg-green-light border border-amber-200 rounded-xl p-4 space-y-3 relative">
      <div className="flex items-start gap-3">
        <div>
          <p className="font-bold text-amber-800 text-sm flex items-center gap-1">
            <IoIosWarning className="text-amber-500" /> Tác động môi trường từ
            chuyến đi của bạn
          </p>
          <p className="text-sm font-semibold text-gray-800 mt-0.5">
            Chuyến đi này ước tính tạo ra 45 kg khí thải CO<sub>2</sub>.
          </p>
        </div>
      </div>

      <div className="text-sm text-gray-600 leading-relaxed relative">
        <span>
          Nếu không được đền bù, lượng khí thải này góp phần trực tiếp vào suy
          thoái môi trường và mất hệ sinh thái. Thêm{" "}
          <span className="font-semibold text-gray-800">
            {formatVND(offsetAmount)}
          </span>{" "}
          để bù đắp toàn bộ chuyến đi này thông qua{" "}
        </span>
        <button
          className="relative inline-block"
          onMouseEnter={onShowTooltip}
          onMouseLeave={onHideTooltip}
          onFocus={onShowTooltip}
          onBlur={onHideTooltip}
          aria-describedby="tooltip-desc"
        >
          <span className="underline decoration-dotted cursor-help text-gray-800 font-medium">
            Quỹ Phục hồi Rừng ngập mặn Cần Giờ
          </span>

          {showTooltip && (
            <div
              id="tooltip-desc"
              role="tooltip"
              className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 bg-gray-800 text-white text-xs rounded-xl px-4 py-3 leading-relaxed text-center shadow-xl z-10"
            >
              Nếu không được đền bù, lượng khí thải này góp phần trực tiếp vào
              suy thoái môi trường và mất hệ sinh thái. Thêm 30.000 VNĐ để bù
              đắp toàn bộ chuyến đi này thông qua Quỹ Phục hồi Rừng ngập mặn Cần
              Giờ.
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
            </div>
          )}
        </button>
        <span>.</span>
      </div>

      <div className="bg-white border border-amber-200 rounded-lg px-4 py-2.5 flex items-center gap-2">
        <TbCircleCheck size={36} className="text-green-800" />
        <p className="text-xs text-gray-600">
          <span className="font-semibold">
            Chương trình doanh nghiệp đối ứng:
          </span>{" "}
          với mỗi 30.000 VNĐ bạn đóng góp, chúng tôi sẽ quyên góp thêm 30.000
          VNĐ.
        </p>
      </div>
    </div>
  );
};

export default EnvironmentalImpactCard;
