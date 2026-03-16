interface ContactProps {
  email?: string;
  github?: string;
  linkedin?: string;
  devpost?: string;
}

const Contact = ({
  email = "rthippar@umd.edu",
  github = "https://github.com/ritesh3280",
  linkedin = "https://www.linkedin.com/in/rthipparthi/",
  devpost = "https://devpost.com/ritesh3280"
}: ContactProps) => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white tracking-tight">
            Let's Build Something
          </h2>
          <div className="w-16 h-0.5 bg-red-500 mt-4 mx-auto"></div>
        </div>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 leading-relaxed max-w-2xl mx-auto">
          I'm looking for <span className="font-medium text-gray-900 dark:text-white">software engineering internships for Summer 2026 and full time roles</span>. If you're building something interesting, I'd love to talk.
        </p>

        <p className="text-gray-500 dark:text-gray-400 text-sm mb-10">
          Best way to reach me is email - I typically respond within 24 hours.
        </p>

        {/* Primary CTA */}
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-3 px-10 py-4 bg-red-500 text-white text-lg font-medium rounded-lg hover:bg-red-600 transition-all duration-300 shadow-sm hover:shadow-md mb-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {email}
        </a>

        {/* Secondary links */}
        <div className="flex items-center justify-center gap-6">
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center gap-2 text-sm">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            LinkedIn
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center gap-2 text-sm">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            GitHub
          </a>
          <a href={devpost} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center gap-2 text-sm">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z" /></svg>
            Devpost
          </a>
          <a href="https://drive.google.com/file/d/1pnNzX4iWyEVHwmZ_XvtzX_NIu5Y4MVSk/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center gap-2 text-sm">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
