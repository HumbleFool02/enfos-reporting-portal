import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import ReportDetailPage from "./pages/ReportDetailPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/reports/:reportId" element={<ReportDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
