import React from "react";

export default function TrustItem({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-start gap-3 bg-[#f4f9f6] hover:bg-[#e8f5ef] transition-colors rounded-xl px-4 py-3 cursor-pointer group">
      <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#2D6A4F] shadow-sm shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold text-gray-800">{title}</p>
        <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}
