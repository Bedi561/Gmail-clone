
import { FaBars, FaSearch, FaBell, FaCog, FaQuestionCircle } from 'react-icons/fa';

export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-4 md:px-6 h-16 bg-white border-b sticky top-0 z-50">
            <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full text-gray-700">
                    <FaBars className="text-xl" />
                </button>
                <a href="/" className="flex items-center gap-2">
                    <img src="data:image/png;base64,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" alt="Gmail" className="h-8 w-auto" />
                    <span className="text-xl font-semibold text-gray-700 hidden sm:inline">Gmail</span>
                </a>
            </div>
            
            <div className="flex-1 max-w-2xl mx-4">
                <form className="flex items-center">
                    <div className="relative flex-1">
                        <input 
                            type="text" 
                            placeholder="Search mail" 
                            className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                    </div>
                </form>
            </div>
            
            <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full text-gray-700">
                    <FaQuestionCircle className="text-xl" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full text-gray-700">
                    <FaCog className="text-xl" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full text-gray-700 relative">
                    <FaBell className="text-xl" />
                    <span className="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full px-1 transform translate-x-1/2 -translate-y-1/2">
                        3
                    </span>
                </button>
                <button className="overflow-hidden rounded-full">
                    <img 
                        src="https://i.pravatar.cc/300" 
                        alt="profile" 
                        className="w-8 h-8 object-cover rounded-full"
                    />
                </button>
            </div>
        </nav>
    );
};

