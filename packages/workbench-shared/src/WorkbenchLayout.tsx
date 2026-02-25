import React from "react";

interface Props {
  lobName: string;
  breadcrumb?: string;
  sidebar?: React.ReactNode;
  timeline?: React.ReactNode;
  children: React.ReactNode;
}

export function WorkbenchLayout({
  lobName,
  breadcrumb,
  sidebar,
  timeline,
  children,
}: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        style={{
          padding: "8px 16px",
          background: "#CC0022",
          color: "white",
          fontSize: 14,
        }}
      >
        <strong>{lobName}</strong>
        {breadcrumb ? ` › ${breadcrumb}` : ""}
      </div>
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {sidebar && (
          <aside
            style={{
              width: 200,
              background: "#f7fafc",
              borderRight: "1px solid #e2e8f0",
              padding: 12,
            }}
          >
            {sidebar}
          </aside>
        )}
        <main style={{ flex: 1, padding: 16, overflow: "auto" }}>
          {children}
        </main>
      </div>
      {timeline && (
        <div
          style={{
            borderTop: "1px solid #e2e8f0",
            padding: "8px 16px",
            background: "#f7fafc",
          }}
        >
          {timeline}
        </div>
      )}
    </div>
  );
}
