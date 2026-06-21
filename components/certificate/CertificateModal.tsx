"use client";

import { HiOutlineDownload, HiOutlineX } from "react-icons/hi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { dataUrlToFile } from "@/lib/generateCertificate";
import Image from "next/image";

export default function CertificateModal({
  imageUrl,
  shareUrl,
  onClose,
}: {
  imageUrl: string;
  shareUrl: string;
  onClose: () => void;
}) {
  const canNativeShare =
    typeof navigator !== "undefined" && "share" in navigator;

  async function handleDownload() {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "chung-nhan-xanh.png";
    link.click();
  }

  async function handleNativeShare() {
    try {
      const file = await dataUrlToFile(imageUrl, "chung-nhan-xanh.png");
      const canShareFile =
        typeof navigator !== "undefined" &&
        navigator.canShare?.({ files: [file] });

      if (canShareFile) {
        await navigator.share({
          files: [file],
          title: "Chứng nhận hành trình xanh",
          text: "Tôi đã trung hòa lượng CO₂ cho hành trình của mình. Cùng đặt chuyến bay xanh nhé!",
        });
        return;
      }
      await navigator.share({
        title: "Chứng nhận hành trình xanh",
        text: "Tôi đã trung hòa lượng CO₂ cho hành trình của mình. Cùng đặt chuyến bay xanh nhé!",
        url: shareUrl,
      });
    } catch {
      // người dùng hủy chia sẻ — không cần làm gì thêm
    }
  }

  function handleFacebookShare() {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl,
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function handleInstagramShare() {
    // Instagram không hỗ trợ nhận ảnh trực tiếp qua URL từ web.
    // Tải ảnh trước, sau đó mở Instagram để người dùng tự đăng.
    handleDownload();
    window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 backdrop-blur-sm px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-label="Chứng nhận hành trình xanh"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-card bg-cream p-5 shadow-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-mintBg text-ink hover:bg-line"
        >
          <HiOutlineX size={16} />
        </button>

        <h3 className="font-display text-lg font-semibold text-ink mb-1 pr-8">
          Chứng nhận của bạn đã sẵn sàng
        </h3>
        <p className="font-body text-sm text-muted mb-4">
          Lưu lại hoặc chia sẻ ngay để truyền cảm hứng xanh đến mọi người.
        </p>

        <div className="overflow-hidden rounded-2xl border border-line">
          <Image
            width={400}
            height={400}
            src={imageUrl}
            alt="Chứng nhận hành trình xanh"
            className="w-full"
          />
        </div>

        <div className="mt-5 flex gap-3">
          <Button
            variant="default"
            onClick={handleDownload}
            className="flex-1 h-12 gap-2"
          >
            <HiOutlineDownload size={18} />
            Tải xuống
          </Button>
          <Button
            variant="outline"
            onClick={handleNativeShare}
            className="flex-1 h-12 gap-2"
            disabled={!canNativeShare}
          >
            <IoShareOutline size={18} />
            Chia sẻ nhanh
          </Button>
        </div>

        {!canNativeShare && (
          <div className="mt-3 flex gap-3">
            <button
              type="button"
              onClick={handleFacebookShare}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-line py-2.5 font-body text-sm font-medium text-ink hover:bg-mintBg"
            >
              <FaFacebook className="text-[#1877F2]" size={18} />
              Facebook
            </button>
            <button
              type="button"
              onClick={handleInstagramShare}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-line py-2.5 font-body text-sm font-medium text-ink hover:bg-mintBg"
            >
              <FaInstagram className="text-[#E1306C]" size={18} />
              Instagram
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
