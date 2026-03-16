interface HomeProps {
  setView: (view: string) => void;
}

const MenuButton = ({
  onClick,
  icon,
  label,
  sub,
}: {
  onClick: () => void;
  icon: string;
  label: string;
  sub: string;
}) => (
  <button
    onClick={onClick}
    className="w-full flex items-center p-5 bg-card border border-border rounded-2xl shadow-sm hover:shadow-md active:scale-[0.98] transition-view text-left group"
  >
    <span className="text-3xl mr-4 group-hover:scale-110 transition-transform">
      {icon}
    </span>
    <div>
      <div className="font-bold text-foreground text-lg">{label}</div>
      <div className="text-sm text-muted-foreground">{sub}</div>
    </div>
  </button>
);

const Home = ({ setView }: HomeProps) => (
  <div className="space-y-6 animate-view-in">
    <div className="py-8">
      <h2 className="text-3xl font-black text-foreground leading-tight">
        MargaSanchār
      </h2>
      <p className="text-lg font-semibold text-foreground mt-1">
        Smart Public Transport
      </p>
      <p className="text-muted-foreground mt-2 font-medium">
        Inclusive Mobility for Tier-2 &amp; Tier-3 Cities.
      </p>
    </div>

    <div className="grid gap-4">
      <MenuButton
        onClick={() => setView("plan")}
        icon="📍"
        label="Plan a Trip"
        sub="Find the best route"
      />
      <MenuButton
        onClick={() => setView("scan")}
        icon="📸"
        label="Scan QR"
        sub="At bus stop"
      />
      <MenuButton
        onClick={() => setView("offline")}
        icon="💬"
        label="Go Offline"
        sub="No Internet? Use SMS"
      />
    </div>
  </div>
);

export default Home;
