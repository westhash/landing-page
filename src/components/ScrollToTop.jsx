import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls window to the top on every route change.
 * Skips the scroll when the URL has a `#hash` so ScrollToSection can handle it.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
