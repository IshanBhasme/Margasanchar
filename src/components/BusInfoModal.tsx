import type { Bus } from "@/data/mockData";

interface BusInfoModalProps {
  bus: Bus;
  onClose: () => void;
}

const InfoRow = ({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) => (
  <div className="flex justify-between border-b border-border pb-2">
    <span className="text-sm font-bold text-muted-foreground uppercase">
      {label}
    </span>
    <span
      className={`text-sm font-bold ${
        highlight ? "text-destructive" : "text-foreground"
      }`}
    >
      {value}
    </span>
  </div>
);

const BusInfoModal = ({ bus, onClose }: BusInfoModalProps) => (
  <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm animate-view-in">
    <div className="bg-card w-full max-w-md rounded-t-[2rem] sm:rounded-[2rem] p-8 space-y-6 animate-view-in">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black text-foreground">
          Bus {bus.number}
        </h2>
        <button
          onClick={onClose}
          className="p-2 bg-secondary rounded-full text-foreground"
        >
          ✕
        </button>
      </div>
      <div className="space-y-4">
        <InfoRow label="Current Position" value="Near College Square" />
        <InfoRow label="Next Stop" value={bus.route[1]} />
        <InfoRow
          label="Crowd Level"
          value={bus.crowd}
          highlight={bus.crowd === "High"}
        />
        <div>
          <label className="text-xs font-bold text-muted-foreground uppercase block mb-2">
            Full Route
          </label>
          <div className="flex flex-wrap gap-2">
            {bus.route.map((r, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-secondary rounded-full text-xs font-bold text-muted-foreground"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={onClose}
        className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-bold active:opacity-90 transition-view"
      >
        Close
      </button>
    </div>
  </div>
);

export default BusInfoModal;
