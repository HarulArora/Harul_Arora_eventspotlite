import React from 'react';
import { FiSun, FiMoon, FiSearch } from 'react-icons/fi';

const Navbar = ({ searchQuery, setSearchQuery, toggleTheme, isDarkMode }) => (
    <nav className="bg-primary dark:bg-gray-800 p-5 flex justify-between items-center text-white">
        <div className="flex items-center">
            <img src="/assets/logo.png" alt="Logo" className="h-10 w-10 mr-3" />
            <h1 className="text-2xl font-bold">EventSpot Lite</h1>
        </div>
        <div className="flex items-center gap-4">
            <div className="flex items-center bg-white dark:bg-gray-700 rounded-md px-2 py-1">
                <FiSearch className="text-gray-500 mr-2" />
                <input
                    type="text"
                    placeholder="Search events..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="outline-none text-black dark:text-white bg-transparent"
                />
            </div>
            <button onClick={toggleTheme}>
                {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>
        </div>
    </nav>
);

export default Navbar;
