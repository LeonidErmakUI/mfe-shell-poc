import { useEffect, useRef, useState } from "react";
import { getMount } from "./RemoteLoader.helpers";
import { RemoteProps } from "./RemoteLoader.types";

export function RemoteLoader({ lobSlug, basePath }: RemoteProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    let cancelled = false;

    getMount(lobSlug, { lobSlug, basePath })
      .then((mount) => !cancelled && mount(containerRef.current!))
      .catch((e: Error) => !cancelled && setError(e.message));

    return () => {
      cancelled = true;
    };
  }, [lobSlug, basePath]);

  if (error)
    return (
      <div style={{ padding: 32, textAlign: "center", color: "#c53030" }}>
        <h3>⚠️ Workbench unavailable</h3>
        <p>Could not load the {lobSlug} workbench.</p>
        <code style={{ fontSize: 12, color: "#718096" }}>{error}</code>
      </div>
    );

  return <div ref={containerRef} style={{ height: "100%" }} />;
}
