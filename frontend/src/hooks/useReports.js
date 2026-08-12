import { useCallback, useEffect, useState } from "react";
import { reportsApi } from "../api/reportsApi.js";

// Fetches the report metadata list for the landing page.
export function useReports() {
  // useState holds values that should trigger a re-render when they change -
  // data/loading/error each need their own render whenever they update.
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadIndex, setReloadIndex] = useState(0);

  // useEffect runs the fetch as a side effect after render, and re-runs
  // whenever reloadIndex changes (i.e. whenever refetch() is called).
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

    // Cleanup runs before the next effect (or on unmount) and aborts this
    // request. The `controller.signal.aborted` guards above then ensure a
    // slow, superseded response can never overwrite newer state.
    return () => controller.abort();
  }, [reloadIndex]);

  // useCallback keeps a stable function identity across renders so a
  // <button onClick={refetch}> doesn't need a new prop every render.
  const refetch = useCallback(() => setReloadIndex((index) => index + 1), []);

  return { data, loading, error, refetch };
}
