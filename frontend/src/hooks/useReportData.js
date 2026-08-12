import { useCallback, useEffect, useState } from "react";
import { reportsApi } from "../api/reportsApi.js";

// Fetches one report's metadata + row data together for the detail page.
// data is shaped { meta, rows } - same { data, loading, error } contract as
// useReports, just a richer `data` for this page's two needs.
export function useReportData(reportId) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadIndex, setReloadIndex] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError(null);

    // This is the real race condition case: switching reports quickly fires
    // a new effect (new reportId) before the previous one resolves. Without
    // the aborted-check guards below, a slow response for the *previous*
    // report could land after the new one and overwrite its data.
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
