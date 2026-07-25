import AdminCards from "../components/admin/AdminCards";
import AdminCharts from "../components/admin/AdminCharts";
import AdminHeader from "../components/admin/AdminHeader";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminTables from "../components/admin/AdminTables";


export default function AdminDashboard() {
    return (
        <div className="flex bg-slate-950 min-h-screen">

            <AdminSidebar />

            <main className="flex-1 lg:ml-72">

                <AdminHeader />

                <div className="p-8">

                    <div className="min-h-screen bg-[#020617] text-white p-8">

                        {/* Statistics Cards */}
                        <AdminCards />

                        {/* Analytics */}
                        <AdminCharts />

                    </div>

                </div>

            </main>

        </div>
    );
}