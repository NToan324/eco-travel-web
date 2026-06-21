"use client";

import BookingSuccessCard from "@/components/payment/BookingSuccessCard";
import CarbonOffsetCard from "@/components/payment/CarbonOffsetCard";
import CheckoutFooter from "@/components/payment/CheckoutFooter";
import GrowthTracker from "@/components/payment/GrowthTracker";
import ImpactPanel from "@/components/payment/ImpactPanel";
import PaymentBreakdown from "@/components/payment/PaymentBreakdown";
import TripSummaryCard from "@/components/payment/TripSummaryCard";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FARE = 1290000;
const TAX = 120000;

export default function HomePage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [offset, setOffset] = useState(20000);

  const total = FARE + TAX + offset;

  const handleBackHome = () => {
    router.push("/");
  };

  return (
    <main className="min-h-screen pb-28">
      <header className="border-b border-line bg-cream px-6 py-5">
        <div className="mx-auto max-w-3xl">
          <p className="font-display text-xl font-semibold text-ink mb-5">
            Đặt chuyến bay xanh
          </p>
          <GrowthTracker activeIndex={step} onStepClick={setStep} />
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-8 space-y-6">
        {step === 0 && (
          <>
            <TripSummaryCard
              trip={{
                from: "TP Hồ Chí Minh",
                to: "Hà Nội",
                date: "15 Tháng 7, 2026 · 1 khách",
                passengers: "1 khách",
                airline: "VietJet Air",
                flightCode: "VJ123",
                imageUrl: "/hanoi.jpeg",
              }}
            />
            <PaymentBreakdown
              items={[
                { label: "Vé máy bay", amount: FARE },
                { label: "Thuế, phí", amount: TAX },
              ]}
              total={FARE + TAX}
            />
            <CarbonOffsetCard amount={offset} onAmountChange={setOffset} />
          </>
        )}

        {step === 1 && (
          <ImpactPanel treeCount={2} location="Cần Giờ, TP. Hồ Chí Minh" />
        )}

        {step === 2 && (
          <BookingSuccessCard
            donation={{
              amount: offset,
              projectType: "Trồng cây đước tại Cần Giờ",
              treesPlanted: 2,
              co2Offset: "≈ 50 kg CO₂e",
            }}
          />
        )}
      </div>

      <CheckoutFooter
        total={total}
        ctaLabel={
          step === 0 ? `Thanh toán ${total.toLocaleString("vi-VN")}đ`
          : step === 1 ?
            "Hoàn tất"
          : "Về trang chủ"
        }
        onSubmit={() => {
          if (step === 2) {
            router.push("/");
          } else {
            setStep((s) => Math.min(s + 1, 2));
          }
        }}
      />
    </main>
  );
}
