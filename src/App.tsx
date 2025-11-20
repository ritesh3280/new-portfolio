// App component
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Loader from './components/Loader'
import { Analytics } from '@vercel/analytics/react'

// Import actual profile and background images
import profileImage from './assets/images/profile.JPG'
import backgroundImage from './assets/images/bg.JPG'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Preload the hero background image
  useEffect(() => {
    const img = new Image();
    img.src = '/bgHero.png';

    // When image loads, wait for minimum duration then hide loader
    img.onload = () => {
      // Loader component already handles minimum 1 second display
      setIsLoading(false);
    };

    // Fallback: hide loader after 3 seconds even if image hasn't loaded
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  // Your personal information - update with your details
  const personalInfo = {
    name: "Ritesh Thipparthi",
    tagline: "Software Development Engineer",
    subtitle: "CS + Business @ UMD • 7x Hackathon Winner",
    // Using the actual images from the images folder
    profileImage: profileImage,
    backgroundImage: backgroundImage
  }

  return (
    <>
      {isLoading && <Loader />}
      <div className="min-h-screen">
        <Navbar />
        <Hero
          name={personalInfo.name}
          tagline={personalInfo.tagline}
          subtitle={personalInfo.subtitle}
          profileImage={personalInfo.profileImage}
          backgroundImage={personalInfo.backgroundImage}
          email="rthippar@umd.edu"
          github="https://github.com/ritesh3280"
          linkedin="https://www.linkedin.com/in/rthipparthi/"
          devpost="https://devpost.com/ritesh3280"
        />
        <About
          title="About Me"
          description="I'm a junior at the University of Maryland studying Computer Science. I currently work as a Software Development Engineer at Terrapin Works, where we are building Pinpoint, an API first platform used across 25+ campus makerspaces to manage lab access, track tool usage, handle safety training, and deliver real-time analytics for 1000–3000 users across 100+ machines.

Outside of work, I'm a 7x hackathon winner from elite schools like MIT, Princeton, and Georgia Tech, where I built real world, end to end AI platforms, including voice based agents and computer vision tools. I enjoy fast paced environments where I can turn ideas into working products that solve real problems.

I'm currently looking for software engineering internships where I can build things that matter, learn from great engineers, and push myself to grow through real, hands on work across the board."
        />
        <Experience />
        <Projects />
        <Contact
          email="rthippar@umd.edu"
          github="https://github.com/ritesh3280"
          linkedin="https://www.linkedin.com/in/rthipparthi/"
          devpost="https://devpost.com/ritesh3280"
        />
        <Analytics />
      </div>
    </>
  )
}

export default App
