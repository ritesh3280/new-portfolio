interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
}

interface ExperienceProps {
  experiences?: ExperienceItem[];
}

const Experience = ({ 
  experiences = [
    {
      title: "Software Development Engineer",
      company: "Terrapin Works, University of Maryland",
      period: "May 2023 - Present",
      description: "• Built Pinpoint, an API-first platform for equipment access, training, and lab administration, enabling real time tracking for 25+ campus makerspaces and 3,000+ users across UMD\n• Implemented responsive web and backend systems powering equipment tracking, Canvas Badge integration, and real-time analytics for makerspaces across UMD\n• Integrated RESTful APIs with UMD CAS authentication for makerspace hardware, streamlining user certification and access workflows in an agile team",
      skills: ["Python", "React", "Node.js", "SQL", "REST APIs"]
    },
    {
      title: "Undergraduate Researcher",
      company: "Fire Climate Computing Lab",
      period: "Aug 2024 - Dec 2024",
      description: "• Engineered simulations of Hurricane Ida using the WRF model and Python to analyze SST impacts, processing meteorological datasets spanning 1,600 x 1,600 km with 4 km grid spacing\n• Developed data processing pipelines using Python and NetCDF operators with NCEP/NCAR Reanalysis datasets to compute and visualize time-averaged difference fields across atmospheric variables\n• Leveraged high-performance computing systems (NCAR Derecho) to run parallel simulations analyzing Ida's behavior under varying sea surface temperature conditions",
      skills: ["Python", "Data Processing", "Scientific Computing", "HPC", "Data Visualization"]
    }
  ]
}: ExperienceProps) => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Multi-layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-pink-50/30 via-transparent to-orange-50/30"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-tl from-yellow-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-100/10 via-transparent to-amber-100/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 tracking-wider uppercase">Experience</h2>
          <p className="text-gray-600 mt-2 font-light">My professional and academic journey</p>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="relative backdrop-blur-3xl bg-gradient-to-br from-white/15 via-white/8 to-white/12 rounded-2xl p-8 border border-white/30 shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] hover:shadow-[0_12px_40px_0_rgba(251,146,60,0.25)] transition-all duration-300 group">
              {/* Inner glow effect - subtle orange shimmer */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200/8 via-transparent to-amber-200/8 rounded-2xl pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-white/10 via-transparent to-white/5 rounded-2xl pointer-events-none"></div>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-300/40 to-transparent"></div>
              
              <div className="relative">
                {/* Header with period badge */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-1">{exp.title}</h3>
                    <p className="text-orange-600 font-medium text-base">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-4 py-1.5 backdrop-blur-xl bg-gradient-to-r from-orange-100/50 to-amber-100/50 text-orange-700 text-sm font-medium rounded-full border border-orange-200/50 uppercase tracking-wide">
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-gray-600 text-sm font-light uppercase tracking-wider">
                    {/* Location placeholder - can add if needed */}
                  </span>
                </div>
                
                {/* Description */}
                <div className="text-gray-700 text-sm md:text-base mb-6 font-light leading-relaxed space-y-2">
                  {exp.description.split('\n').map((bullet, i) => (
                    <p key={i} className="pl-0">{bullet}</p>
                  ))}
                </div>
                
                {/* Skills tags */}
                {exp.skills && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200/30">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1.5 backdrop-blur-xl bg-gradient-to-r from-white/30 to-white/20 text-gray-700 text-xs font-medium rounded-lg border border-gray-300/30 hover:border-orange-300/50 hover:from-orange-50/40 hover:to-amber-50/40 hover:text-orange-700 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
