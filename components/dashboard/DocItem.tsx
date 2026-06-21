import React from "react";

export default function DocItem({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3 bg-[#f4f9f6] hover:bg-[#e8f5ef] transition-colors rounded-xl px-4 py-3 cursor-pointer group">
      <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#2D6A4F] shadow-sm shrink-0 group-hover:scale-105 transition-transform">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-800">{title}</p>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>

      <svg
        className="w-4 h-4 text-gray-300 ml-auto shrink-0 group-hover:text-[#2D6A4F] transition-colors"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </div>
  );
}
