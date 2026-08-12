import { useCallback, useEffect, useState } from "react";
import { reportsApi } from "../api/reportsApi.js";

// Fetches one report's metadata + row data together. data is shaped { meta, rows }.
export function useReportData(reportId) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadIndex, setReloadIndex] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError(null);

    // Switching reports quickly fires a new effect before the previous one resolves - aborted-checks below prevent a stale response overwriting newer data.
    Promise.all([
      reportsApi.getReportMeta(reportId, { signal: controller.signal }),
      reportsApi.getReportData(reportId, { signal: controller.signal }),
    ])
      .then(([meta, rows]) => {
        if (!controller.signal.aborted) setData({ meta, rows });
      })
      .catch((err) => {
        if (!controller.signal.aborted) setError(err);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [reportId, reloadIndex]);

  const refetch = useCallback(() => setReloadIndex((index) => index + 1), []);

  return { data, loading, error, refetch };
}
