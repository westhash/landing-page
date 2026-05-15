import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * On every route change, if the URL has a `#hash`, scroll the matching element
 * into view. Runs after layout so the target is mounted.
 */
export default function ScrollToSection() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace(/^#/, '')
    // Wait one frame so the destination section is mounted.
    requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [pathname, hash])

  return null
}
