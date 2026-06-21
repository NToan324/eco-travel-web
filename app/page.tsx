"use client";

import ActivityTicker from "@/components/certificate/activityTicker";
import HeroSection from "@/components/home/heroSection";
import PaymentCard from "@/components/home/payment";
import BiosphereAmbassador from "@/components/tree/treeStage";

export default function Home() {
  return (
    <div>
      <main className="grid grid-cols-2 gap-6 max-w-6xl mx-auto py-6">
        {/* Banner */}
        <HeroSection />
        {/* Payment */}
        <PaymentCard />
      </main>
      <div className="">
        <BiosphereAmbassador />
        <ActivityTicker />
      </div>
    </div>
  );
}
