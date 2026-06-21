function WaterDrops({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute text-blue-400 text-lg animate-fall"
          style={{
            left: `${30 + Math.random() * 40}%`,
            top: `-10%`,
            animationDelay: `${i * 0.1}s`,
            animationDuration: `${0.6 + Math.random() * 0.4}s`,
          }}
        >
          💧
        </div>
      ))}
    </div>
  );
}

export default WaterDrops;
