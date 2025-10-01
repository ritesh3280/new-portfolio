import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white bg-opacity-95 shadow-sm fixed w-full top-0 z-10 border-b border-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-indigo-900">Portfolio</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#home" className="text-gray-700 hover:text-indigo-700 px-3 py-2 rounded-md text-sm font-medium border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300">Home</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-700 px-3 py-2 rounded-md text-sm font-medium border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300">About</a>
            <a href="#experience" className="text-gray-700 hover:text-indigo-700 px-3 py-2 rounded-md text-sm font-medium border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300">Experience</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-700 px-3 py-2 rounded-md text-sm font-medium border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-700 px-3 py-2 rounded-md text-sm font-medium border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300">Contact</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                /* Icon when menu is open */
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="text-gray-700 hover:text-indigo-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-50 transition-colors duration-300">Home</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-50 transition-colors duration-300">About</a>
            <a href="#experience" className="text-gray-700 hover:text-indigo-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-50 transition-colors duration-300">Experience</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-50 transition-colors duration-300">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-50 transition-colors duration-300">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
