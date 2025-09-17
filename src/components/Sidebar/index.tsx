import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Users, Route } from 'lucide-react';

const Sidebar: React.FC = () => {
    const location = useLocation();

    const navigationItems = [
        { id: 'travel-docs', label: 'Yol vərəqələri', icon: FileText, path: '/' },
        { id: 'drivers', label: 'Sürücülər', icon: Users, path: '/drivers' },
        { id: 'routes', label: 'Marşrutlar', icon: Route, path: '/routes' },
    ];

    return (
        <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen flex flex-col">
            <div className="p-6">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">CN</span>
                    </div>
                    <div>
                        <div className="font-bold text-gray-900 dark:text-white text-sm">CASPIAN</div>
                        <div className="text-blue-600 dark:text-blue-400 text-xs font-medium">NavTel</div>
                        <div className="text-gray-500 dark:text-gray-400 text-xs">İqtisadi-bələdlər</div>
                    </div>
                </div>
            </div>

            <nav className="flex-1 px-4">
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 px-2">
                    MENU
                </div>
                <ul className="space-y-2">
                    {navigationItems.map((item) => {
                        const IconComponent = item.icon;
                        const isActive = location.pathname === item.path;

                        return (
                            <li key={item.id}>
                                <Link
                                    to={item.path}
                                    className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white'
                                        }`}
                                >
                                    <IconComponent className="w-4 h-4" />
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;