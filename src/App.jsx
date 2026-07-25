import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import UsersDashboard from './pages/UsersDashboard';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Ticket from './pages/Ticket';
import UserProfile from './pages/UserProfile';
import UserNotifications from './pages/UserNotifications';
import OrganizerDashboard from './pages/OrganizerDashboard';
import ManageEventsTable from './components/organizer/ManageEventsTable';
import CreateEvent from './pages/CreateEvent';
import OrganizerNotifications from './pages/OrganizerNotifications';
import AdminDashboard from './pages/AdminDashboard';
import AdminTables from './components/admin/AdminTables';
import AdminOrganizer from './components/admin/AdminOrganizer';
import AdminNotifications from './components/admin/AdminNotifications';
import AdminProfile from './components/admin/AdminProfile';
import OrganizerProfile from './components/organizer/OrganizerProfile';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users/:id/dashboard" element={<UsersDashboard />} />
        <Route path="/users/:id/events" element={<Events />} />
        <Route path="/users/:id/events/details" element={<EventDetails />} />
        <Route path="/users/:id/tickets" element={<Ticket />} />
        <Route path="/users/:id/profile" element={<UserProfile />} />
        <Route path="/users/:id/notifications" element={<UserNotifications />} />
        <Route path="/organizer/:id/dashboard" element={<OrganizerDashboard />} />
        <Route path="/organizer/:id/manageevents" element={<ManageEventsTable />} />
        <Route path="/organizer/:id/createevent" element={<CreateEvent />} />
        <Route path="/organizer/:id/notifications" element={<OrganizerNotifications />} />
        <Route path="/organizer/:id/profile" element={<OrganizerProfile />} />
        <Route path="/admin/:id/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/:id/usermanagement" element={<AdminTables />} />
        <Route path="/admin/:id/eventmanagement" element={<AdminOrganizer />} />
        <Route path="/admin/:id/notifications" element={<AdminNotifications />} />
         <Route path="/admin/:id/profile" element={<AdminProfile />} />
      </Routes>
    </>
  )
}

export default App
