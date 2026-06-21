export const IconTree = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
    <ellipse cx="20" cy="14" rx="10" ry="9" fill="#52B788" />
    <ellipse cx="20" cy="20" rx="13" ry="10" fill="#40916C" />
    <rect x="18" y="28" width="4" height="8" rx="2" fill="#2D6A4F" />
  </svg>
);

export const IconCO2 = () => (
  <div className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center">
    <span className="text-xs font-bold text-gray-500 leading-none">
      CO<sub>2</sub>
    </span>
  </div>
);

export const IconPeople = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
    <circle cx="14" cy="14" r="5" fill="#74C69D" />
    <circle cx="26" cy="14" r="5" fill="#52B788" />
    <circle cx="20" cy="13" r="5" fill="#40916C" />
    <ellipse cx="14" cy="28" rx="8" ry="5" fill="#74C69D" />
    <ellipse cx="26" cy="28" rx="8" ry="5" fill="#52B788" />
    <ellipse cx="20" cy="27" rx="9" ry="5.5" fill="#40916C" />
  </svg>
);

export const IconPlane = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
  </svg>
);

export const IconHotel = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
  </svg>
);

export const IconCheck = ({ done }: { done: boolean }) => (
  <div
    className={`w-7 h-7 rounded-full flex items-center justify-center border-2 flex-shrink-0 ${
      done ? "bg-[#2D6A4F] border-[#2D6A4F]" : "bg-white border-gray-300"
    }`}
  >
    {done && (
      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 12 12">
        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    )}
  </div>
);
