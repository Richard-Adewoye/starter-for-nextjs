// pages/admin.tsx
import React, { useState } from "react";

export default function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-200">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white flex flex-col transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 sm:static sm:flex`}
      >
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          Dashboard
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="block p-2 rounded hover:bg-gray-700">
            Dashboard
          </a>
          <a href="#" className="block p-2 rounded hover:bg-gray-700">
            Newsletter Management
          </a>
          <a href="#" className="block p-2 rounded hover:bg-gray-700">
            User Messages
          </a>
          <a href="#" className="block p-2 rounded hover:bg-gray-700">
            User Database
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 ml-0 sm:ml-64 bg-gray-950">
        {/* Mobile toggle button */}
        <button
          className="sm:hidden mb-4 p-2 bg-gray-900 text-white rounded"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰ Menu
        </button>

        {/* Quick Stats */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Quick Statistics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-800 rounded-lg shadow border border-gray-700">
              <p className="text-gray-400">Total Number of Registered Clients</p>
              <p className="text-3xl font-bold text-white">5,000</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow border border-gray-700">
              <p className="text-gray-400">Newsletter Subscribers</p>
              <p className="text-3xl font-bold text-white">9,325</p>
            </div>
          </div>
        </section>

        {/* User Management */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">User Management</h2>
          <div className="bg-gray-800 rounded-lg shadow border border-gray-700 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-700 text-gray-300">
                <tr>
                  <th className="px-4 py-2 text-left">User ID</th>
                  <th className="px-4 py-2 text-left">Username</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["E4", "00600", "NPOM", "1"],
                  ["E2", "00600", "MPOM", "1"],
                  ["E4", "50200", "NPOM", "1"],
                  ["E3", "20000", "MPOM", "1"],
                ].map(([id, user, email, status], idx) => (
                  <tr key={idx} className="border-t border-gray-700 hover:bg-gray-700/40">
                    <td className="px-4 py-2">{id}</td>
                    <td className="px-4 py-2">{user}</td>
                    <td className="px-4 py-2">{email}</td>
                    <td className="px-4 py-2">{status}</td>
                    <td className="px-4 py-2 text-blue-400 cursor-pointer">Actions</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* User Messages */}
        <section>
          <h2 className="text-xl font-semibold mb-4">User Messages</h2>
          <div className="bg-gray-800 rounded-lg shadow border border-gray-700 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-700 text-gray-300">
                <tr>
                  <th className="px-4 py-2 text-left">Message ID</th>
                  <th className="px-4 py-2 text-left">Sender</th>
                  <th className="px-4 py-2 text-left">Subject</th>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["MM", "24008", "U22", "CATUEHPOIM", "Open"],
                  ["NH", "26631", "U23", "CATUEHPOIM", "Open"],
                  ["MM", "20633", "U22", "CATUEHPOIM", "Closed"],
                  ["RH", "24031", "U22", "CATUEHPOIM", "Pending"],
                ].map(([id, sender, subject, date, status], idx) => (
                  <tr key={idx} className="border-t border-gray-700 hover:bg-gray-700/40">
                    <td className="px-4 py-2">{id}</td>
                    <td className="px-4 py-2">{sender}</td>
                    <td className="px-4 py-2">{subject}</td>
                    <td className="px-4 py-2">{date}</td>
                    <td className="px-4 py-2">{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
