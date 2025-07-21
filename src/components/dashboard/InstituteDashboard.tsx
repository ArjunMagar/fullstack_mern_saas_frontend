// components/dashboard/InstituteDashboard.tsx
"use client";
import InstituteSidebar from "../sidebar/InstituteSidebar";

// only if it uses hooks like useState, useEffect, etc.

export default function InstituteDashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cordes Admin Dashboard</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
        {/* Sidebar */}
        <InstituteSidebar />
        {/* Main Content */}
        <div className="ml-64">
          {/* Top Header */}
          <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">
                    Dashboard Overview
                  </h1>
                  <p className="text-gray-600 text-sm mt-1">
                    Welcome back, here&apos;s what&apos;s happening today
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cordes-accent focus:border-transparent outline-none"
                    />
                  </div>
                  <div className="relative">
                    <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                      <i className="fas fa-bell text-xl" />
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        3
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* Main Dashboard Content */}
          {children}
        </div>
      </div>
    </>
  );
}
