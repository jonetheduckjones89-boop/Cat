import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import FilesPage from "./pages/FilesPage";
import ReviewPage from "./pages/ReviewPage";
import DashboardPage from "./pages/DashboardPage";
import PatientsPage from "./pages/PatientsPage";
import SchedulePage from "./pages/SchedulePage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="patients" element={<PatientsPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="files" element={<FilesPage />} />
          <Route path="ai-review" element={<ReviewPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
