import { useEffect, useRef } from 'react'

export const useMousePosition = () => {
  const elementRefs = useRef([])

  useEffect(() => {
    const handleMouseMove = (e, element) => {
      const rect = element.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      element.style.setProperty('--mouse-x', `${x}%`)
      element.style.setProperty('--mouse-y', `${y}%`)
    }

    elementRefs.current.forEach(element => {
      if (element) {
        const mouseMoveHandler = (e) => handleMouseMove(e, element)
        element.addEventListener('mousemove', mouseMoveHandler)
        element.addEventListener('mouseleave', () => {
          element.style.setProperty('--mouse-x', '50%')
          element.style.setProperty('--mouse-y', '50%')
        })
      }
    })

    return () => {
      elementRefs.current.forEach(element => {
        if (element) {
          element.removeEventListener('mousemove', () => {})
          element.removeEventListener('mouseleave', () => {})
        }
      })
    }
  }, [])

  const addRef = (element) => {
    if (element && !elementRefs.current.includes(element)) {
      elementRefs.current.push(element)
    }
  }

  return addRef
}
