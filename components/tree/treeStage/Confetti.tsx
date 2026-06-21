"use client";

import { useEffect, useState } from "react";

interface ConfettiItem {
  id: number;
  color: string;
  left: string;
  delay: string;
  duration: string;
  rotate: string;
}

function Confetti() {
  const [items, setItems] = useState<ConfettiItem[]>([]);

  useEffect(() => {
    const colors = [
      "bg-yellow-400",
      "bg-pink-400",
      "bg-green-400",
      "bg-blue-400",
      "bg-purple-400",
    ];

    // Chỉ sinh giá trị ngẫu nhiên một lần duy nhất ở Client
    const generatedItems = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      color: colors[i % colors.length],
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${2 + Math.random() * 2}s`,
      rotate: `${Math.random() * 360}deg`,
    }));

    setItems(generatedItems);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
      {items.map((item) => (
        <div
          key={item.id}
          className={`absolute w-2 h-2 rounded-sm ${item.color} animate-confetti`}
          style={{
            left: item.left,
            top: "-5%",
            animationDelay: item.delay,
            animationDuration: item.duration,
            transform: `rotate(${item.rotate})`,
          }}
        />
      ))}
    </div>
  );
}

export default Confetti;
