interface AboutProps {
  title?: string;
  description?: string;
}

const About = ({ 
  title = "About Me", 
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
}: AboutProps) => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-indigo-900 tracking-wider uppercase">{title}</h2>
          <div className="w-16 h-px bg-indigo-400 mt-3"></div>
        </div>
        
        {/* Text content with elegant styling */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-1 h-24 bg-gradient-to-b from-indigo-400 to-blue-300 rounded-full"></div>
          <div className="pl-6">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-14 font-light">
              <span className="text-indigo-600 text-xl font-normal">"</span>
              {description}
              <span className="text-indigo-600 text-xl font-normal">"</span>
            </p>
          </div>
          
          {/* Skills section with elegant styling */}
          <div className="mt-16 relative">
            <div className="absolute top-0 left-0 w-1 h-16 bg-gradient-to-b from-blue-300 to-indigo-400 rounded-full"></div>
            <div className="pl-6">
              <h3 className="text-lg font-light text-indigo-800 mb-8 tracking-wider uppercase">Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-3">
                {['Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Java', 'C/C++', 'SQL', 'AWS', 'Git', 'REST APIs', 'AI/ML'].map((skill, index) => (
                  <div key={index} className="group">
                    <span className="font-light text-gray-700 border-b border-transparent group-hover:border-indigo-400 group-hover:text-indigo-700 transition-all duration-300 pb-1">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
