import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Preloader from './components/Preloader'
import AboutmeSection from './components/AboutmeSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import ProjectsSection from './components/ProjectsSection.Jsx'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('load', handleLoad);
    }
  }, [])

  return (
    <>
    <Navbar />
    <div className='bg-gray-900'>
      <div className='max-w-screen-xl mx-auto'>
        {/* {loading && <Preloader />} */}
        <Hero />
        <ProjectsSection/>
        <AboutmeSection/>
        <SkillsSection/>
        <ContactSection/>
        <FAQSection/>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default App