import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [brandFontSize, setBrandFontSize] = useState('8rem')
  const [heroPaddingTop, setHeroPaddingTop] = useState(0)
  const [headerBlur, setHeaderBlur] = useState('10px')
  const [tagVisible, setTagVisible] = useState(false)
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const updateFontSize = () => {
      const scrollY = window.scrollY
      const maxScroll = 220
      const startSize = Math.min(8, window.innerWidth / 90)
      const endSize = 1.3
      const size = Math.max(startSize - (scrollY / maxScroll) * (startSize - endSize), endSize)
      setBrandFontSize(`${size}rem`)

      const blurValue = Math.max(1, 10 - (scrollY / maxScroll) * 9)
      setHeaderBlur(`${blurValue}px`)

      setTagVisible(scrollY > 300)
      setHeaderScrolled(scrollY > maxScroll)
    }
    updateFontSize() // Initialize on mount
    window.addEventListener('scroll', updateFontSize)
    window.addEventListener('resize', updateFontSize)
    return () => {
      window.removeEventListener('scroll', updateFontSize)
      window.removeEventListener('resize', updateFontSize)
    }
  }, [])

  useLayoutEffect(() => {
    const updatePadding = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight
        const isLandscape = window.innerWidth > window.innerHeight
        setHeroPaddingTop(height + (isLandscape ? 20 : -30)) 
      }
    }
    updatePadding()
    window.addEventListener('orientationchange', updatePadding)
    return () => {
      window.removeEventListener('orientationchange', updatePadding)
    }
  }, [])

  return (
    <div className="app-container">
      <Header 
        headerRef={headerRef}
        brandFontSize={brandFontSize}
        headerBlur={headerBlur}
        headerScrolled={headerScrolled}
        tagVisible={tagVisible}
      />
      <Hero paddingTop={heroPaddingTop} />
      <Features />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}