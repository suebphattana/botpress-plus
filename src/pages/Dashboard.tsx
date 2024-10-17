import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, LogOut, Settings, Menu } from 'lucide-react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logging out...');
    navigate('/login');
  };

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-20 p-2 rounded-md bg-gray-800 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>
      <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-10`}>
        <div className="h-full w-64 bg-gray-800 text-white flex flex-col">
          <div className="p-5">
            <h2 className="text-2xl font-semibold">Dashboard</h2>
          </div>
          <nav className="flex-1">
            <Link to="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
              <LayoutDashboard size={20} className="inline-block mr-2" />
              Dashboard
            </Link>
            <Link to="/dashboard/connections" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
              <Users size={20} className="inline-block mr-2" />
              Connections
            </Link>
          </nav>
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center mb-4">
              <img
                className="h-8 w-8 rounded-full mr-2"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User avatar"
              />
              <span className="font-medium">John Doe</span>
            </div>
            <button
              onClick={() => {/* Handle account settings */}}
              className="block w-full text-left py-2 px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              <Settings size={20} className="inline-block mr-2" />
              Account Settings
            </button>
            <button
              onClick={handleLogout}
              className="block w-full text-left py-2 px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              <LogOut size={20} className="inline-block mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const DashboardHome: React.FC = () => (
  <div className="p-6">
    <h1 className="text-3xl font-semibold mb-6">Welcome to Your Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <p>Your recent activity will be displayed here.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Statistics</h2>
        <p>Your statistics and metrics will be shown here.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <p>Shortcuts to common actions will be available here.</p>
      </div>
    </div>
  </div>
);

const Connections: React.FC = () => (
  <div className="p-6">
    <h1 className="text-3xl font-semibold mb-6">Your Connections</h1>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p>Your connections and network information will be displayed here.</p>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <Routes>
          <Route index element={<DashboardHome />} />
          <Route path="connections" element={<Connections />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;