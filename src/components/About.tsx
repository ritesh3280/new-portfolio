import { useState } from 'react';
import h1 from '../assets/hPhotos/h1.jpeg';
import h2 from '../assets/hPhotos/h2.jpeg';
import h3 from '../assets/hPhotos/h3.JPG';
import h4 from '../assets/hPhotos/h4.JPG';
import h5 from '../assets/hPhotos/h5.JPG';

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
    <section id="about" className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white tracking-tight">
            {title}
          </h2>
          <div className="w-16 h-0.5 bg-red-500 mt-4 mx-auto"></div>
        </div>
        
        {/* Two column layout - Content LEFT, Photos RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* LEFT: Content card - Takes 3/5 width */}
          <div className="lg:col-span-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8 hover:border-red-500 transition-colors duration-300">
            {/* Description */}
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {description}
            </p>
            
            {/* Divider */}
            <div className="w-full h-px bg-gray-200 dark:bg-gray-700 my-6"></div>
            
            {/* Skills section */}
            <div className="space-y-4">
              {/* Languages */}
              <div>
                <h3 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'Java', 'JavaScript/TypeScript', 'C', 'OCaml', 'SQL'].map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-2.5 py-0.5 text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded hover:border-red-500 hover:text-red-500 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div>
                <h3 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">
                  Frameworks & Libraries
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {['React', 'Next.js', 'Node.js', 'Express', 'Flask', 'FastAPI', 'PyTorch', 'TensorFlow', 'Pandas'].map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-2.5 py-0.5 text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded hover:border-red-500 hover:text-red-500 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Platforms */}
              <div>
                <h3 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">
                  Tools & Platforms
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {['MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'Linux', 'Git', 'AWS', 'WebSockets', 'REST APIs'].map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-2.5 py-0.5 text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded hover:border-red-500 hover:text-red-500 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Photo gallery - Takes 2/5 width */}
          <div className="lg:col-span-2 space-y-4">
            {/* Top row - 2 photos */}
            <div className="grid grid-cols-2 gap-4">
              {/* Photo 1 */}
              <div 
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-red-500 transition-all duration-300 cursor-pointer hover:shadow-md"
                onClick={() => setSelectedImage(h1)}
              >
                <img 
                  src={h1} 
                  alt="Hackathon 1" 
                  className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Photo 2 */}
              <div 
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-red-500 transition-all duration-300 cursor-pointer hover:shadow-md"
                onClick={() => setSelectedImage(h2)}
              >
                <img 
                  src={h2} 
                  alt="Hackathon 2" 
                  className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Middle - Large featured photo */}
            <div 
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-red-500 transition-all duration-300 cursor-pointer hover:shadow-md"
              onClick={() => setSelectedImage(h3)}
            >
              <img 
                src={h3} 
                alt="Hackathon 3" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Bottom row - 2 photos */}
            <div className="grid grid-cols-2 gap-4">
              {/* Photo 4 */}
              <div 
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-red-500 transition-all duration-300 cursor-pointer hover:shadow-md"
                onClick={() => setSelectedImage(h4)}
              >
                <img 
                  src={h4} 
                  alt="Hackathon 4" 
                  className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Photo 5 */}
              <div 
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-red-500 transition-all duration-300 cursor-pointer hover:shadow-md"
                onClick={() => setSelectedImage(h5)}
              >
                <img 
                  src={h5} 
                  alt="Hackathon 5" 
                  className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimalistic Lightbox Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedImage(null)}
        >
          {/* Modal */}
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full bg-white dark:bg-gray-900 rounded-lg p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image */}
            <div className="rounded-lg overflow-hidden">
              <img 
                src={selectedImage} 
                alt="Hackathon" 
                className="w-full h-full object-contain max-h-[85vh]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
