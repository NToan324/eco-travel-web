import Image from "next/image";
interface Trip {
  from: string;
  to: string;
  date: string;
  passengers: string;
  airline: string;
  flightCode: string;
  imageUrl?: string;
}

export default function TripSummaryCard({ trip }: { trip: Trip }) {
  return (
    <section className="rounded-card bg-cream p-6 shadow-card">
      <h2 className="font-display text-lg font-semibold text-ink mb-4">
        Chi tiết chuyến đi
      </h2>
      <div className="flex items-center gap-4">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-mintBg">
          {trip.imageUrl ?
            <Image
              src={trip.imageUrl}
              width={80}
              height={80}
              alt={`${trip.from} đến ${trip.to}`}
              className="h-full w-full object-cover"
            />
          : <div className="flex h-full w-full items-center justify-center text-forest">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M2 16l20-8-8 20-2-9-9-3Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          }
        </div>
        <div className="space-y-2">
          <p className="font-display text-base font-semibold text-ink">
            {trip.from} → {trip.to}
          </p>
          <p className="font-body text-sm text-black mt-1">{trip.date}</p>
          <p className="font-body text-sm text-black">
            {trip.airline} · {trip.flightCode}
          </p>
        </div>
      </div>
    </section>
  );
}
