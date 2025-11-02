import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToSection() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        setTimeout(() => element.scrollIntoView({ block: 'start' }), 0)
      }
    }
  }, [location])

  return null
}
