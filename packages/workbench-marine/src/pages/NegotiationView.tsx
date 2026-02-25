import { NegotiationViewProps } from "../types";

export function NegotiationView({
  id,
  basePath,
  navigate,
}: NegotiationViewProps) {
  return (
    <div>
      <button onClick={() => navigate(`${basePath}/submissions/${id}`)}>
        ← Back to Detail
      </button>
      <h2>⚓ Negotiation View — {id}</h2>
      <div
        style={{ border: "1px solid #bee3f8", padding: 16, borderRadius: 8 }}
      >
        <strong>Current Offer:</strong> $38,250,000 (85% of hull value)
        <br />
        <br />
        <button
          style={{
            background: "#48bb78",
            color: "white",
            padding: "8px 16px",
            borderRadius: 4,
            border: "none",
            cursor: "pointer",
          }}
        >
          Accept
        </button>{" "}
        <button
          style={{
            background: "#e53e3e",
            color: "white",
            padding: "8px 16px",
            borderRadius: 4,
            border: "none",
            cursor: "pointer",
          }}
        >
          Counter
        </button>
      </div>
    </div>
  );
}
