interface FooterProps {
  name?: string;
  year?: number;
}

const Footer = ({ 
  name = "Your Name",
  year = new Date().getFullYear()
}: FooterProps) => {
  return (
    <footer className="bg-indigo-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-indigo-200">© {year} {name}. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/ritesh3280" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-200 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/rthipparthi/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-200 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="mailto:rthippar@umd.edu" 
              className="text-indigo-200 hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a 
              href="https://devpost.com/ritesh3280" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-200 hover:text-white transition-colors duration-300"
              aria-label="Devpost"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 280.3 242" fill="currentColor">
                <path d="M133.7,76H118v90h15.7V76z M234.3,76H142v38h0.3c0,0,10.8-14,32.5-14c21.8,0,40.2,13.4,40.2,40.8 C215,167.3,197.9,180,173,180c-19.4,0-32.3-10.5-32.3-10.5V242h19.2v-51.2c0,0,8.8,5.1,23.5,5.1c34.2,0,52-27.4,52-59.5 C235.8,93.9,212.4,76,234.3,76z M52.5,169.5c24.6,0,49.3-19.4,49.3-46.9c0-27.4-24.8-46.9-49.3-46.9H0v166h19.2v-72.2H52.5z M19.2,93.9h33.4c16.2,0,29.9,11.5,29.9,28.8c0,17.3-13.7,28.8-29.9,28.8H19.2V93.9z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-indigo-800 pt-8">
          <nav className="flex flex-wrap justify-center space-x-6">
            <a href="#home" className="text-sm text-indigo-200 hover:text-white mb-2 transition-colors duration-300">Home</a>
            <a href="#about" className="text-sm text-indigo-200 hover:text-white mb-2 transition-colors duration-300">About</a>
            <a href="#experience" className="text-sm text-indigo-200 hover:text-white mb-2 transition-colors duration-300">Experience</a>
            <a href="#projects" className="text-sm text-indigo-200 hover:text-white mb-2 transition-colors duration-300">Projects</a>
            <a href="#contact" className="text-sm text-indigo-200 hover:text-white mb-2 transition-colors duration-300">Contact</a>
          </nav>
          
          <p className="text-xs text-center text-indigo-300 mt-6">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
