import React from "react";
import AppFooter from "./AppFooter";

interface AppLayoutProps {
  children: React.ReactNode;
  title?: string;
  onBack?: () => void;
}

const AppLayout = ({ children, title, onBack }: AppLayoutProps) => (
  <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto shadow-2xl border-x border-border">
    <header className="bg-card border-b border-border p-4 sticky top-0 z-10 flex items-center gap-4">
      {onBack && (
        <button
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-secondary rounded-full transition-view"
          aria-label="Go back"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 10H5M10 15l-5-5 5-5" />
          </svg>
        </button>
      )}
      <h1 className="text-lg font-bold text-foreground tracking-tight">
        {title || "MargaSanchār"}
      </h1>
    </header>
    <main className="flex-1 p-4 pb-24">{children}</main>
    <AppFooter />
  </div>
);

export default AppLayout;
