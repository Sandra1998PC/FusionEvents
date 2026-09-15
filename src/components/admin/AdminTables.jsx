import React, { useEffect, useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import { deleteUserAPI, getAllUsersAPI, updateUserStatusAPI } from "../services/allAPIs";
import Swal from "sweetalert2";
import ViewUserModal from "./ViewUserModal";
import UserApprovalModal from "./UserApprovalModal";
import Loader from "../../pages/Loader";

const badgeColor = (status) => {
    switch (status) {
        case "Verified":
            return "bg-green-500/20 text-green-400";
        case "Blocked":
            return "bg-red-500/20 text-red-400";
        default:
            return "bg-slate-500/20 text-slate-300";
    }
};

const iconBtn =
    "p-2 rounded-lg transition hover:bg-slate-700 hover:text-cyan-400";

function AdminTables() {
    const [users, setUsers] = useState([])
    const [id, setId] = useState(null)
    const [selectedUser, setSelectedUser] = useState(null);
    const [showUserModal, setShowUserModal] = useState(false);
    const [showApprovalModal, setShowApprovalModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;
    const [loader,setLoader] = useState(false)

    const handleViewUser = (user) => {
        setSelectedUser(user);
        setShowUserModal(true);
    };

    const handleEditUser = (user) => {
        setSelectedUser(user);
        setShowApprovalModal(true);
    };

    const getAllUserData = async () => {
        setLoader(true)
        try {
            const result = await getAllUsersAPI()
            if (result.status == 200) {
                setUsers(result.data.allUsers)
            }
            else {
                Swal.fire({
                    title: "Something Went wrong !!!",
                    icon: "error"
                });
            }
        }
        catch (error) {
            Swal.fire({
                title: "Something Went wrong !!!",
                icon: "error"
            });
        }
        setLoader(false)
    }

    const handleStatusUpdate = async (userId, status) => {
        setLoader(true)
        try {
            const result = await updateUserStatusAPI(userId, status);
            if (result.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Status Updated",
                    text: `User has been ${status.toLowerCase()}.`,
                    timer: 1500,
                    showConfirmButton: false
                });
                setShowApprovalModal(false);
                getAllUserData();
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Update Failed",
                text: "Unable to update user status."
            });
        }
        setLoader(false)
    };

    const deleteUser = async (userID) => {
        setLoader(true)
            try{
                const deleteResult = await deleteUserAPI(userID);
                console.log("Delete API Result:", deleteResult);
                if (deleteResult.status === 200) {
                    Swal.fire({
                        title: "User Deleted Successfully",
                        icon: "success"
                    });
                    getAllUserData(); // Refresh the users list after deletion
                } else {
                    Swal.fire({
                        title: "Something Went Wrong !!!",
                        icon: "error"
                    });
                }

            }catch (error) {
                console.log("API Error:", error);
                Swal.fire({
                    title: "Something Went Wrong !!!",
                    icon: "error"
                });
            }
            setLoader(false)
        }

    const totalPages = Math.ceil((users.length - 1) / usersPerPage);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;

    const currentUsers = users.filter(data => data._id !== id).slice(
        indexOfFirstUser,
        indexOfLastUser
    );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem("user"))
        console.log("data : ", data)
        setId(data._id)
        getAllUserData()
    }, [])
    return (
        <div className="flex bg-slate-950 min-h-screen">

            <AdminSidebar />
            {loader ? (<Loader/>) :
            (<main className="flex-1 lg:ml-72">

                <AdminHeader />

                <div className="p-8">
                    {showUserModal && (
                        <ViewUserModal
                            user={selectedUser}
                            onClose={() => setShowUserModal(false)}
                        />
                    )}

                    {showApprovalModal && (
                        <UserApprovalModal
                            user={selectedUser}
                            onClose={() => setShowApprovalModal(false)}
                            onStatusUpdate={handleStatusUpdate}
                        />
                    )}

                    <div className="min-h-screen bg-[#020617] text-white p-8">

                        <div className="space-y-10">

                            {/* USERS TABLE */}

                            <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">

                                <div className="px-8 py-6 border-b border-slate-800 flex items-center justify-between">

                                    <h2 className="text-xl font-bold text-white">
                                        Users
                                    </h2>

                                    {/* <button className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition">
                                        View All
                                    </button> */}

                                </div>

                                <div className="overflow-x-auto">

                                    <table className="w-full">

                                        <thead className="bg-slate-950">

                                            <tr className="text-slate-400">

                                                <th className="text-left px-6 py-4">Name</th>

                                                <th className="text-left px-6 py-4">Role</th>

                                                <th className="text-left px-6 py-4">Email</th>

                                                <th className="text-left px-6 py-4">Status</th>

                                                <th className="text-center px-6 py-4">
                                                    Actions
                                                </th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            {currentUsers.map((user) => (

                                                <tr
                                                    key={user._id}
                                                    className="border-b border-slate-800 hover:bg-slate-800/40 transition"
                                                >
                                                    <td className="px-6 py-5 text-white font-medium">
                                                        {user.username}
                                                    </td>

                                                    <td className="px-6 py-5 text-slate-300">
                                                        {user.role}
                                                    </td>

                                                    <td className="px-6 py-5 text-slate-400">
                                                        {user.email}
                                                    </td>

                                                    <td className="px-6 py-5">

                                                        <span
                                                            className={`px-4 py-1 rounded-full text-sm font-medium ${badgeColor(
                                                                user.status
                                                            )}`}
                                                        >
                                                            {user.status}
                                                        </span>

                                                    </td>

                                                    <td className="px-6 py-5">

                                                        <div className="flex justify-center gap-3">

                                                            <button className={iconBtn} onClick={() => handleViewUser(user)}>
                                                                <Eye size={18} />
                                                            </button>

                                                            <button className={iconBtn} onClick={() => handleEditUser(user)}>
                                                                <Pencil size={18} />
                                                            </button>

                                                            <button className="p-2 rounded-lg hover:bg-red-500/20 hover:text-red-400 transition" onClick={() => deleteUser(user._id)}>
                                                                <Trash2 size={18} />
                                                            </button>

                                                        </div>

                                                    </td>

                                                </tr>

                                            ))}

                                        </tbody>

                                    </table>
                                    <div className="flex items-center justify-between border-t border-slate-800 px-6 py-4">

                                        {/* Showing information */}
                                        <p className="text-sm text-slate-400">
                                            Showing{" "}
                                            <span className="text-white font-medium">
                                                {users.length === 0 ? 0 : indexOfFirstUser + 1}
                                            </span>
                                            {" "}to{" "}
                                            <span className="text-white font-medium">
                                                {Math.min(indexOfLastUser, users.length)}
                                            </span>
                                            {" "}of{" "}
                                            <span className="text-white font-medium">
                                                {users.length - 1}
                                            </span>
                                            {" "}users
                                        </p>

                                        {/* Pagination */}
                                        <div className="flex items-center gap-2">

                                            {/* Previous */}
                                            <button
                                                onClick={() => setCurrentPage(currentPage - 1)}
                                                disabled={currentPage === 1}
                                                className="px-3 py-2 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition"
                                            >
                                                Previous
                                            </button>

                                            {/* Page Numbers */}
                                            {Array.from({ length: totalPages }, (_, index) => (
                                                <button
                                                    key={index + 1}
                                                    onClick={() => handlePageChange(index + 1)}
                                                    className={`w-9 h-9 rounded-lg transition ${currentPage === index + 1
                                                        ? "bg-cyan-500 text-white"
                                                        : "border border-slate-700 text-slate-300 hover:bg-slate-800"
                                                        }`}
                                                >
                                                    {index + 1}
                                                </button>
                                            ))}

                                            {/* Next */}
                                            <button
                                                onClick={() => setCurrentPage(currentPage + 1)}
                                                disabled={currentPage === totalPages || totalPages === 0}
                                                className="px-3 py-2 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition"
                                            >
                                                Next
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </main>)}

        </div>
    );
}

export default AdminTables;