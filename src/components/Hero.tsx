import bgHero from '../assets/bgHero.png';

interface HeroProps {
  name: string;
  tagline: string;
  subtitle?: string;
  profileImage: string;
  backgroundImage: string;
  email: string;
  github: string;
  linkedin: string;
  devpost: string;
}

const Hero = ({ name, tagline, subtitle, github, linkedin, devpost }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen bg-white flex items-center relative">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundSize: '120%',
          backgroundPosition: 'center 80%',
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(180deg)',
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="lg:col-span-2">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-4 tracking-tight leading-tight">
              {name}
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 mb-4 font-light">
              {tagline}
            </p>
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-500 mb-8 leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}
            {!subtitle && <div className="mb-8"></div>}
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://drive.google.com/file/d/1pnNzX4iWyEVHwmZ_XvtzX_NIu5Y4MVSk/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-all duration-300 text-center shadow-sm hover:shadow-md"
              >
                View Resume
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-red-500 hover:text-red-500 transition-all duration-300 text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right side - Connect with me */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Connect with me</h3>
            <div className="space-y-3">
              {/* LinkedIn */}
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-red-500 transition-all duration-300 hover:shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-sm font-medium text-gray-900">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-red-500 transition-all duration-300 hover:shadow-sm"
              >
                <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-900">GitHub</span>
              </a>

              {/* DevPost */}
              <a
                href={devpost}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-red-500 transition-all duration-300 hover:shadow-sm"
              >
                <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31c0 4.436-3.21 6.302-6.456 6.302H7.595z"/>
                </svg>
                <span className="text-sm font-medium text-gray-900">DevPost</span>
              </a>

              {/* Resume */}
              <a
                href="https://drive.google.com/file/d/1pnNzX4iWyEVHwmZ_XvtzX_NIu5Y4MVSk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-red-500 transition-all duration-300 hover:shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-sm font-medium text-gray-900">Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
