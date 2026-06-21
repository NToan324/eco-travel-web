import React from "react";
import { LuLeaf } from "react-icons/lu";
import formatMoney from "@/utils/formatMoney";

interface BadgeProps {
  icon?: React.ReactNode;
  value?: number | string;
  description?: string;
}

const Badge = ({
  icon = <LuLeaf />,
  value = 30000,
  description = "Khoản bù đắp",
}: BadgeProps = {}) => {
  return (
    <div className="w-full sm:w-56 md:w-70 h-auto md:h-44 p-4 rounded-2xl text-primary border border-gray-300 flex flex-col justify-between items-start gap-1 bg-white">
      {/* Icon */}
      <div className="bg-green-light rounded-lg w-12 h-12 p-3 flex justify-center items-center">
        {icon}
      </div>
      {/* Money */}
      <div className="font-bold text-2xl sm:text-3xl md:text-4xl">
        {typeof value === "number" ? formatMoney(value) : value}
      </div>
      <span className="text-sm text-black/70 font-semibold">{description}</span>
    </div>
  );
};

export default Badge;
