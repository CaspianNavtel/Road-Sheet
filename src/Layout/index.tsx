import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/Navbar';

const Layout: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedDarkMode);
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode.toString());
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
        fixed lg:static inset-y-0 left-0 z-50 lg:z-auto transform lg:transform-none transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
                <Sidebar />
            </div>

            {/* Main content area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <TopBar
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                    onMenuToggle={toggleSidebar}
                />

                <Outlet />
            </div>
        </div>
    );
};

export default Layout;