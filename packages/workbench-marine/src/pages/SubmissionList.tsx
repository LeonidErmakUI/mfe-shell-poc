import { useApi } from "@mfe/workbench-shared";
import { SubmissionListProps } from "../types";

const th: React.CSSProperties = {
  padding: "8px 12px",
  textAlign: "left",
  borderBottom: "2px solid rgb(230 200 200)",
};
const td: React.CSSProperties = {
  padding: "8px 12px",
  borderBottom: "1px solid #e1e1e1",
};

export function SubmissionList({ basePath, navigate }: SubmissionListProps) {
  const { data, loading, error } = useApi<any[]>("/api/marine/submissions");

  if (loading) return <div>Loading submissions...</div>;
  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;

  return (
    <div>
      <h2>🚢 Marine Submissions</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#FFEDF0" }}>
            {["ID", "Vessel", "IMO", "Hull Value", "Route", "Stage"].map(
              (h) => (
                <th key={h} style={th}>
                  {h}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {data?.filter(Boolean).map((sub) => (
            <tr
              key={sub.id}
              onClick={() => navigate(`${basePath}/submissions/${sub.id}`)}
              style={{ cursor: "pointer" }}
            >
              <td style={td}>{sub.id ?? "—"}</td>
              <td style={td}>{sub.vesselName ?? "—"}</td>
              <td style={td}>{sub.imoNumber ?? "—"}</td>
              <td style={td}>${(sub.hullValue ?? 0).toLocaleString()}</td>
              <td style={td}>{sub.voyageRoute ?? "—"}</td>
              <td style={td}>
                <span
                  style={{
                    background: "#3182ce",
                    color: "white",
                    padding: "2px 8px",
                    borderRadius: 4,
                  }}
                >
                  {sub.status ?? "—"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
