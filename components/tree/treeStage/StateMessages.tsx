interface StateMessagesProps {
  hasWatered: boolean;
  showSaved: boolean;
  canWater: boolean;
}

const StateMessages = ({
  hasWatered,
  showSaved,
  canWater,
}: StateMessagesProps) => {
  if (hasWatered && !showSaved) {
    return (
      <p className="text-sm text-green-700 font-medium animate-pulse">
        Đang lưu tiến trình cây của bạn... 🌱
      </p>
    );
  }

  if (!canWater && !hasWatered) {
    return (
      <p className="text-xs text-gray-400 italic">
        Đã hết bình tưới nước. Hãy tiếp tục đóng góp vào lần đặt chỗ tiếp theo
        nhé!
      </p>
    );
  }

  return null;
};

export default StateMessages;
