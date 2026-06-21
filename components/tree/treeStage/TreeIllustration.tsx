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
        <defs>
          {/* Leaf gradient */}
          <linearGradient id="leafGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#74C69D" />
            <stop offset="100%" stopColor="#1B4332" />
          </linearGradient>

          {/* Trunk gradient */}
          <linearGradient id="trunkGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A0714F" />
            <stop offset="100%" stopColor="#5C3A21" />
          </linearGradient>
        </defs>

        {/* shadow */}
        <ellipse
          cx="100"
          cy="172"
          rx="45"
          ry="10"
          fill="black"
          opacity="0.12"
        />

        {/* Pot */}
        <rect x="65" y="165" width="70" height="50" rx="8" fill="#8B5E3C" />
        <rect x="58" y="158" width="84" height="16" rx="6" fill="#A0714F" />

        {/* ================= TRUNK ================= */}
        {stage !== "sprout" && (
          <path
            d="M100 157 C98 130, 102 110, 100 70"
            stroke="url(#trunkGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
        )}

        {/* ================= STAGES ================= */}

        {/* SPROUT */}
        {stage === "sprout" && (
          <>
            <path
              d="M100 157 Q 96 145 100 135"
              stroke="#2D6A4F"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <ellipse cx="101" cy="133" rx="5" ry="3.5" fill="#74C69D" />
          </>
        )}

        {/* SEEDLING */}
        {stage === "seedling" && (
          <>
            <ellipse
              cx="103"
              cy="105"
              rx="6"
              ry="3.5"
              fill="#74C69D"
              transform="rotate(20 103 105)"
            />
          </>
        )}

        {/* SAPLING */}
        {stage === "sapling" && (
          <>
            <path d="M100 120 C95 110, 110 105, 100 95" fill="url(#leafGrad)" />
            <path d="M100 110 C90 100, 80 110, 85 120" fill="#52B788" />
            <path d="M100 110 C110 100, 120 110, 115 120" fill="#40916C" />
          </>
        )}

        {/* YOUNG */}
        {stage === "young" && (
          <>
            <path
              d="M100 95
                 C70 70, 50 110, 80 120
                 C60 140, 90 150, 100 130
                 C110 150, 140 140, 120 120
                 C150 110, 130 70, 100 95 Z"
              fill="url(#leafGrad)"
              opacity="0.95"
            />
          </>
        )}

        {/* MATURE */}
        {stage === "mature" && (
          <>
            {/* canopy main blob */}
            <path
              d="M100 45
                 C70 35, 45 70, 60 95
                 C35 120, 60 150, 100 135
                 C140 150, 165 120, 140 95
                 C160 70, 130 35, 100 45 Z"
              fill="url(#leafGrad)"
            />

            {/* inner depth */}
            <path
              d="M100 60
                 C75 55, 60 80, 70 100
                 C60 120, 80 130, 100 120
                 C120 130, 140 120, 130 100
                 C140 80, 125 55, 100 60 Z"
              fill="#2D6A4F"
              opacity="0.6"
            />

            {/* highlight */}
            <circle cx="85" cy="70" r="10" fill="#B7E4C7" opacity="0.7" />
            <circle cx="120" cy="75" r="8" fill="#95D5B2" opacity="0.6" />
            <circle cx="100" cy="55" r="6" fill="#D8F3DC" />
          </>
        )}
      </svg>
    </div>
  );
}

export default TreeIllustration;
