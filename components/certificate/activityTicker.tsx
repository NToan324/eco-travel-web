"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import CertificateButton from "./CertificateButton";
import {
  CertificateData,
  generateCertificateImage,
} from "@/lib/generateCertificate";

const ACTIVITY_FEED = [
  { emoji: "🌱", text: <>Nguyễn Văn A vừa tài trợ một cây xanh thật.</> },
  {
    emoji: "🍃",
    text: (
      <>
        Trần Thị B đã trung hòa 100 kg CO<sub>2</sub> tại Cần Giờ.
      </>
    ),
  },
  { emoji: "🌳", text: <>Lê Minh C đã đạt cấp độ Người Bảo Vệ Cây Cấp 5.</> },
  {
    emoji: "🌿",
    text: (
      <>
        Phạm Thu D đã giảm thiểu 60 kg CO<sub>2</sub> từ chuyến đi của mình.
      </>
    ),
  },
  {
    emoji: "🪴",
    text: <>Hoàng Văn E vừa tưới nước cho cây lần thứ 3.</>,
  },
  {
    emoji: "🌲",
    text: <>Nguyễn Thi F đã trồng cây xanh thật đầu tiên tại Cần Giờ.</>,
  },
];

function ActivityTicker() {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((i) => (i + 1) % ACTIVITY_FEED.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const items = [0, 1, 2].map(
    (offset) => ACTIVITY_FEED[(visibleIndex + offset) % ACTIVITY_FEED.length],
  );

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div
          key={`${visibleIndex}-${i}`}
          className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white/90 animate-fadeIn"
        >
          <span className="text-base">{item.emoji}</span>
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}

function FacebookIcon() {
  return (
    <Image
      src="/facebook.png"
      alt="Facebook"
      width={28}
      height={28}
      className="w-7 h-7"
    />
  );
}

function InstagramIcon() {
  return (
    <Image
      src="/instagram.png"
      alt="Instagram"
      width={28}
      height={28}
      className="w-7 h-7"
    />
  );
}

function XIcon() {
  return (
    <Image src="/x.png" alt="X" width={28} height={28} className="w-7 h-7" />
  );
}

export default function SocialSignalPage() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = async () => {
    setDownloaded(true);
    // const data: CertificateData = {
    //   userName: "Vũ Hoàng Anh Thy",
    //   ecoTitle: "Sổ giờ xanh",
    //   achievementText: `Tôi đã trung hòa 45 kg CO2 cho hành trình đến TP. Hồ Chí Minh`,
    //   destination: "TP. Hồ Chí Minh",
    //   co2Kg: 45,
    //   shareUrl:
    //     typeof window !== "undefined" ?
    //       window.location.origin
    //     : "https://ecotrip.vn",
    // };
    // const url = await generateCertificateImage(data);
    const url = "/certificate.jpeg";
    const link = document.createElement("a");

    link.href = url;
    link.download = "chung-nhan-xanh.png";
    link.click();
    setTimeout(() => setDownloaded(false), 2000);
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out both; }
      `}</style>

      <div className="min-h-screen bg-white px-4 py-10 sm:py-16 flex flex-col items-center">
        {/* Tiêu đề chính */}
        <div className="text-center max-w-2xl mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1B4332] leading-tight">
            Biến mỗi đóng góp xanh thành một thông điệp lan tỏa mạnh mẽ.
          </h1>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Sau khi tưới nước, du khách có thể nhận chứng nhận xanh hoặc kết nối
            với cộng đồng những người đang chung tay phục hồi rừng ngập mặn thực
            tế.
          </p>
        </div>

        {/* Hai Thẻ Nội Dung */}
        <div className="w-full max-w-4xl flex flex-col md:flex-row gap-5 items-start">
          {/* Thẻ Chứng Nhận (Certificate Card) */}
          <div className="flex-1 w-full flex flex-col">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 sm:p-8 flex flex-col items-center text-center gap-4 flex-1">
              {/* Huy hiệu */}
              <div className="w-16 h-16 rounded-full bg-[#1B4332] flex items-center justify-center">
                <HiOutlineCheckCircle size={32} color="white" />
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1B4332]">
                  Chứng Nhận Xanh
                </h2>
                <p className="mt-1 text-sm font-semibold text-[#2D6A4F]">
                  Vũ Hoàng Anh Thy • Đại sứ sinh Quyển
                </p>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed italic">
                &ldquo;Tôi đã trung hòa thành công 45 kg CO<sub>2</sub>
                <br />
                trong chuyến đi đến Thành phố Hồ Chí Minh.&rdquo;
              </p>

              {/* Biểu tượng Mạng xã hội */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Chia sẻ lên Facebook"
                >
                  <FacebookIcon />
                </button>
                <button
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Chia sẻ lên Instagram"
                >
                  <InstagramIcon />
                </button>
                <button
                  className="hover:opacity-80 transition-opacity text-gray-800"
                  aria-label="Chia sẻ lên X"
                >
                  <XIcon />
                </button>
              </div>
            </div>

            {/* Các nút hành động dưới thẻ */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <CertificateButton />
              <button
                onClick={handleDownload}
                className="flex-1 flex items-center justify-center gap-2 border-2 border-[#1B4332] text-[#1B4332] text-sm font-bold py-3.5 rounded-xl hover:bg-[#f0faf4] transition-colors"
              >
                <span>{downloaded ? "Đã tải về!" : "Tải ảnh xuống"}</span>
                {!downloaded && <FiDownload strokeWidth={2.5} />}
              </button>
            </div>
          </div>

          {/* Thẻ Cộng Đồng Du Khách (Like-Minded Travelers Card) */}
          <div className="flex-1 w-full bg-[#1B4332] rounded-2xl shadow-lg p-5 sm:p-7 flex flex-col gap-5">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                Bạn bè trên Facebook của bạn
              </h2>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Bảng cập nhật hoạt động trực tuyến giúp ghi nhận đóng góp tức
                thì và minh chứng rằng các nỗ lực giảm phát thải đang tạo nên
                những cánh rừng thật ngoài đời thực.
              </p>
            </div>

            <ActivityTicker />

            <button className="w-full flex items-center justify-center gap-2 bg-[#e8f5f0] hover:bg-white text-[#1B4332] font-bold text-sm py-3.5 rounded-xl transition-colors mt-auto">
              Kết Nối Bạn Đồng Hành
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
