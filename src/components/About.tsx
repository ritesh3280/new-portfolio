import { useState } from 'react';
import h1 from '../assets/hPhotos/h1.jpeg';
import h2 from '../assets/hPhotos/h2.jpeg';
import h3 from '../assets/hPhotos/h3.JPG';
import h4 from '../assets/hPhotos/h4.JPG';
import h5 from '../assets/hPhotos/h5.JPG';

interface TimelineEntry {
  title: string;
  company: string;
  period: string;
  summary: string;
  details: string[];
  skills: string[];
}

interface AboutProps {
  title?: string;
  description?: string;
  description2?: string;
  timeline?: TimelineEntry[];
}

const About = ({
  title = "My Story",
  description = "I'm a junior at the University of Maryland studying Computer Science + Business. I build things that work, from production platforms with thousands of users to AI systems that win hackathons. I love fast-paced environments where I can turn ideas into products.",
  description2 = "also researching with kidneys 🫘",
  timeline = [
    {
      title: "Software Development Engineer",
      company: "Terrapin Works, University of Maryland",
      period: "Mar 2025 - Present",
      summary: "Building Pinpoint, an API-first platform for equipment access and lab administration across 25+ campus makerspaces.",
      details: [
        "Implemented responsive web and backend systems powering equipment tracking, Canvas Badge integration, and real-time analytics for 3,000+ users across 100+ machines",
        "Integrated RESTful APIs with UMD CAS authentication, streamlining user certification and access workflows in an agile team"
      ],
      skills: ["Python", "React", "Node.js", "SQL", "REST APIs"]
    },
    {
      title: "Undergraduate Researcher",
      company: "Staraptor Lab, University of Maryland",
      period: "Dec 2025 - Present",
      summary: "Building ML pipelines to predict 12-month kidney transplant outcomes using digital pathology.",
      details: [
        "Developing models for eGFR and DGF prediction across multiple cohorts of real patient data using renal pathomics features",
        "Working with Random Forest and XGBoost classifiers on high-dimensional clinical datasets"
      ],
      skills: ["Python", "Machine Learning", "XGBoost", "Data Analysis"]
    },
    {
      title: "Undergraduate Researcher",
      company: "Fire Climate Computing Lab",
      period: "Aug 2024 - Dec 2024",
      summary: "Simulated Hurricane Ida using the WRF model to analyze sea surface temperature impacts on storm behavior.",
      details: [
        "Processed meteorological datasets spanning 1,600 x 1,600 km with 4 km grid spacing using Python and NetCDF operators",
        "Leveraged NCAR Derecho HPC systems to run parallel simulations analyzing storm behavior under varying SST conditions"
      ],
      skills: ["Python", "Scientific Computing", "HPC", "Data Visualization"]
    }
  ]
}: AboutProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [expandedEntry, setExpandedEntry] = useState<number | null>(null);

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

        {/* Two column layout - Narrative LEFT, Photos RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* LEFT: Narrative + Timeline - Takes 3/5 width */}
          <div className="lg:col-span-3 space-y-6">
            {/* Bio card */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8 hover:border-red-500 transition-colors duration-300">
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {description}
              </p>
              {description2 && (
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  {description2}
                </p>
              )}

              {/* Divider */}
              <div className="w-full h-px bg-gray-200 dark:bg-gray-700 my-6"></div>

              {/* Skills section */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'Java', 'JavaScript/TypeScript', 'C', 'SQL'].map((skill, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-0.5 text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded hover:border-red-500 hover:text-red-500 transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

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

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700"></div>

              <div className="space-y-4">
                {timeline.map((entry, index) => {
                  const isExpanded = expandedEntry === index;
                  return (
                    <div key={index} className="relative pl-10">
                      {/* Timeline dot */}
                      <div className={`absolute left-2.5 top-6 w-3 h-3 rounded-full border-2 transition-colors duration-300 ${
                        isExpanded
                          ? 'bg-red-500 border-red-500'
                          : 'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600'
                      }`}></div>

                      <button
                        onClick={() => setExpandedEntry(isExpanded ? null : index)}
                        className="w-full text-left bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:border-red-500 transition-all duration-300 hover:shadow-md"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-grow">
                            <h3 className="text-base font-medium text-gray-900 dark:text-white">
                              {entry.title}
                            </h3>
                            <p className="text-red-600 dark:text-red-500 text-sm font-medium">
                              {entry.company}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                              {entry.summary}
                            </p>
                          </div>
                          <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                            <span className="hidden sm:inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-700">
                              {entry.period}
                            </span>
                            <svg
                              className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                              fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>

                        {/* Mobile period */}
                        <span className="sm:hidden inline-block px-3 py-1 mt-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-700">
                          {entry.period}
                        </span>

                        {/* Expanded details */}
                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700" onClick={(e) => e.stopPropagation()}>
                            <ul className="space-y-2 mb-4">
                              {entry.details.map((detail, i) => (
                                <li key={i} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex gap-2">
                                  <span className="text-red-500 mt-1 flex-shrink-0">•</span>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-1.5">
                              {entry.skills.map((skill, i) => (
                                <span key={i} className="px-2.5 py-0.5 text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Photo gallery - Takes 2/5 width */}
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-red-500 transition-all duration-300 cursor-pointer hover:shadow-md"
                onClick={() => setSelectedImage(h1)}
              >
                <img src={h1} alt="Hackathon 1" className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-red-500 transition-all duration-300 cursor-pointer hover:shadow-md"
                onClick={() => setSelectedImage(h2)}
              >
                <img src={h2} alt="Hackathon 2" className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

            <div
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-red-500 transition-all duration-300 cursor-pointer hover:shadow-md"
              onClick={() => setSelectedImage(h3)}
            >
              <img src={h3} alt="Hackathon 3" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-red-500 transition-all duration-300 cursor-pointer hover:shadow-md"
                onClick={() => setSelectedImage(h4)}
              >
                <img src={h4} alt="Hackathon 4" className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-red-500 transition-all duration-300 cursor-pointer hover:shadow-md"
                onClick={() => setSelectedImage(h5)}
              >
                <img src={h5} alt="Hackathon 5" className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full bg-white dark:bg-gray-900 rounded-lg p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="rounded-lg overflow-hidden">
              <img src={selectedImage} alt="Hackathon" className="w-full h-full object-contain max-h-[85vh]" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
