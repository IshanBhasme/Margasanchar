interface ScanQRProps {
  setView: (view: string) => void;
}

const ScanQR = ({ setView }: ScanQRProps) => (
  <div className="text-center space-y-6 pt-12 animate-view-in">
    <div className="w-64 h-64 bg-secondary mx-auto rounded-3xl border-4 border-dashed border-muted-foreground flex items-center justify-center text-4xl">
      📸
    </div>
    <div className="bg-success/10 p-4 rounded-xl border border-success/20">
      <p className="text-success-foreground font-bold">
        QR scanned for stop:
        <br />
        Main Bazaar (Stop 102)
      </p>
    </div>
    <button
      onClick={() => setView("list")}
      className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold shadow-lg active:opacity-90 transition-view"
    >
      View Buses at this Stop
    </button>
  </div>
);

export default ScanQR;
