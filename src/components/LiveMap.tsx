import { useState, useEffect } from "react";

interface LiveMapProps {
  setView: (view: string) => void;
}

const ROUTE_STATIONS = ["Main Bazaar", "Station Rd", "College", "Market"];

const LiveMap = ({ setView }: LiveMapProps) => {
  const [pos, setPos] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setPos((prev) => (prev + 1) % 100), 100);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor((100 - pos) * 0.06);
  const seconds = Math.floor(((100 - pos) * 0.06 - minutes) * 60);

  return (
    <div className="space-y-6 animate-view-in">
      <div className="relative h-80 bg-secondary rounded-3xl overflow-hidden border-4 border-card shadow-inner">
        {/* Route line background */}
        <div className="absolute top-1/2 left-[5%] right-[5%] h-2 bg-border -translate-y-1/2 rounded-full" />
        {/* Progress */}
        <div
          className="absolute top-1/2 left-[5%] h-2 bg-primary -translate-y-1/2 rounded-full transition-all duration-100"
          style={{ width: `${pos * 0.9}%` }}
        />

        {/* Stations */}
        {ROUTE_STATIONS.map((name, i) => (
          <div
            key={name}
            className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center"
            style={{ left: `${i * 30 + 5}%` }}
          >
            <div className="w-4 h-4 bg-card border-4 border-muted-foreground rounded-full mb-2" />
            <span className="text-[10px] font-bold text-muted-foreground rotate-45 origin-left whitespace-nowrap">
              {name}
            </span>
          </div>
        ))}

        {/* Bus emoji */}
        <div
          className="absolute top-1/2 -translate-y-1/2 text-2xl transition-all duration-100 ease-linear"
          style={{ left: `calc(${pos * 0.9 + 5}% - 12px)` }}
        >
          🚌
        </div>
      </div>

      <div className="bg-card p-6 rounded-2xl border border-border shadow-sm flex justify-between items-center">
        <div>
          <div className="text-xs font-bold text-muted-foreground uppercase">
            Next Stop
          </div>
          <div className="text-lg font-bold text-foreground">Station Rd</div>
        </div>
        <div className="text-right">
          <div className="text-xs font-bold text-muted-foreground uppercase">
            ETA
          </div>
          <div className="text-2xl font-mono font-bold text-primary">
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </div>
        </div>
      </div>

      <button
        onClick={() => setView("home")}
        className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold active:opacity-90 transition-view"
      >
        Back to Home
      </button>
    </div>
  );
};

export default LiveMap;
