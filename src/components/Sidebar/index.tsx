import React from 'react';
import { FileText, Users, Route } from 'lucide-react';
import Img from '../../assets/images/caspian.png';

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
      fixed top-0 left-0 h-full bg-gray-50 dark:bg-gray-800 transition-all duration-300 
      ${isOpen ? 'w-64' : 'w-0 md:w-64'}
      overflow-hidden
    `}>
            <div >
                <div className="mb-3">
                    <div className="flex mx-auto items-center justify-left">

                        <img src={Img} alt="Logo" className="h-20 p-4" />


                    </div>
                </div>

                <nav className="space-y-2 px-4">
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
                                        ? 'bg-gray-100 text-blue-500 shadow-md'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100  dark:hover:bg-gray-700'
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