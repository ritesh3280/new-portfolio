// App component
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
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

  return (
    <>
      {isLoading && <Loader />}
      <div className="min-h-screen">
        <Navbar />
        <Hero
          name="Ritesh Thipparthi"
          tagline="Software Development Engineer"
          subtitle="CS + Business @ UMD • 7x Hackathon Winner"
          profileImage={profileImage}
          backgroundImage={backgroundImage}
          email="rthippar@umd.edu"
          github="https://github.com/ritesh3280"
          linkedin="https://www.linkedin.com/in/rthipparthi/"
          devpost="https://devpost.com/ritesh3280"
        />
        <About />
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
