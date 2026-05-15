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
  // Updates are coalesced through requestAnimationFrame so we paint at most
  // once per frame; layout-dependent measurements (block & header widths) are
  // sampled only on resize to avoid forced reflows during scroll.
  useEffect(() => {
    const header = headerRef.current
    if (!header) return
    const brand = header.querySelector('.brand')
    const brandBlock = header.querySelector('.brand-block')
    const tag = header.querySelector('.tag')
    if (!brand || !brandBlock || !tag) return

    const MAX_SCROLL = 220
    const END_SIZE = 1.4

    let startSize = Math.min(8, window.innerWidth / 90)
    let baseBlockWidth = 0
    let headerWidth = header.clientWidth
    let rafId = 0
    let tagShown = false

    const measure = () => {
      startSize = Math.min(8, window.innerWidth / 90)
      // Snapshot block width at the start (unscrolled) size so we can derive
      // its current width during scroll by ratio — no layout reads per frame.
      const prevTransform = brandBlock.style.transform
      const prevFont = brand.style.fontSize
      brandBlock.style.transform = ''
      brand.style.fontSize = `${startSize}rem`
      // Single forced layout here is acceptable — happens on resize, not scroll.
      baseBlockWidth = brandBlock.offsetWidth
      headerWidth = header.clientWidth
      brand.style.fontSize = prevFont
      brandBlock.style.transform = prevTransform
    }

    const apply = () => {
      rafId = 0
      const scrollY = window.scrollY
      const progress = scrollY >= MAX_SCROLL ? 1 : scrollY <= 0 ? 0 : scrollY / MAX_SCROLL

      const size = startSize - progress * (startSize - END_SIZE)
      brand.style.fontSize = `${size}rem`

      const padTopRem = 1.25 - progress * 0.6
      const padBottomRem = 1 - progress * 0.35
      const padXRem = 2 - progress * 0.25
      header.style.padding = `${padTopRem}rem ${padXRem}rem ${padBottomRem}rem`

      const a = 0.9 - progress * 0.8
      header.style.background = `rgba(var(--header-bg-rgb), ${a.toFixed(3)})`

      const blur = Math.max(1, 10 - progress * 9)
      const blurStr = `blur(${blur}px)`
      header.style.backdropFilter = blurStr
      header.style.webkitBackdropFilter = blurStr

      // Approximate current block width by scaling the cached base — text width
      // scales linearly with font-size, so this matches reality closely and
      // avoids reading offsetWidth (which would trigger reflow each frame).
      const scaleRatio = size / startSize
      const currentBlockWidth = baseBlockWidth * scaleRatio
      const padXPx = padXRem * 16
      const innerWidth = headerWidth - padXPx * 2
      const centerOffset = Math.max(0, (innerWidth - currentBlockWidth) / 2)
      const tx = -centerOffset * progress
      brandBlock.style.transform = `translate3d(${tx}px, 0, 0)`

      const showTag = scrollY > 300
      if (showTag !== tagShown) {
        tag.classList.toggle('tag-visible', showTag)
        tag.classList.toggle('tag-hidden', !showTag)
        tagShown = showTag
      }
    }

    const schedule = () => {
      if (!rafId) rafId = requestAnimationFrame(apply)
    }

    const onResize = () => {
      measure()
      schedule()
    }

    measure()
    apply()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', onResize)
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
