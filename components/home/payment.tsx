"use client";

import { useState } from "react";
import formatMoney from "@/utils/formatMoney";
import EnvironmentalImpactCard from "./payment/EnvironmentalImpactCard";
import OffsetCheckbox from "./payment/OffsetCheckbox";
import { PaymentCTAButton, PoweredByNote } from "./payment/PaymentFooter";
import PaymentHeader from "./payment/PaymentHeader";
import PaymentMethods from "./payment/PaymentMethods";
import UpdatedTotal from "./payment/UpdatedTotal";

export default function PaymentCard() {
  const [offsetChecked, setOffsetChecked] = useState<boolean | string>(true);
  const [showTooltip, setShowTooltip] = useState(false);

  const tripSubtotal = 2450000;
  const offsetAmount = 30000;
  const total = offsetChecked ? tripSubtotal + offsetAmount : tripSubtotal;

  const formatVND = (amount: number) => formatMoney(amount);

  return (
    <div className="min-h-screen">
      <div className="bg-white rounded-2xl shadow-lg w-full p-6 space-y-5">
        <PaymentHeader
          tripTitle="Tour ngày Rừng ngập mặn Cần Giờ + Đưa đón tại khách sạn"
          tripSubtotal={tripSubtotal}
          formatVND={formatVND}
        />

        <EnvironmentalImpactCard
          offsetAmount={offsetAmount}
          showTooltip={showTooltip}
          onShowTooltip={() => setShowTooltip(true)}
          onHideTooltip={() => setShowTooltip(false)}
          formatVND={formatVND}
        />

        <OffsetCheckbox
          checked={offsetChecked}
          offsetAmount={offsetAmount}
          formatVND={formatVND}
          onChange={setOffsetChecked}
        />

        <UpdatedTotal total={total} formatVND={formatVND} />
        <PaymentMethods />
        <PaymentCTAButton offsetChecked={offsetChecked} />
        <PoweredByNote />
      </div>
    </div>
  );
}
