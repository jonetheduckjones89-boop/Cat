import React from "react";
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import FilesPage from "./pages/FilesPage";
import ReviewPage from "./pages/ReviewPage";
import DashboardPage from "./pages/DashboardPage";
import PatientsPage from "./pages/PatientsPage";
import SchedulePage from "./pages/SchedulePage";

function Layout() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <main className="container mx-auto py-8">
        <Outlet />
      </main>
    </div>
  );
}

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