import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 border-b border-white/30 shadow-2xl shadow-black/5">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-white drop-shadow-2xl tracking-wide bg-gradient-to-r from-white to-white/80 bg-clip-text">Portfolio</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white/70 hover:text-white text-sm font-medium transition-all duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-300 group-hover:w-8 rounded-full"></span>
            </a>
            <a href="#about" className="text-white/70 hover:text-white text-sm font-medium transition-all duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-300 group-hover:w-8 rounded-full"></span>
            </a>
            <a href="#experience" className="text-white/70 hover:text-white text-sm font-medium transition-all duration-300 relative group">
              Experience
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-300 group-hover:w-8 rounded-full"></span>
            </a>
            <a href="#projects" className="text-white/70 hover:text-white text-sm font-medium transition-all duration-300 relative group">
              Projects
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-300 group-hover:w-8 rounded-full"></span>
            </a>
            <a href="#contact" className="text-white/70 hover:text-white text-sm font-medium transition-all duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-300 group-hover:w-8 rounded-full"></span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white/70 hover:text-white transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMenuOpen ? (
                <svg className="block h-6 w-6 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                /* Icon when menu is open */
                <svg className="block h-6 w-6 transition-transform duration-300 rotate-90" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
          <div className="absolute inset-x-0 top-full backdrop-blur-xl bg-gradient-to-b from-white/10 to-white/5 border-b border-white/20 shadow-2xl shadow-black/10">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a href="#home" className="text-white/70 hover:text-white block py-3 px-4 text-base font-medium transition-all duration-300 rounded-xl hover:bg-white/10 backdrop-blur-sm">Home</a>
              <a href="#about" className="text-white/70 hover:text-white block py-3 px-4 text-base font-medium transition-all duration-300 rounded-xl hover:bg-white/10 backdrop-blur-sm">About</a>
              <a href="#experience" className="text-white/70 hover:text-white block py-3 px-4 text-base font-medium transition-all duration-300 rounded-xl hover:bg-white/10 backdrop-blur-sm">Experience</a>
              <a href="#projects" className="text-white/70 hover:text-white block py-3 px-4 text-base font-medium transition-all duration-300 rounded-xl hover:bg-white/10 backdrop-blur-sm">Projects</a>
              <a href="#contact" className="text-white/70 hover:text-white block py-3 px-4 text-base font-medium transition-all duration-300 rounded-xl hover:bg-white/10 backdrop-blur-sm">Contact</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
