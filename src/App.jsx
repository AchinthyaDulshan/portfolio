import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Preloader from './components/Preloader'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'
import FAQs from './components/FAQS'

const App = () => {

  const [loading, setLoading] = useState(true);
  const timer = setTimeout(() => setLoading(false), 2000);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    }
  }, [])

  return (
    <>
    <Navbar />
    <div className='bg-gray-900'>
      <div className='max-w-screen-xl mx-auto'>
        {loading?(<Preloader/>):null}
        <Hero />
        <Projects/>
        <Aboutme/>
        <Skills/>
        <Contact/>
        <FAQs/>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default App