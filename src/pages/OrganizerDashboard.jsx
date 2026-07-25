import React from 'react'
import OrganizerSidebar from '../components/organizer/OrganizerSidebar'
import OrganizerHeader from '../components/organizer/OrganizerHeader'
import DashboardCards from '../components/organizer/DashboardCards'
import OrganizerCharts from '../components/organizer/OrganizerCharts'

function OrganizerDashboard() {
  return (
      <div className="flex bg-slate-950 min-h-screen">

            <OrganizerSidebar />

            <main className="flex-1 lg:ml-72">

                <OrganizerHeader />

                <div className="p-8">

                    <DashboardCards />
                    <OrganizerCharts/>

                </div>

            </main>

        </div>
  )
}

export default OrganizerDashboard
