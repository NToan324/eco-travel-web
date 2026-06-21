"use client";

import ActivityTicker from "@/components/certificate/activityTicker";
import TransparencyDashboard from "@/components/dashboard/TransparencyDashboard";
import HeroSection from "@/components/home/heroSection";
import PaymentCard from "@/components/home/payment";
import BiosphereAmbassador from "@/components/tree/treeStage";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto py-6 md:px-0 px-4">
        {/* Banner */}
        <HeroSection />
        {/* Payment */}
        <PaymentCard />
      </div>
      <div className="px-4 sm:px-6">
        <BiosphereAmbassador />
        <ActivityTicker />
        <TransparencyDashboard />
      </div>
    </div>
  );
}
