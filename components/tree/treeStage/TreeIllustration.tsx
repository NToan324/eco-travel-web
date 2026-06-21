import { TreeStage } from "./types";

function TreeIllustration({
  stage,
  isWatering,
}: {
  stage: TreeStage;
  isWatering: boolean;
}) {
  const motionClass = isWatering ? "animate-gentle-shake" : "";

  return (
    <div
      className={`relative flex items-end -top-5 justify-center w-full transition-transform duration-700 ease-out ${
        isWatering ? "scale-[1.03]" : "scale-100"
      }`}
    >
      {/* Water drops */}
      {isWatering && (
        <>
          <span className="drop" style={{ left: "48%" }} />
          <span className="drop delay-100" style={{ left: "52%" }} />
        </>
      )}

      <svg
        viewBox="0 0 200 220"
        className={`w-60 h-60 md:w-80 md:h-80 ${motionClass}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Pot */}
        <rect x="65" y="165" width="70" height="50" rx="8" fill="#8B5E3C" />
        <rect x="58" y="158" width="84" height="16" rx="6" fill="#A0714F" />

        {/* Stem */}
        {stage === "sprout" && (
          <line
            x1="100"
            y1="157"
            x2="100"
            y2="120"
            stroke="#2D6A4F"
            strokeWidth="5"
            strokeLinecap="round"
          />
        )}

        {stage === "seedling" && (
          <line
            x1="100"
            y1="157"
            x2="100"
            y2="95"
            stroke="#2D6A4F"
            strokeWidth="5"
            strokeLinecap="round"
          />
        )}

        {(stage === "sapling" || stage === "young" || stage === "mature") && (
          <line
            x1="100"
            y1="157"
            x2="100"
            y2="70"
            stroke="#2D6A4F"
            strokeWidth="6"
            strokeLinecap="round"
          />
        )}

        {/* SPROUT */}
        {stage === "sprout" && (
          <>
            <ellipse
              cx="85"
              cy="118"
              rx="14"
              ry="9"
              fill="#52B788"
              transform="rotate(-30 85 118)"
            />
            <ellipse
              cx="115"
              cy="118"
              rx="14"
              ry="9"
              fill="#40916C"
              transform="rotate(30 115 118)"
            />
            <circle cx="90" cy="105" r="4" fill="#95D5B2" />
            <circle cx="100" cy="100" r="4" fill="#95D5B2" />
            <circle cx="110" cy="105" r="4" fill="#B7E4C7" />
          </>
        )}

        {/* SEEDLING */}
        {stage === "seedling" && (
          <>
            <ellipse
              cx="80"
              cy="95"
              rx="20"
              ry="12"
              fill="#52B788"
              transform="rotate(-25 80 95)"
            />
            <ellipse
              cx="120"
              cy="95"
              rx="20"
              ry="12"
              fill="#40916C"
              transform="rotate(25 120 95)"
            />
            <ellipse cx="100" cy="82" rx="18" ry="11" fill="#74C69D" />
          </>
        )}

        {/* SAPLING */}
        {stage === "sapling" && (
          <>
            <ellipse
              cx="75"
              cy="110"
              rx="24"
              ry="14"
              fill="#52B788"
              transform="rotate(-20 75 110)"
            />
            <ellipse
              cx="125"
              cy="110"
              rx="24"
              ry="14"
              fill="#40916C"
              transform="rotate(20 125 110)"
            />
            <ellipse cx="100" cy="90" rx="30" ry="18" fill="#74C69D" />
          </>
        )}

        {/* YOUNG */}
        {stage === "young" && (
          <>
            <ellipse
              cx="70"
              cy="120"
              rx="28"
              ry="16"
              fill="#40916C"
              transform="rotate(-20 70 120)"
            />
            <ellipse
              cx="130"
              cy="120"
              rx="28"
              ry="16"
              fill="#2D6A4F"
              transform="rotate(20 130 120)"
            />
            <ellipse cx="100" cy="100" rx="36" ry="22" fill="#52B788" />
          </>
        )}

        {/* MATURE */}
        {/* MATURE - FULL TREE WITH DEPTH */}
        {stage === "mature" && (
          <>
            {/* BACK LAYER LEAVES (shadow layer) */}
            <ellipse
              cx="60"
              cy="120"
              rx="38"
              ry="22"
              fill="#1B4332"
              opacity="0.9"
            />
            <ellipse
              cx="140"
              cy="120"
              rx="38"
              ry="22"
              fill="#1B4332"
              opacity="0.9"
            />

            <ellipse
              cx="70"
              cy="95"
              rx="32"
              ry="20"
              fill="#2D6A4F"
              opacity="0.9"
            />
            <ellipse
              cx="130"
              cy="95"
              rx="32"
              ry="20"
              fill="#2D6A4F"
              opacity="0.9"
            />

            {/* MAIN CANOPY */}
            <ellipse cx="100" cy="80" rx="55" ry="35" fill="#40916C" />
            <ellipse cx="75" cy="85" rx="40" ry="28" fill="#2D6A4F" />
            <ellipse cx="125" cy="85" rx="40" ry="28" fill="#2D6A4F" />

            {/* TOP HIGHLIGHT LAYER */}
            <ellipse cx="100" cy="55" rx="30" ry="20" fill="#74C69D" />
            <ellipse cx="85" cy="60" rx="22" ry="14" fill="#52B788" />
            <ellipse cx="115" cy="60" rx="22" ry="14" fill="#52B788" />

            {/* SMALL LEAF DETAILS (spark depth) */}
            <circle cx="60" cy="75" r="6" fill="#95D5B2" opacity="0.8" />
            <circle cx="140" cy="75" r="6" fill="#95D5B2" opacity="0.8" />
            <circle cx="100" cy="45" r="5" fill="#B7E4C7" />

            {/* TRUNK DETAIL IMPROVED */}
            <line
              x1="100"
              y1="157"
              x2="100"
              y2="70"
              stroke="#2D6A4F"
              strokeWidth="7"
              strokeLinecap="round"
            />

            {/* trunk highlight */}
            <line
              x1="98"
              y1="157"
              x2="98"
              y2="80"
              stroke="#52B788"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.6"
            />
          </>
        )}
      </svg>
    </div>
  );
}

export default TreeIllustration;
