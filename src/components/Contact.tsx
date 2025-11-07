import devpostIcon from '../assets/devpost-svgrepo-com.svg';

interface ContactProps {
  email?: string;
  github?: string;
  linkedin?: string;
  devpost?: string;
}

const Contact = ({ 
  email = "your.email@example.com",
  github = "https://github.com/yourusername",
  linkedin = "https://linkedin.com/in/yourprofile",
  devpost = "https://devpost.com/yourprofile"
}: ContactProps) => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Multi-layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-pink-50/30 via-transparent to-orange-50/30"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-tl from-yellow-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-100/10 via-transparent to-amber-100/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 tracking-wider uppercase">Get In Touch</h2>
          <p className="text-gray-600 mt-2 font-light">Let's connect and collaborate</p>
        </div>
        
        {/* Main glass card */}
        <div className="relative backdrop-blur-3xl bg-gradient-to-br from-white/15 via-white/8 to-white/12 rounded-2xl p-8 md:p-12 border border-white/30 shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] hover:shadow-[0_12px_40px_0_rgba(251,146,60,0.25)] transition-all duration-300">
          {/* Inner glow effect - orange/amber shimmer */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-200/8 via-transparent to-amber-200/8 rounded-2xl pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-white/10 via-transparent to-white/5 rounded-2xl pointer-events-none"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-300/40 to-transparent"></div>
          
          <div className="relative">
            <p className="text-center text-gray-700 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              I'm currently open to new opportunities and collaborations. Feel free to reach out through any of the channels below.
            </p>
            
            {/* Contact links grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email */}
              <a 
                href={`mailto:${email}`}
                className="group relative backdrop-blur-xl bg-gradient-to-br from-white/20 via-white/10 to-white/15 rounded-xl p-6 border border-white/30 hover:border-orange-300/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/5 via-transparent to-amber-100/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 backdrop-blur-xl bg-gradient-to-br from-orange-100/40 to-amber-100/40 rounded-full flex items-center justify-center border border-orange-200/40 group-hover:border-orange-300/60 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-600 font-light mb-1">Email</p>
                    <p className="text-gray-800 font-medium truncate">{email}</p>
                  </div>
                </div>
              </a>
              
              {/* LinkedIn */}
              <a 
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative backdrop-blur-xl bg-gradient-to-br from-white/20 via-white/10 to-white/15 rounded-xl p-6 border border-white/30 hover:border-orange-300/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/5 via-transparent to-amber-100/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 backdrop-blur-xl bg-gradient-to-br from-orange-100/40 to-amber-100/40 rounded-full flex items-center justify-center border border-orange-200/40 group-hover:border-orange-300/60 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 font-light mb-1">LinkedIn</p>
                    <p className="text-gray-800 font-medium">Connect with me</p>
                  </div>
                </div>
              </a>
              
              {/* GitHub */}
              <a 
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative backdrop-blur-xl bg-gradient-to-br from-white/20 via-white/10 to-white/15 rounded-xl p-6 border border-white/30 hover:border-orange-300/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/5 via-transparent to-amber-100/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 backdrop-blur-xl bg-gradient-to-br from-orange-100/40 to-amber-100/40 rounded-full flex items-center justify-center border border-orange-200/40 group-hover:border-orange-300/60 transition-all duration-300">
                    <svg className="h-6 w-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 font-light mb-1">GitHub</p>
                    <p className="text-gray-800 font-medium">View my code</p>
                  </div>
                </div>
              </a>
              
              {/* Devpost */}
              <a 
                href={devpost}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative backdrop-blur-xl bg-gradient-to-br from-white/20 via-white/10 to-white/15 rounded-xl p-6 border border-white/30 hover:border-orange-300/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/5 via-transparent to-amber-100/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 backdrop-blur-xl bg-gradient-to-br from-orange-100/40 to-amber-100/40 rounded-full flex items-center justify-center border border-orange-200/40 group-hover:border-orange-300/60 transition-all duration-300">
                    <div className="h-6 w-6 text-orange-600">
                      <img src={devpostIcon} alt="Devpost" className="w-full h-full" style={{ filter: 'brightness(0) saturate(100%) invert(40%) sepia(85%) saturate(4036%) hue-rotate(1deg) brightness(97%) contrast(107%)' }} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 font-light mb-1">Devpost</p>
                    <p className="text-gray-800 font-medium">See my projects</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
