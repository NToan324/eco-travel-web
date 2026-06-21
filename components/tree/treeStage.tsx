"use client";

import { useState, useEffect, useRef } from "react";
import AmbassadorHeader from "./treeStage/AmbassadorHeader";
import TreeContainer from "./treeStage/TreeContainer";
import ProgressSection from "./treeStage/ProgressSection";
import WateringInfo from "./treeStage/WateringInfo";
import WateringButton from "./treeStage/WateringButton";
import SavedBadge from "./treeStage/SavedBadge";
import StateMessages from "./treeStage/StateMessages";
import Confetti from "./treeStage/Confetti";
import {
  TOTAL_DROPS_NEEDED,
  WATERING_CAN_DROPS,
  INITIAL_DROPS,
} from "./treeStage/types";
import { getTreeStage } from "./treeStage/utils";

export default function BiosphereAmbassador() {
  const [waterDrops, setWaterDrops] = useState(INITIAL_DROPS);
  const [isWatering, setIsWatering] = useState(false);
  const [hasWatered, setHasWatered] = useState(false);
  const [canWater, setCanWater] = useState(true);
  const [showSaved, setShowSaved] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);
  const treeRef = useRef<HTMLDivElement>(null);

  const stage = getTreeStage(waterDrops);

  useEffect(() => {
    const t = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(t);
  }, []);

  const handleWater = () => {
    if (isWatering) return;

    // chặn khi đã max
    if (waterDrops >= TOTAL_DROPS_NEEDED) return;

    setIsWatering(true);

    setTimeout(() => {
      setWaterDrops((d) => {
        const next = Math.min(d + WATERING_CAN_DROPS, TOTAL_DROPS_NEEDED);

        // nếu đạt max thì disable water
        if (next >= TOTAL_DROPS_NEEDED) {
          setShowConfetti(true);
          setCanWater(false);
        } else {
          setCanWater(true);
        }

        return next;
      });

      setIsWatering(false);
      setHasWatered(true);

      setTimeout(() => setShowSaved(true), 500);
    }, 1200);
  };

  return (
    <>
      <div className="min-h-screen bg-[#002a04] flex flex-col items-center justify-start p-4 sm:p-6 lg:p-8 gap-6 sm:gap-8">
        <AmbassadorHeader />
        <div className="relative rounded-3xl h-full overflow-hidden w-full max-w-6xl px-2 sm:px-6 lg:px-8 mx-auto space-y-8">
          {showConfetti && <Confetti />}

          <div className="rounded-2xl p-2 sm:p-6 flex flex-col md:flex-row gap-6 items-start">
            <TreeContainer
              stage={stage}
              isWatering={isWatering}
              treeRef={treeRef}
            />

            <div className="flex-1 w-full space-y-4 bg-white backdrop-blur-sm rounded-xl p-4 sm:p-6">
              <ProgressSection
                waterDrops={waterDrops}
                hasWatered={hasWatered}
                canWater={canWater}
              />

              <WateringInfo />

              <WateringButton
                canWater={canWater}
                isWatering={isWatering}
                isMaxed={waterDrops >= TOTAL_DROPS_NEEDED}
                onWater={handleWater}
              />

              {showSaved && <SavedBadge />}

              <StateMessages
                hasWatered={hasWatered}
                showSaved={showSaved}
                canWater={canWater}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
