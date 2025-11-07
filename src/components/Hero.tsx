import type { CSSProperties } from 'react';

interface HeroProps {
  name: string;
  tagline: string;
  subtitle?: string;
  profileImage: string;
  backgroundImage: string;
}

const Hero = ({ name, tagline, subtitle, profileImage, backgroundImage }: HeroProps) => {
  // Style for background image with enhanced glass effect
  const backgroundStyle: CSSProperties = {
    backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section id="home" className="h-[60vh] relative overflow-hidden" style={backgroundStyle}>
      {/* Glass overlay layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 h-full flex items-center justify-center pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center w-full max-w-6xl">
          {/* Text content with glass card effect - LEFT SIDE (3/5 width) */}
          <div className="lg:col-span-3 relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl shadow-black/20 order-2 lg:order-1">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
            
            <div className="relative text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white via-white to-white/90 bg-clip-text drop-shadow-2xl tracking-tight">{name}</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-3 font-light tracking-wide drop-shadow-lg">{tagline}</p>
              {subtitle && (
                <p className="text-lg md:text-xl text-white/80 mb-8 font-light leading-relaxed">{subtitle}</p>
              )}
              {!subtitle && <div className="mb-8"></div>}
              
              {/* Glass buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <a 
                  href="https://drive.google.com/file/d/1pnNzX4iWyEVHwmZ_XvtzX_NIu5Y4MVSk/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 backdrop-blur-xl bg-gradient-to-r from-white/20 via-white/15 to-white/20 text-white font-medium rounded-2xl border border-white/30 hover:border-white/50 transition-all duration-300 text-center shadow-xl hover:shadow-2xl hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">View Resume</span>
                </a>
                <a 
                  href="#contact" 
                  className="group relative px-8 py-4 backdrop-blur-xl bg-transparent border-2 border-white/40 text-white font-medium rounded-2xl hover:bg-white/10 hover:border-white/60 transition-all duration-300 text-center shadow-xl hover:shadow-2xl hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Get In Touch</span>
                </a>
              </div>
            </div>
          </div>

          {/* Unique floating face display - RIGHT SIDE (2/5 width) */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end lg:pr-4 order-1 lg:order-2">
            <div className="relative lg:translate-x-16">
              {/* Main profile image with morphing glass effect */}
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                {/* Outer rotating glass ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-spin" style={{animationDuration: '20s'}}></div>
                
                {/* Middle glass layer */}
                <div className="absolute inset-3 rounded-full backdrop-blur-xl bg-gradient-to-br from-white/15 via-white/5 to-white/15 border border-white/30 shadow-2xl">
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
                  
                  {/* Profile image */}
                  <div className="absolute inset-4 rounded-full overflow-hidden border border-white/20 backdrop-blur-sm">
                    <img 
                      src={profileImage} 
                      alt="Profile" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating glass orbs around the image */}
              <div className="absolute -top-6 -right-6 w-8 h-8 bg-white/20 rounded-full backdrop-blur-md animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
              <div className="absolute top-1/4 -left-8 w-6 h-6 bg-white/15 rounded-full backdrop-blur-md animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
              <div className="absolute -bottom-8 left-1/3 w-7 h-7 bg-white/25 rounded-full backdrop-blur-md animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
              <div className="absolute top-1/2 -right-10 w-5 h-5 bg-white/30 rounded-full backdrop-blur-md animate-pulse"></div>
              
              {/* Floating glass fragments */}
              <div className="absolute top-12 -left-16 w-12 h-3 bg-white/10 rounded-full backdrop-blur-md transform rotate-45 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-16 -right-14 w-10 h-3 bg-white/15 rounded-full backdrop-blur-md transform -rotate-12 animate-pulse" style={{animationDelay: '1.5s'}}></div>
              
              {/* Geometric glass shapes */}
              <div className="absolute -top-12 left-1/4 w-6 h-6 bg-white/20 backdrop-blur-md transform rotate-45 animate-spin" style={{animationDuration: '15s'}}></div>
              <div className="absolute bottom-6 -left-12 w-4 h-8 bg-white/15 backdrop-blur-md rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
