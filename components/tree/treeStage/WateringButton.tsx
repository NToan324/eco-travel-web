interface WateringButtonProps {
  canWater: boolean;
  isWatering: boolean;
  isMaxed: boolean;
  onWater: () => void;
}

const WateringButton = ({
  canWater,
  isWatering,
  isMaxed,
  onWater,
}: WateringButtonProps) => {
  return (
    <button
      onClick={onWater}
      disabled={!canWater || isWatering || isMaxed}
      className={`w-full flex items-center justify-center gap-3 font-bold py-3.5 rounded-xl transition-all duration-200 shadow-md active:scale-95
        ${
          !canWater || isWatering || isMaxed ?
            "bg-gray-400 opacity-60 cursor-not-allowed"
          : "bg-[#1B4332] hover:bg-[#2D6A4F] text-white"
        }
      `}
    >
      <span>
        {isMaxed ?
          "Cây đã trưởng thành"
        : isWatering ?
          "Đang tưới nước..."
        : "Tưới nước (50 giọt)"}
      </span>
    </button>
  );
};

export default WateringButton;
