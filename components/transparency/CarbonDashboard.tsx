"use client";

import { useState } from "react";
import DonutChart from "./DonutChart";
import { IconTree, IconCO2, IconPeople, IconPlane, IconHotel } from "./Icon";
import PlantingProgress from "./PlantingProgress";
import StatCard from "./StatCard";
import TxRow from "./TxRow";
import Image from "next/image";

export default function CarbonDashboard() {
  const [showAll, setShowAll] = useState(false);

  const now = new Date();
  const updateTime = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")} – ${now.getDate().toString().padStart(2, "0")}/${(now.getMonth() + 1).toString().padStart(2, "0")}/${now.getFullYear()}`;

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <div className="text-center max-w-2xl mb-12 w-full mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-black text-[#1B4332] leading-tight">
          BẢNG ĐIỀU KHIỂN MINH BẠCH
        </h1>
        <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
          Theo dõi dòng tiền – Đo lường tác động – Cập nhật theo thời gian thực
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6 space-y-5">
        {/* Sub-header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="font-bold text-gray-800 text-sm">
            Bảng điều khiển Quỹ Bù trừ Carbon – Trồng rừng Cần Giờ
          </p>
          <p className="text-xs text-gray-400">Cập nhật lúc: {updateTime}</p>
        </div>

        {/* Main grid */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Left column */}
          <div className="flex-[1.3] space-y-5">
            {/* Impact Overview */}
            <div className="bg-white rounded-2xl shadow-sm p-5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                Tổng quan tác động
              </p>
              <div className="flex gap-3 flex-wrap">
                <StatCard
                  icon={<IconTree />}
                  value="1.248"
                  label="cây đã được trồng"
                />
                <StatCard
                  icon={<IconCO2 />}
                  value="24.960 kg"
                  label="CO₂ đã được hấp thụ"
                />
                <StatCard
                  icon={<IconPeople />}
                  value="632"
                  label="khách hàng đã tham gia"
                />
              </div>
            </div>

            {/* Fund Flow */}
            <div className="bg-white rounded-2xl shadow-sm p-5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Dòng tiền quỹ đối ứng
              </p>
              <p className="text-xs text-gray-400 mb-4">
                (Tính đến 20/05/2024)
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <DonutChart />
                <div className="space-y-3 flex-1">
                  {[
                    {
                      color: "#2D6A4F",
                      label: "Khách hàng đóng góp",
                      value: "124.800.000 VNĐ (50%)",
                    },
                    {
                      color: "#95D5B2",
                      label: "Doanh nghiệp đối ứng",
                      value: "124.800.000 VNĐ (50%)",
                    },
                    {
                      color: "#74C69D",
                      label: "Đã giải ngân trồng rừng",
                      value: "198.720.000 VNĐ (80%)",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-2">
                      <div
                        className="w-3 h-3 rounded-full mt-0.5 shrink-0"
                        style={{ background: item.color }}
                      />
                      <div>
                        <p className="text-xs font-semibold text-gray-700">
                          {item.label}
                        </p>
                        <p className="text-xs text-gray-500">{item.value}</p>
                      </div>
                    </div>
                  ))}
                  <p className="text-xs text-gray-400 italic pt-1">
                    Chúng tôi cam kết đối ứng 100% mọi đóng góp của khách hàng.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex-1 space-y-5">
            {/* Planting Progress */}
            <div className="bg-white rounded-2xl shadow-sm p-5 overflow-hidden">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                Tiến độ trồng rừng
              </p>
              {/* Forest image placeholder */}
              <div
                className="w-full h-36 rounded-xl bg-linear-to-br from-[#40916C] via-[#52B788] to-[#74C69D] flex items-center justify-center overflow-hidden relative"
                style={{
                  backgroundImage: "url('/forest.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <PlantingProgress />
              <p className="text-xs text-gray-400 mt-3 text-center">
                Cập nhật từ dự án trồng rừng ngập mặn Cần Giờ
              </p>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl shadow-sm p-5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                Vị trí dự án
              </p>
              <div className="flex items-center gap-3">
                <div className="w-16 h-14 rounded-xl flex items-center justify-center shrink-0">
                  <Image
                    src="/map.png"
                    alt="Map"
                    width={64}
                    height={56}
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-gray-800">
                    Khu dự trữ sinh quyển Cần Giờ
                  </p>
                  <p className="text-xs text-gray-500">TP. Hồ Chí Minh</p>
                  <button className="text-xs text-[#2D6A4F] font-semibold hover:underline mt-1">
                    Xem vị trí trên bản đồ &gt;
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                Chứng nhận & kiểm chứng
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                {/* VCS */}
                <div className="flex items-center gap-2">
                  <div className="bg-[#1B4332] text-white text-xs font-black px-2 py-2 rounded">
                    VCS
                  </div>
                  <div className="text-[9px] text-gray-500 leading-tight max-w-15">
                    Verified Carbon Standard
                  </div>
                </div>
                {/* Gold Standard */}
                <div className="flex items-center gap-2">
                  <div className="bg-yellow-500 text-white text-xs font-black px-2 py-2 rounded">
                    Gold
                  </div>
                  <div className="text-[9px] text-gray-500 leading-tight max-w-15">
                    Standard for the Global Goals
                  </div>
                </div>
                {/* SGS */}
                <div className="flex items-center gap-2">
                  <div className="bg-red-500 text-white text-xs font-black px-2 py-2 rounded">
                    SGS
                  </div>
                  <div className="text-[9px] text-gray-500 leading-tight max-w-15">
                    Singapore Government Securities
                  </div>
                </div>
              </div>
              <button className="text-xs text-[#2D6A4F] font-semibold hover:underline mt-4 block">
                Xem chứng nhận chi tiết &gt;
              </button>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
            Lịch sử giao dịch & tác động của bạn
          </p>
          <div className="divide-y divide-gray-100">
            <TxRow
              icon={<IconPlane />}
              title="Chuyến bay TP.HCM → Cần Giờ"
              date="Ngày 18/05/2024"
              contribution="20.000 VNĐ"
              matching="20.000 VNĐ"
              trees="2 cây được trồng"
              co2="40 kg CO₂"
            />
            <TxRow
              icon={<IconHotel />}
              title="Khách sạn tại Cần Giờ"
              date="Ngày 18–19/05/2024"
              contribution="10.000 VNĐ"
              matching="10.000 VNĐ"
              trees="1 cây được trồng"
              co2="20 kg CO₂"
            />
            {showAll && (
              <>
                <TxRow
                  icon={<IconPlane />}
                  title="Chuyến bay Hà Nội → TP.HCM"
                  date="Ngày 15/05/2024"
                  contribution="30.000 VNĐ"
                  matching="30.000 VNĐ"
                  trees="3 cây được trồng"
                  co2="60 kg CO₂"
                />
                <TxRow
                  icon={<IconHotel />}
                  title="Khách sạn tại TP.HCM"
                  date="Ngày 15–17/05/2024"
                  contribution="15.000 VNĐ"
                  matching="15.000 VNĐ"
                  trees="1 cây được trồng"
                  co2="30 kg CO₂"
                />
              </>
            )}
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="border border-gray-300 text-gray-600 text-sm font-semibold px-8 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
            >
              {showAll ? "Thu gọn ↑" : "Xem toàn bộ lịch sử >"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
