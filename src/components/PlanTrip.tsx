import { useState } from "react";
import { STATIONS, BUSES } from "@/data/mockData";

interface PlanTripProps {
  setView: (view: string) => void;
}

const PlanTrip = ({ setView }: PlanTripProps) => {
  const [from, setFrom] = useState(STATIONS[0]);
  const [to, setTo] = useState(STATIONS[1]);
  const [result, setResult] = useState<{
    bus: (typeof BUSES)[0];
    eta: number;
    crowd: string;
  } | null>(null);

  const handlePlan = () => {
    setResult({ bus: BUSES[0], eta: 6, crowd: "Medium" });
  };

  return (
    <div className="space-y-6 animate-view-in">
      <div className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-4">
        <div>
          <label className="text-xs font-bold text-muted-foreground uppercase mb-1 block">
            From
          </label>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full p-3 bg-secondary border border-border rounded-xl font-medium text-foreground"
          >
            {STATIONS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-bold text-muted-foreground uppercase mb-1 block">
            To
          </label>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full p-3 bg-secondary border border-border rounded-xl font-medium text-foreground"
          >
            {STATIONS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <button
          onClick={handlePlan}
          className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold shadow-lg active:opacity-90 transition-view"
        >
          Plan Trip
        </button>
      </div>

      {result && (
        <div className="bg-success/10 border border-success/20 p-6 rounded-2xl animate-view-in">
          <h3 className="font-bold text-success-foreground mb-2">
            Best Option: Bus {result.bus.number}
          </h3>
          <div className="flex justify-between text-success-foreground text-sm font-medium">
            <span>ETA: {result.eta} min</span>
            <span>Crowd: {result.crowd}</span>
          </div>
          <button
            onClick={() => setView("list")}
            className="mt-4 w-full py-2 text-accent font-bold border-b-2 border-accent/30 hover:border-accent transition-view"
          >
            View All Buses →
          </button>
        </div>
      )}
    </div>
  );
};

export default PlanTrip;
