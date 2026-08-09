import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Momentum smooth scrolling.
 *
 * Also takes over in-page anchor clicks so `#about` style links glide instead
 * of jumping, which is what the reference clip does. Skipped entirely when the
 * user prefers reduced motion.
 */
export default function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })

    let frame = 0
    const raf = (time) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    const handleAnchorClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || href === '#') return

      const destination = document.querySelector(href)
      if (!destination) return

      event.preventDefault()
      lenis.scrollTo(destination, { offset: 0, duration: 1.4 })

      if (history.pushState) {
        history.pushState(null, '', href)
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])
}
