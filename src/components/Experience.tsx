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
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-indigo-900 tracking-wider uppercase">Work Experience</h2>
          <div className="w-16 h-px bg-indigo-400 mt-3"></div>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline dot and line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-0 top-0 bottom-0 w-px bg-indigo-200 ml-3"></div>
              )}
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 border-4 border-white shadow-sm z-10 relative"></div>
                </div>
                
                <div className="flex-grow pb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-medium text-gray-900">{exp.title}</h3>
                    <span className="text-sm text-indigo-600 font-medium">{exp.period}</span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-gray-700">{exp.company}</span>
                  </div>
                  
                  <div className="text-gray-600 mb-4 font-light leading-relaxed">
                    {exp.description.split('\n').map((bullet, i) => (
                      <p key={i} className="mb-2">{bullet}</p>
                    ))}
                  </div>
                  
                  {exp.skills && (
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-white bg-opacity-70 text-indigo-700 text-xs font-medium rounded-full border border-indigo-100 hover:border-indigo-300 transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
