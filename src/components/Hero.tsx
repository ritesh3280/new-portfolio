import type { CSSProperties } from 'react';

interface HeroProps {
  name: string;
  tagline: string;
  profileImage: string;
  backgroundImage: string;
}

const Hero = ({ name, tagline, profileImage, backgroundImage }: HeroProps) => {
  // Style for background image with fade effect
  const backgroundStyle: CSSProperties = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section id="home" className="h-[60vh] relative" style={backgroundStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 h-full flex items-center justify-center pt-16">
        <div className="flex flex-col items-center text-center max-w-3xl">
          {/* Profile image - centered at top */}
          <div className="mb-8">
            <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg p-1 bg-gradient-to-br from-indigo-200 to-blue-100 mx-auto">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          
          {/* Text content - centered below image */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">{name}</h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">{tagline}</p>
            
            {/* Buttons - centered */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://drive.google.com/file/d/1pnNzX4iWyEVHwmZ_XvtzX_NIu5Y4MVSk/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300 text-center shadow-md"
              >
                View Resume
              </a>
              <a 
                href="#contact" 
                className="px-6 py-2.5 bg-transparent border-2 border-indigo-300 text-white font-medium rounded-lg hover:bg-indigo-600 hover:border-transparent transition duration-300 text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
