const STAGES = ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10"];

export function PipelineTimeline({ currentStage }: { currentStage: string }) {
  const currentIdx = STAGES.indexOf(currentStage);
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
      {STAGES.map((stage, i) => (
        <div
          key={stage}
          style={{
            padding: "2px 8px",
            borderRadius: 4,
            fontSize: 12,
            fontWeight: i === currentIdx ? "bold" : "normal",
            background:
              i < currentIdx
                ? "#48bb78"
                : i === currentIdx
                  ? "#3182ce"
                  : "#e2e8f0",
            color: i <= currentIdx ? "white" : "#718096",
          }}
        >
          {stage}
        </div>
      ))}
    </div>
  );
}
