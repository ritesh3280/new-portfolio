import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    
    console.log('Toggle clicked, newMode:', newMode);
    console.log('HTML classes before:', document.documentElement.classList.toString());
    
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    console.log('HTML classes after:', document.documentElement.classList.toString());
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-medium text-gray-900 dark:text-white">Portfolio</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-red-500 text-sm font-medium transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-red-500 text-sm font-medium transition-colors duration-300">
              About
            </a>
            <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-red-500 text-sm font-medium transition-colors duration-300">
              Experience
            </a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-red-500 text-sm font-medium transition-colors duration-300">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-red-500 text-sm font-medium transition-colors duration-300">
              Contact
            </a>
            
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none"
              style={{ backgroundColor: isDarkMode ? '#ef4444' : '#d1d5db' }}
            >
              <span
                className={`inline-block w-4 h-4 transform transition-transform duration-300 rounded-full bg-white ${
                  isDarkMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors duration-300"
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
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {/* Dark mode toggle for mobile */}
            <div className="flex items-center justify-between py-3 px-4">
              <span className="text-gray-600 dark:text-gray-300 text-base font-medium">Dark Mode</span>
              <button
                onClick={toggleDarkMode}
                className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none"
                style={{ backgroundColor: isDarkMode ? '#ef4444' : '#d1d5db' }}
              >
                <span
                  className={`inline-block w-4 h-4 transform transition-transform duration-300 rounded-full bg-white ${
                    isDarkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-red-500 hover:bg-gray-50 dark:hover:bg-gray-900 block py-3 px-4 text-base font-medium transition-all duration-300 rounded-lg">Home</a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-red-500 hover:bg-gray-50 dark:hover:bg-gray-900 block py-3 px-4 text-base font-medium transition-all duration-300 rounded-lg">About</a>
            <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-red-500 hover:bg-gray-50 dark:hover:bg-gray-900 block py-3 px-4 text-base font-medium transition-all duration-300 rounded-lg">Experience</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-red-500 hover:bg-gray-50 dark:hover:bg-gray-900 block py-3 px-4 text-base font-medium transition-all duration-300 rounded-lg">Projects</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-red-500 hover:bg-gray-50 dark:hover:bg-gray-900 block py-3 px-4 text-base font-medium transition-all duration-300 rounded-lg">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
