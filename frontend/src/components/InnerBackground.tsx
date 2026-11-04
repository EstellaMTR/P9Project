import type { ReactNode } from "react";

interface InnerBackgroundProps {
  children: ReactNode;
}

function InnerBackground({ children }: InnerBackgroundProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 56px)",
        backgroundColor: "#CFE2F5",
        borderRadius: "35px",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}

export default InnerBackground;