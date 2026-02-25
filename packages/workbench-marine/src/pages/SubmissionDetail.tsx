import { PipelineTimeline, useApi, useEventBus } from "@mfe/workbench-shared";
import { useEffect } from "react";
import { SubmissionDetailProps } from "../types";

export function SubmissionDetail({
  id,
  basePath,
  navigate,
}: SubmissionDetailProps) {
  const { data: sub, loading } = useApi<any>(`/api/marine/submissions/${id}`);
  const { emit } = useEventBus();

  useEffect(() => {
    if (sub)
      emit("submission:selected", { submissionId: sub.id, lob: "marine" });
  }, [sub?.id]);

  if (loading) return <div>Loading...</div>;
  if (!sub) return <div>Not found</div>;

  return (
    <div>
      <button
        onClick={() => navigate(`${basePath}/submissions`)}
        style={{ marginBottom: 16 }}
      >
        ← Back
      </button>
      <h2>🚢 {sub.vesselName}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginBottom: 24,
        }}
      >
        <Field label="IMO Number" value={sub.imoNumber} />
        <Field
          label="Hull Value"
          value={`$${(sub.hullValue ?? 0).toLocaleString()}`}
        />
        <Field label="Voyage Route" value={sub.voyageRoute} />
        <Field label="Cargo Type" value={sub.cargoType} />
        <Field label="P&I Club" value={sub.piClub} />
        <Field label="Status" value={sub.status} />
      </div>
      <div
        style={{
          padding: 16,
          background: "#ebf8ff",
          borderRadius: 8,
          marginBottom: 16,
        }}
      >
        <h3>⚓ Negotiation Panel</h3>
        <button
          onClick={() => navigate(`${basePath}/submissions/${id}/negotiation`)}
          style={{
            background: "#3182ce",
            color: "white",
            padding: "8px 16px",
            borderRadius: 4,
            border: "none",
            cursor: "pointer",
          }}
        >
          Open Negotiation View
        </button>
      </div>
      <h4>Pipeline Progress</h4>
      <PipelineTimeline currentStage={sub.status} />
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ padding: 12, background: "#f7fafc", borderRadius: 6 }}>
      <div style={{ fontSize: 12, color: "#718096" }}>{label}</div>
      <div style={{ fontWeight: "bold" }}>{value}</div>
    </div>
  );
}
