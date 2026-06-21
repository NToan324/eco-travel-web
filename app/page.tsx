"use client";

import HeroSection from "@/components/home/heroSection";
import PaymentCard from "@/components/home/payment";

export default function Home() {
  return (
    <div>
      <main className="grid grid-cols-2 gap-6 max-w-6xl mx-auto py-6">
        {/* Banner */}
        <HeroSection />
        {/* Payment */}
        <PaymentCard />
      </main>
    </div>
  );
}
