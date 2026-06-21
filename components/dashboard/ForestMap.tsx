"use client";

import { useState } from "react";

export default function ForestMap() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div
      className="relative w-full h-64 rounded-xl overflow-hidden bg-linear-to-br from-[#2D6A4F] via-[#40916C] to-[#52B788] cursor-pointer"
      onClick={() => setShowPopup((v) => !v)}
      style={{
        backgroundImage: "url('/forest-2.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,.05) 30px, rgba(255,255,255,.05) 31px),
                            repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,.05) 40px, rgba(255,255,255,.05) 41px)`,
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/20 blur-2xl" />

      {[
        { top: "38%", left: "42%" },
        { top: "52%", left: "55%" },
        { top: "45%", left: "63%" },
        { top: "30%", left: "58%" },
      ].map((pos, i) => (
        <div key={i} className="absolute" style={pos}>
          <div className="w-3 h-3 rounded-full bg-white/90 shadow-lg animate-pulse" />
          <div className="absolute inset-0 w-3 h-3 rounded-full bg-white/40 scale-150 animate-ping" />
        </div>
      ))}

      {showPopup && (
        <div className="absolute bottom-4 left-4 bg-white/30 border border-white/50 rounded-xl shadow-xl px-4 py-3 max-w-55">
          <p className="font-bold text-white text-sm">Cây #1245</p>
          <p className="text-white text-xs mt-0.5 leading-relaxed">
            Loài: Cây ngập mặn • Trồng ngày 20/06/2026 • Tài trợ bởi Nguyễn Minh
            Anh
          </p>
        </div>
      )}

      <p className="absolute top-4 right-4 text-white text-xs">
        Nhấn để xem thông tin
      </p>
    </div>
  );
}
