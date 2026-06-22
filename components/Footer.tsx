import React from "react";

export default function Footer() {
  return (
    <footer className="relative w-full mt-auto border-t bg-linear-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        {/* decorative line */}
        <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded-full opacity-70" />

        {/* title */}
        <p className="text-sm md:text-base text-gray-700 leading-relaxed space-y-4">
          <span className="font-semibold text-gray-900">
            Sản phẩm NCKHSV - Nhóm 13
          </span>
          <br />
          <span className="text-gray-500">GVHD: TS Nguyễn Minh Huân</span>
        </p>

        {/* subtle copyright */}
        <p className="mt-1 text-xs text-gray-400">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}
