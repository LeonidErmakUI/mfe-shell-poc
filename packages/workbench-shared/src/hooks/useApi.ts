import { useState, useEffect } from "react";
import { useShellAuth } from "./useShellAuth";

export function useApi<T>(path: string) {
  const { getToken } = useShellAuth();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchData() {
    setLoading(true);
    try {
      const token = await getToken();
      const bffUrl =
        (window as any).__shell__?.bffUrl || "http://localhost:4000";
      const res = await fetch(`${bffUrl}${path}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setData(await res.json());
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [path]);

  return { data, loading, error, refetch: fetchData };
}
