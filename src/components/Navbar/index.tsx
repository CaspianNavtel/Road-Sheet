import React, { useState } from 'react';
import { Menu, Sun, ChevronDown, User } from 'lucide-react';


interface HeaderProps {
    onMenuToggle?: () => void;
    isOpen?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isOpen, onMenuToggle }) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className={`
  fixed top-0 h-16 bg-white dark:bg-gray-800 shadow z-40 transition-all duration-300
  ${isOpen ? 'left-64 w-[calc(100%-16rem)]' : 'left-0 w-full md:left-64 md:w-[calc(100%-16rem)]'}
`}>
            {/* Left - Hamburger Menu */}
            <div className='flex items-center justify-between h-full px-4 sm:px-6 lg:px-8'>
                <button
                    onClick={onMenuToggle}
                    className="w-10 h-10 flex z-40 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                    <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>

                {/* Center spacer for mobile */}
                <div className="flex-1 md:hidden"></div>

                {/* Right - Theme Toggle & Profile */}
                <div className="flex items-center gap-3 sm:gap-4">
                    {/* Dark/Light Mode Toggle */}

                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </button>

                    {/* Username with dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                                <User className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                            </div>
                            <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">
                                cohan
                            </span>
                            <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </button>

                        {/* Dropdown Menu */}
                        {dropdownOpen && (
                            <>
                                {/* Mobile backdrop */}
                                <div
                                    className="fixed inset-0 z-10 md:hidden"
                                    onClick={() => setDropdownOpen(false)}
                                />

                                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-20">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        Profile
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        Settings
                                    </a>
                                    <hr className="my-2 border-gray-200 dark:border-gray-700" />
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        Sign out
                                    </a>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;