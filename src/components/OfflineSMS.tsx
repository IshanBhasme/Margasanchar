import { useState } from "react";

interface OfflineSMSProps {
  setView: (view: string) => void;
}

interface Message {
  type: "bot" | "user";
  text: string;
}

const OfflineSMS = ({ setView }: OfflineSMSProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "Welcome to MargaSanchār SMS Service.\nPlease enter your station code (e.g., 102) to continue.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { type: "user", text: input };
    let botText = "Invalid input, please try again.";

    if (input === "102") {
      botText =
        "Select your direction:\nSend 1 for Hingna\nSend 2 for Station Rd\nSend 3 for Market";
    } else if (input === "1") {
      botText =
        "Buses going towards Hingna:\nBus 12 → ETA 3 min (Medium Crowd)\nBus 45 → ETA 9 min (Low Crowd)";
    } else if (input === "2") {
      botText = "Bus 22 → ETA 17 min (High Crowd)";
    }

    const botMsg: Message = { type: "bot", text: botText };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-[70vh] animate-view-in">
      <div className="flex-1 overflow-y-auto space-y-4 p-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[80%] p-4 rounded-2xl font-medium text-sm ${
              m.type === "user"
                ? "bg-primary text-primary-foreground ml-auto rounded-tr-none"
                : "bg-card border border-border text-foreground rounded-tl-none shadow-sm"
            }`}
          >
            {m.text.split("\n").map((line, j) => (
              <div key={j}>{line}</div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type code..."
          className="flex-1 p-4 bg-card border border-border rounded-xl font-bold text-foreground focus:outline-none focus:ring-2 ring-primary"
        />
        <button
          onClick={handleSend}
          className="bg-primary text-primary-foreground px-6 rounded-xl font-bold active:opacity-90 transition-view"
        >
          Send
        </button>
      </div>
      <button
        onClick={() => setView("home")}
        className="mt-4 text-muted-foreground font-bold text-sm underline"
      >
        Back to Home
      </button>
    </div>
  );
};

export default OfflineSMS;
