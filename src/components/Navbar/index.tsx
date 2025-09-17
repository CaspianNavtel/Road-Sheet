import React, { useState } from 'react';
import { Moon, Sun, ChevronDown, Menu } from 'lucide-react';

interface TopBarProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
    onMenuToggle: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ darkMode, toggleDarkMode, onMenuToggle }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
            <div className="flex items-center justify-between">
                <button
                    onClick={onMenuToggle}
                    className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                    <Menu className="w-5 h-5" />
                </button>

                <div className="flex-1" />

                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? (
                            <Sun className="w-5 h-5" />
                        ) : (
                            <Moon className="w-5 h-5" />
                        )}
                    </button>

                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-medium text-sm">C</span>
                            </div>
                            <span className="font-medium">cahan</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>

                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    Profil
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    Parametrlər
                                </a>
                                <hr className="my-1 border-gray-200 dark:border-gray-700" />
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    Çıxış
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopBar;