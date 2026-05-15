import { useEffect, useRef, useLayoutEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Collaborations from './components/Collaborations'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [heroPaddingTop, setHeroPaddingTop] = useState(0)
  const headerRef = useRef(null)

  // ---------- Reveal-on-scroll ----------
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rd = entry.target.dataset.rd
            if (rd) entry.target.style.setProperty('--rd', `${rd}ms`)
            entry.target.classList.add('reveal-on')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

    // Trigger the hero immediately so it animates in on first paint.
    requestAnimationFrame(() => {
      document.querySelectorAll('.hero-section .reveal').forEach((el) =>
        el.classList.add('reveal-on')
      )
    })

    return () => io.disconnect()
  }, [])

  // ---------- Mouse-tracked glow on service / product cards ----------
  useEffect(() => {
    const els = document.querySelectorAll('.mouse-track')
    const onMove = (e) => {
      const el = e.currentTarget
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    els.forEach((el) => el.addEventListener('mousemove', onMove))
    return () => els.forEach((el) => el.removeEventListener('mousemove', onMove))
  }, [])

  // ---------- Scroll-driven header animation ----------
  // Everything (font-size, padding, color, blur, logo position) is interpolated
  // 1:1 with scrollY via direct DOM writes — no CSS transitions on the moving
  // properties, so it stays perfectly responsive to the scroll position.
  useEffect(() => {
    const header = headerRef.current
    if (!header) return
    const brand = header.querySelector('.brand')
    const brandBlock = header.querySelector('.brand-block')
    const tag = header.querySelector('.tag')
    if (!brand || !brandBlock || !tag) return

    const update = () => {
      const scrollY = window.scrollY
      const maxScroll = 220
      const progress = Math.min(1, scrollY / maxScroll)

      // Brand font-size — super reactive 1:1
      const startSize = Math.min(8, window.innerWidth / 90)
      const endSize = 1.4
      const size = startSize - progress * (startSize - endSize)
      brand.style.fontSize = `${size}rem`

      // Topbar shape: padding interpolates between centered & scrolled states
      const padTopRem = 1.25 - progress * 0.6      // 1.25rem → 0.65rem
      const padBottomRem = 1 - progress * 0.35     // 1rem    → 0.65rem
      const padXRem = 2 - progress * 0.25          // 2rem    → 1.75rem
      header.style.padding = `${padTopRem}rem ${padXRem}rem ${padBottomRem}rem`

      // Topbar color: solid → nearly transparent. Channel comes from a CSS
      // variable so it follows the active light/dark theme.
      const a = 0.9 - progress * 0.8               // 0.9 → 0.1
      header.style.background = `rgba(var(--header-bg-rgb), ${a.toFixed(3)})`

      // Backdrop blur: 10px → 1px
      const blur = Math.max(1, 10 - progress * 9)
      header.style.backdropFilter = `blur(${blur}px)`
      header.style.webkitBackdropFilter = `blur(${blur}px)`

      // Logo position: smoothly slides from center to top-left.
      // CSS keeps brand-block centered via align-items; we translate it leftward
      // by the exact amount needed to land at the inner-left edge.
      const padXPx = padXRem * 16
      const innerWidth = header.clientWidth - padXPx * 2
      const blockWidth = brandBlock.offsetWidth
      const centerOffset = Math.max(0, (innerWidth - blockWidth) / 2)
      const tx = -centerOffset * progress
      brandBlock.style.transform = `translateX(${tx}px)`

      // Tagline visibility — class-based opacity transition
      const showTag = scrollY > 300
      tag.classList.toggle('tag-visible', showTag)
      tag.classList.toggle('tag-hidden', !showTag)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  // ---------- Hero padding (measured once after the header has its initial size) ----------
  useLayoutEffect(() => {
    const updatePadding = () => {
      if (headerRef.current) {
        // header height + 4rem of breathing room — matches padding-bottom for symmetry
        setHeroPaddingTop(headerRef.current.offsetHeight + 64)
      }
    }
    // Measure on the next frame so JS-driven inline padding has been applied.
    requestAnimationFrame(updatePadding)
    window.addEventListener('resize', updatePadding)
    window.addEventListener('orientationchange', updatePadding)
    return () => {
      window.removeEventListener('resize', updatePadding)
      window.removeEventListener('orientationchange', updatePadding)
    }
  }, [])

  return (
    <div className="app-container">
      <Header headerRef={headerRef} />
      <Hero paddingTop={heroPaddingTop} />
      <Features />
      <Services />
      <Collaborations />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
