import cluelessImg from "../assets/images/clueless.png";
import seeWithMeImg from "../assets/images/seewithme.png";
import focusFlowImg from "../assets/images/focusflow.png";
import solSpeakImg from "../assets/images/SolSpeak.png";
import taxDaddyImg from "../assets/images/TaxDaddy.png";
import orbitalFinanceImg from "../assets/images/orbitalfionance.png";
import vectorMentorImg from "../assets/images/vectormentor.png";
import hireFlowImg from "../assets/images/hireflow.png";

interface ProjectItem {
  title: string;
  description: string;
  image: any;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

interface ProjectsProps {
  projects?: ProjectItem[];
}

const Projects = ({ 
  projects = [
    {
      title: "Clueless (HackMIT – 2nd Place, Wispr Flow Track)",
      description: "AI-powered navigation assistant that lets developers explore any website using natural language and voice. Combines web scraping, knowledge graphs, and speech recognition for step-by-step, visual UI guidance.",
      image: cluelessImg,
      tags: ["React", "TypeScript", "Python", "Neo4j", "Pinecone"],
      githubUrl: "https://github.com/prat-core/clueless",
      demoUrl: "https://plume.hackmit.org/project/ufyrx-xhfvw-skjfl-pcgwq"
    },
    {
      title: "See With Me (Bitcamp UMD)",
      description: "Smart glasses tool for digital forensics that delivers real-time object detection, scene analysis, and investigative search. Helps investigators quickly extract evidence from live or recorded video.",
      image: seeWithMeImg,
      tags: ["FastAPI", "React", "YOLOv11", "Computer Vision"],
      githubUrl: "https://github.com/ritesh3280/bitcamp25",
      demoUrl: "https://devpost.com/software/see-with-me"
    },
    {
      title: "Focus Flow (HackUMBC – 1st Place Overall)",
      description: "EEG-driven focus tracker that classifies brain states as focused or distracted in real time using a custom LSTM with hemisphere-aware attention. Provides live dashboards, alerts, and cognitive analytics to help users monitor and improve attention.",
      image: focusFlowImg,
      tags: ["LSTM", "EEG", "Neural Networks", "Real-time Analytics", "Python"],
      githubUrl: "https://github.com/ritesh3280/hackUMBC25",
      demoUrl: "https://devpost.com/software/focus-flow-y63tzm"
    },
    {
      title: "SolSpeak (HackNYU – 2nd Place, Best Solana Hack)",
      description: "Voice AI platform that turns a phone call into a full-featured DeFi interface. Lets users trade, transfer, and manage crypto assets hands-free with Solana mainnet integrations.",
      image: solSpeakImg,
      tags: ["Solana", "Voice AI", "DeFi", "Blockchain"],
      githubUrl: "https://github.com/Loldude0/hacknyu",
      demoUrl: "https://devpost.com/software/n-kp7oqy"
    },
    {
      title: "Tax Daddy (Hacklytics Georgia Tech – 3rd Place Overall)",
      description: "Personal tax AI that automates form filling, analytics, and fraud detection from uploaded documents. Streamlines tax filing with real-time insights and anomaly alerts.",
      image: taxDaddyImg,
      tags: ["OCR", "MongoDB", "Voice AI", "Data Analytics"],
      githubUrl: "https://github.com/NSP909/taxerino",
      demoUrl: "https://devpost.com/software/taxdaddy"
    },
    {
      title: "Orbital Finance (HackPrinceton – 2nd Place Overall)",
      description: "Conversational AI platform that integrates real-time RAG and voice AI for business intelligence. Enables natural language to SQL queries, instant insights, and automated customer interactions.",
      image: orbitalFinanceImg,
      tags: ["React", "PyTorch", "Flask", "Tailwind CSS", "Pinecone"],
      githubUrl: "https://github.com/NSP909/Fino",
      demoUrl: "https://dorahacks.io/buidl/19414"
    },
    {
      title: "Vector Mentor (HackUMBC – 1st Place Overall)",
      description: "AI-powered study assistant that integrates Canvas data, generates practice questions, and provides personalized recommendations. Helps students track progress and optimize learning.",
      image: vectorMentorImg,
      tags: ["React", "JavaScript", "Tailwind CSS", "Flask", "LangChain", "PyTorch"],
      githubUrl: "https://github.com/NSP909/hackUMBC",
      demoUrl: "https://devpost.com/software/to-be-decided-og94ij"
    },
    {
      title: "HireFlow (HoyaHacks – HashiCorp Best Use of Terraform)",
      description: "AI recruiting assistant that automates resume reviews, screening calls, and candidate scoring. Reduces bias and accelerates hiring by matching talent to jobs with precision.",
      image: hireFlowImg,
      tags: ["NLP", "AI", "Terraform", "Recruitment"],
      githubUrl: "https://github.com/k-kochhar/HireFlow",
      demoUrl: "https://devpost.com/software/hireflow"
    }
  ]
}: ProjectsProps) => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
            Projects
          </h2>
          <div className="w-16 h-0.5 bg-red-500 mt-4 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-red-500 transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="h-40 overflow-hidden bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-gray-200">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2.5 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-lg border border-gray-200 hover:border-red-500 hover:bg-red-50 hover:text-red-700 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a 
                    href={project.githubUrl} 
                    className="flex-1 px-3 py-2 bg-gray-900 text-white text-xs font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-1.5"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Code
                  </a>
                  <a 
                    href={project.demoUrl} 
                    className="flex-1 px-3 py-2 bg-red-500 text-white text-xs font-medium rounded-lg hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-1.5"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
