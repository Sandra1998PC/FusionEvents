import React from 'react'
import Sidebar from '../components/users/Sidebar'
import TopBar from '../components/users/TopBar'
import DashboardCards from '../components/users/DashboardCards'
import RecentActivity from '../components/users/RecentActivity'

function UsersDashboard() {
  return (
    <div className="flex bg-slate-950">

      <Sidebar />

      <div className="flex-1">

        <TopBar />

        <main className="p-8">

          {/* Dashboard Content */}

          <DashboardCards/>

          <RecentActivity/>

        </main>

      </div>

    </div>
  )
}

export default UsersDashboard
