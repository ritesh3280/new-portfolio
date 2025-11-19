import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-medium text-gray-900">Portfolio</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-red-500 text-sm font-medium transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-red-500 text-sm font-medium transition-colors duration-300">
              About
            </a>
            <a href="#experience" className="text-gray-600 hover:text-red-500 text-sm font-medium transition-colors duration-300">
              Experience
            </a>
            <a href="#projects" className="text-gray-600 hover:text-red-500 text-sm font-medium transition-colors duration-300">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 hover:text-red-500 text-sm font-medium transition-colors duration-300">
              Contact
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-red-500 transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="#home" className="text-gray-600 hover:text-red-500 hover:bg-gray-50 block py-3 px-4 text-base font-medium transition-all duration-300 rounded-lg">Home</a>
            <a href="#about" className="text-gray-600 hover:text-red-500 hover:bg-gray-50 block py-3 px-4 text-base font-medium transition-all duration-300 rounded-lg">About</a>
            <a href="#experience" className="text-gray-600 hover:text-red-500 hover:bg-gray-50 block py-3 px-4 text-base font-medium transition-all duration-300 rounded-lg">Experience</a>
            <a href="#projects" className="text-gray-600 hover:text-red-500 hover:bg-gray-50 block py-3 px-4 text-base font-medium transition-all duration-300 rounded-lg">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-red-500 hover:bg-gray-50 block py-3 px-4 text-base font-medium transition-all duration-300 rounded-lg">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
