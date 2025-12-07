import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <Outlet />
      </main>
    </div>
  );
}
