import type { ReactNode } from "react";

interface OuterBackgroundProps {
  children: ReactNode;
}

function OuterBackground({ children }: OuterBackgroundProps) {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#ABCAF6",
      }}
    >
      {children}
    </div>
  );
}

export default OuterBackground;