"use client";

import { useState } from "react";
import { HiCheck } from "react-icons/hi";
import { BsPatchCheck } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import {
  generateCertificateImage,
  type CertificateData,
} from "@/lib/generateCertificate";
import CertificateModal from "./CertificateModal";

export default function CertificateButton({
  userName,
  ecoTitle,
  co2Kg,
  destination,
}: {
  userName: string;
  ecoTitle: string;
  co2Kg: number;
  destination: string;
}) {
  const [certified, setCertified] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const shareUrl =
    typeof window !== "undefined" ?
      window.location.origin
    : "https://ecotrip.vn";

  async function handleCertificate() {
    if (certified && imageUrl) {
      // đã có chứng nhận — mở lại bản xem trước thay vì tạo lại
      setImageUrl(imageUrl);
      return;
    }

    setGenerating(true);
    try {
      const data: CertificateData = {
        userName,
        ecoTitle,
        achievementText: `Tôi đã trung hòa ${co2Kg} kg CO2 cho hành trình đến ${destination}`,
        co2Kg,
        destination,
        shareUrl,
      };
      const url = await generateCertificateImage(data);
      setImageUrl(url);
      setCertified(true);
    } catch (err) {
      console.error("Không thể tạo chứng nhận xanh:", err);
    } finally {
      setGenerating(false);
    }
  }

  return (
    <>
      <Button
        onClick={handleCertificate}
        disabled={generating}
        variant="default"
        className="h-14 px-6 flex-1 flex items-center justify-center gap-2 bg-[#1B4332] hover:bg-[#2D6A4F] text-white text-sm font-bold py-3.5 rounded-xl transition-colors"
      >
        <span>
          {generating ?
            "Đang tạo chứng nhận..."
          : certified ?
            <div className="flex items-center gap-1">
              <HiCheck /> <span> Đã nhận!</span>
            </div>
          : "Nhận chứng nhận xanh"}
        </span>
        {!certified && !generating && <BsPatchCheck strokeWidth="0.8" />}
      </Button>

      {imageUrl && (
        <CertificateModal
          imageUrl={imageUrl}
          shareUrl={shareUrl}
          onClose={() => setImageUrl(null)}
        />
      )}
    </>
  );
}
