import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

interface LayoutProps {
    children?: React.ReactNode;
}

const HomePage: React.FC<LayoutProps> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState('yol-vereqeleri');

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleMenuItemClick = (item: string) => {
        setActiveMenuItem(item);
        setSidebarOpen(false); // Close sidebar on mobile after selection
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Sidebar
                isOpen={sidebarOpen}
                activeItem={activeMenuItem}
                onItemClick={handleMenuItemClick}
            />

            <div className="md:ml-64 transition-all duration-300">
                <Navbar onMenuToggle={toggleSidebar} />

                <main className="p-6">
                    {children}
                </main>
            </div>

            {/* Mobile overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
};

export default HomePage;