import React from 'react';
import { FileText, Users, Route } from 'lucide-react';

interface SidebarProps {
    isOpen: boolean;
    activeItem: string;
    onItemClick: (item: string) => void;
}

const menuItems = [
    { id: 'yol-vereqeleri', label: 'Yol vərəqələri', icon: FileText },
    { id: 'suruculer', label: 'Sürücülər', icon: Users },
    { id: 'marsrutlar', label: 'Marşrutlar', icon: Route },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeItem, onItemClick }) => {
    return (
        <div className={`
      fixed left-0 top-0 h-full bg-gray-50 dark:bg-gray-800 transition-all duration-300 z-30
      ${isOpen ? 'w-64' : 'w-0 md:w-64'}
      overflow-hidden
    `}>
            <div className="p-6">
                <div className="mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">A</span>
                        </div>
                        <div>
                            <h1 className="text-sm font-semibold text-gray-900 dark:text-white">ASPLANNet</h1>
                            <p className="text-xs text-gray-600 dark:text-gray-400">İqtisadi təhlil</p>
                        </div>
                    </div>
                </div>

                <nav className="space-y-2">
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                        MENU
                    </div>
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => onItemClick(item.id)}
                                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200
                  ${activeItem === item.id
                                        ? 'bg-blue-500 text-white shadow-md'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                    }
                `}
                            >
                                <Icon size={20} />
                                <span className="font-medium">{item.label}</span>
                            </button>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;