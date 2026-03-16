import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import Home from "@/components/Home";
import PlanTrip from "@/components/PlanTrip";
import BusList from "@/components/BusList";
import LiveMap from "@/components/LiveMap";
import ScanQR from "@/components/ScanQR";
import OfflineSMS from "@/components/OfflineSMS";
import BusInfoModal from "@/components/BusInfoModal";
import type { Bus } from "@/data/mockData";

const Index = () => {
  const [view, setView] = useState("home");
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);

  const navigate = (v: string) => {
    window.scrollTo(0, 0);
    setView(v);
  };

  return (
    <div className="antialiased selection:bg-primary/20">
      {view === "home" && (
        <AppLayout title="MargaSanchār">
          <Home setView={navigate} />
        </AppLayout>
      )}
      {view === "plan" && (
        <AppLayout title="Plan Trip" onBack={() => navigate("home")}>
          <PlanTrip setView={navigate} />
        </AppLayout>
      )}
      {view === "list" && (
        <AppLayout title="Available Buses" onBack={() => navigate("plan")}>
          <BusList setView={navigate} onSelectBus={setSelectedBus} />
        </AppLayout>
      )}
      {view === "map" && (
        <AppLayout title="Live Tracking" onBack={() => navigate("list")}>
          <LiveMap setView={navigate} />
        </AppLayout>
      )}
      {view === "scan" && (
        <AppLayout title="Scan QR" onBack={() => navigate("home")}>
          <ScanQR setView={navigate} />
        </AppLayout>
      )}
      {view === "offline" && (
        <AppLayout title="Offline SMS" onBack={() => navigate("home")}>
          <OfflineSMS setView={navigate} />
        </AppLayout>
      )}

      {selectedBus && (
        <BusInfoModal bus={selectedBus} onClose={() => setSelectedBus(null)} />
      )}
    </div>
  );
};

export default Index;
