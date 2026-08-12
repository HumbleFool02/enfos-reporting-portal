
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

async function request(path, { signal } = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, { signal });

  if (!response.ok) {
    // Backend errors always return an ErrorResponse body with a `message` field.
    const errorBody = await response.json().catch(() => null);
    throw new Error(errorBody?.message || `Request failed with status ${response.status}`);
  }

  return response.json();
}

export const reportsApi = {
  getReports: (opts) => request("/reports", opts),
  getReportMeta: (reportId, opts) => request(`/reports/meta/${reportId}`, opts),
  getReportData: (reportId, opts) => request(`/reports/${reportId}`, opts),
};
