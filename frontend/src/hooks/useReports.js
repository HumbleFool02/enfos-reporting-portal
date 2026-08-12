import { useCallback, useEffect, useState } from "react";
import { reportsApi } from "../api/reportsApi.js";

// Fetches the report metadata list for the landing page.
export function useReports() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadIndex, setReloadIndex] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError(null);

    reportsApi
      .getReports({ signal: controller.signal })
      .then((result) => {
        if (!controller.signal.aborted) setData(result);
      })
      .catch((err) => {
        if (!controller.signal.aborted) setError(err);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    // Aborts on cleanup; the aborted-checks above stop a superseded response from overwriting newer state.
    return () => controller.abort();
  }, [reloadIndex]);

  const refetch = useCallback(() => setReloadIndex((index) => index + 1), []);

  return { data, loading, error, refetch };
}
