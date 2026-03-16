import { BUSES, type Bus } from "@/data/mockData";

interface BusListProps {
  setView: (view: string) => void;
  onSelectBus: (bus: Bus) => void;
}

const BusList = ({ setView, onSelectBus }: BusListProps) => (
  <div className="space-y-4 animate-view-in">
    <h2 className="text-xl font-bold text-foreground mb-4">Available Buses</h2>
    {BUSES.map((bus) => (
      <div
        key={bus.id}
        className="bg-card border border-border p-5 rounded-2xl shadow-sm space-y-4"
      >
        <div className="flex justify-between items-start">
          <div
            className={`px-3 py-1 ${bus.colorClass} text-primary-foreground font-black rounded-lg text-xl`}
          >
            {bus.number}
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono font-bold text-foreground">
              {bus.eta}
            </div>
            <div
              className={`text-xs font-bold uppercase ${
                bus.crowd === "High"
                  ? "text-destructive"
                  : "text-accent"
              }`}
            >
              {bus.crowd} Crowd
            </div>
          </div>
        </div>
        <div className="text-sm text-muted-foreground line-clamp-1">
          <span className="font-bold text-foreground">Route:</span>{" "}
          {bus.route.join(" → ")}
        </div>
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            onClick={() => onSelectBus(bus)}
            className="py-3 bg-secondary text-foreground rounded-xl font-bold text-sm active:scale-[0.97] transition-view"
          >
            View Info
          </button>
          <button
            onClick={() => setView("map")}
            className="py-3 bg-primary/10 text-primary rounded-xl font-bold text-sm active:scale-[0.97] transition-view"
          >
            Live Tracking
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default BusList;
