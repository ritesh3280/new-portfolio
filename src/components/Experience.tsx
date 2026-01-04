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
      title: "Undergraduate Researcher",
      company: "Staraptor Lab, University of Maryland",
      period: "Dec 2025 - Present",
      description: "• Building machine learning pipelines to predict 12-month kidney transplant outcomes (eGFR, DGF) across multiple cohorts of real patient data using renal pathomics features from digital pathology.",
      skills: ["Python", "Machine Learning", "Random Forest", "XGBoost", "Data Analysis"]
    },
    {
      title: "Software Development Engineer",
      company: "Terrapin Works, University of Maryland",
      period: "Mar 2025 - Present",
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
    <section id="experience" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white tracking-tight">
            Experience
          </h2>
          <div className="w-16 h-0.5 bg-red-500 mt-4 mx-auto"></div>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8 hover:border-red-500 transition-all duration-300 hover:shadow-md">
              {/* Header with period badge */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-red-600 dark:text-red-500 font-medium text-base">
                    {exp.company}
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-700">
                    {exp.period}
                  </span>
                </div>
              </div>
              
              {/* Description */}
              <div className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-6 leading-relaxed space-y-2">
                {exp.description.split('\n').map((bullet, i) => (
                  <p key={i}>{bullet}</p>
                ))}
              </div>
              
              {/* Skills tags */}
              {exp.skills && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-500 hover:bg-red-50 dark:hover:bg-gray-700 hover:text-red-700 dark:hover:text-red-500 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
