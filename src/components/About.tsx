import { useState } from 'react';
import h1 from '../assets/hPhotos/h1.jpeg';
import h2 from '../assets/hPhotos/h2.jpeg';
import h3 from '../assets/hPhotos/h3.JPG';
import h4 from '../assets/hPhotos/h4.JPG';
import h5 from '../assets/hPhotos/h5.JPG';
import overlay2 from '../assets/hPhotos/overlay2.png';

interface AboutProps {
  title?: string;
  description?: string;
}

const About = ({ 
  title = "About Me", 
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
}: AboutProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* White background base */}
      <div className="absolute inset-0 bg-white"></div>
      
      {/* overlay2.png with gradient on top of white background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${overlay2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'rotate(180deg)',
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 tracking-wider uppercase drop-shadow-lg">{title}</h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mt-3 mx-auto"></div>
        </div>
        
        {/* Two column layout - Glass card LEFT, Photos RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* LEFT: Glass card with description and skills - Takes 3/5 width */}
          <div className="lg:col-span-3 relative backdrop-blur-3xl bg-gradient-to-br from-white/10 via-white/5 to-white/8 rounded-2xl p-6 md:p-8 border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
            {/* Inner glow effect - iridescent shimmer */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-300/10 via-pink-200/5 to-blue-300/10 rounded-2xl pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-white/15 via-transparent to-white/10 rounded-2xl pointer-events-none"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            
            <div className="relative">
              {/* Description */}
              <p className="text-sm md:text-base text-gray-800 leading-relaxed font-light mb-6">
                {description}
              </p>
              
              {/* Subtle divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400/40 to-transparent my-5"></div>
              
              {/* Skills section - no individual boxes */}
              <div>
                <h3 className="text-base md:text-lg font-light text-gray-800 mb-4 tracking-wider uppercase">Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-3">
                  {['Python', 'Java', 'Next.js', 'React', 'FastAPI', 'Flask', 'C', 'OCaml', 'PyTorch', 'LangChain', 'SQL', 'REST APIs'].map((skill, index) => (
                    <div key={index} className="group">
                      <span className="text-sm text-gray-800 font-light hover:text-gray-950 transition-colors duration-300 cursor-default">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Hackathon photos gallery - Takes 2/5 width */}
          <div className="lg:col-span-2 space-y-3">
            {/* Top row - 2 photos */}
            <div className="grid grid-cols-2 gap-3">
              {/* Photo 1 - Violet/Fuchsia glass with tilt */}
              <div className="relative group transform hover:-rotate-1 transition-transform duration-300 cursor-pointer" onClick={() => setSelectedImage(h1)}>
                <div className="relative backdrop-blur-2xl bg-gradient-to-br from-violet-200/15 via-white/8 to-fuchsia-200/15 rounded-xl p-2 border-2 border-white/30 shadow-[0_8px_32px_0_rgba(168,85,247,0.25)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-400/10 via-transparent to-fuchsia-400/10 rounded-xl pointer-events-none"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-400/25 to-fuchsia-400/25 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      src={h1} 
                      alt="Hackathon 1" 
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Photo 2 - Cyan/Blue glass with tilt */}
              <div className="relative group transform hover:rotate-1 transition-transform duration-300 cursor-pointer" onClick={() => setSelectedImage(h2)}>
                <div className="relative backdrop-blur-2xl bg-gradient-to-br from-cyan-200/15 via-white/8 to-blue-200/15 rounded-xl p-2 border-2 border-white/30 shadow-[0_8px_32px_0_rgba(59,130,246,0.25)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-400/10 rounded-xl pointer-events-none"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/25 to-blue-400/25 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      src={h2} 
                      alt="Hackathon 2" 
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Middle - Large featured photo */}
            <div className="relative group cursor-pointer" onClick={() => setSelectedImage(h3)}>
              <div className="relative backdrop-blur-3xl bg-gradient-to-br from-pink-200/15 via-white/8 to-orange-200/15 rounded-2xl p-2.5 border-2 border-white/30 shadow-[0_8px_32px_0_rgba(236,72,153,0.25)]">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 via-transparent to-orange-400/10 rounded-2xl pointer-events-none"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/25 via-purple-400/25 to-orange-400/25 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-t-2xl"></div>
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src={h3} 
                    alt="Hackathon 3" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Bottom row - 2 photos */}
            <div className="grid grid-cols-2 gap-3">
              {/* Photo 4 - Emerald/Teal glass */}
              <div className="relative group transform hover:rotate-1 transition-transform duration-300 cursor-pointer" onClick={() => setSelectedImage(h4)}>
                <div className="relative backdrop-blur-2xl bg-gradient-to-br from-emerald-200/15 via-white/8 to-teal-200/15 rounded-xl p-2 border-2 border-white/30 shadow-[0_8px_32px_0_rgba(16,185,129,0.25)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-teal-400/10 rounded-xl pointer-events-none"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/25 to-teal-400/25 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      src={h4} 
                      alt="Hackathon 4" 
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Photo 5 - Amber/Yellow glass */}
              <div className="relative group transform hover:-rotate-1 transition-transform duration-300 cursor-pointer" onClick={() => setSelectedImage(h5)}>
                <div className="relative backdrop-blur-2xl bg-gradient-to-br from-amber-200/15 via-white/8 to-yellow-200/15 rounded-xl p-2 border-2 border-white/30 shadow-[0_8px_32px_0_rgba(245,158,11,0.25)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-yellow-400/10 rounded-xl pointer-events-none"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/25 to-yellow-400/25 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      src={h5} 
                      alt="Hackathon 5" 
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glassmorphism Lightbox Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
          
          {/* Glass modal */}
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full backdrop-blur-3xl bg-gradient-to-br from-white/20 via-white/10 to-white/15 rounded-2xl p-2 md:p-3 border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl pointer-events-none"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 backdrop-blur-xl bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center border border-white/40 transition-all duration-300 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src={selectedImage} 
                alt="Hackathon" 
                className="w-full h-full object-contain max-h-[80vh]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
