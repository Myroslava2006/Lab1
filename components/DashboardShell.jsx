'use client'
import { useState } from 'react'
import DashboardNav from './DashboardNav'
import SidebarToggle from './SidebarToggle'

export default function DashboardShell({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  return (
    <div className="dashboard">
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <SidebarToggle isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
        {sidebarOpen && <><h2>Dashboard</h2><DashboardNav /></>}
      </aside>
      <div className="content">{children}</div>
    </div>
  )
}
