

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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-16 h-0.5 bg-red-500 mt-4 mx-auto"></div>
          <p className="text-gray-600 mt-4">Let's connect and collaborate</p>
        </div>

        {/* Main card */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-12 hover:border-red-500 transition-all duration-300 hover:shadow-md">
          <p className="text-center text-gray-700 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            I'm currently open to new opportunities and collaborations. Feel free to reach out through any of the channels below.
          </p>

          {/* Contact links grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="group bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-red-500 hover:bg-red-50 transition-all duration-300 hover:shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center border border-red-200 group-hover:bg-red-200 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <p className="text-gray-900 font-medium truncate">{email}</p>
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-red-500 hover:bg-red-50 transition-all duration-300 hover:shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center border border-red-200 group-hover:bg-red-200 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">LinkedIn</p>
                  <p className="text-gray-900 font-medium">Connect with me</p>
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-red-500 hover:bg-red-50 transition-all duration-300 hover:shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center border border-red-200 group-hover:bg-red-200 transition-all duration-300">
                  <svg className="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">GitHub</p>
                  <p className="text-gray-900 font-medium">View my code</p>
                </div>
              </div>
            </a>

            {/* Devpost */}
            <a
              href={devpost}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-red-500 hover:bg-red-50 transition-all duration-300 hover:shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center border border-red-200 group-hover:bg-red-200 transition-all duration-300">
                  <div className="h-6 w-6 text-red-600">
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">Devpost</p>
                  <p className="text-gray-900 font-medium">See my projects</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
