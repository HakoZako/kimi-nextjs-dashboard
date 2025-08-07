"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex">
        {/* Sidebar desktop (fixe à gauche) */}
        <div className="hidden lg:block lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 z-30">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
        {/* Sidebar mobile (overlay) */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* Main content */}
        <main className="flex-1 ml-0 lg:ml-64 min-h-0 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 sm:p-8 lg:p-12">
          {/* Bouton burger mobile */}
          <button
            type="button"
            className="lg:hidden fixed top-4 left-4 z-50 rounded-md p-2 bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700"
            onClick={() => setSidebarOpen(true)}
            aria-label="Ouvrir la navigation"
          >
            <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
