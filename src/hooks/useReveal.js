import { useEffect } from 'react'

/**
 * Reveals `.reveal` elements as they scroll into view.
 *
 * Why inline styles instead of just a class:
 *
 * React owns the `className` attribute. When a component re-renders with a
 * different class string (for example a card that changes shadow on hover),
 * React writes the whole attribute again and silently destroys any class that
 * was added imperatively from outside React — including `is-visible`. Because
 * the observer has already unobserved that element, it would never be restored
 * and the element would stay at `opacity: 0` forever.
 *
 * Inline styles live on `element.style`, which React does not touch unless the
 * component itself sets a conflicting inline style. So the visible state is
 * written there, and `is-visible` is kept purely as a state marker.
 *
 * A MutationObserver re-applies the styles if a re-render ever clobbers them,
 * which makes this robust no matter what a component does to its className.
 */

const VISIBLE = { opacity: '1', translate: 'none' }

function markVisible(node) {
  node.classList.add('is-visible')
  node.style.opacity = VISIBLE.opacity
  node.style.translate = VISIBLE.translate
}

export default function useReveal(deps = []) {
  useEffect(() => {
    const selector = '.reveal'
    const revealed = new WeakSet()

    const collect = () => Array.from(document.querySelectorAll(selector))

    const nodes = collect()
    if (nodes.length === 0) {
      return undefined
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (typeof IntersectionObserver === 'undefined' || reduceMotion) {
      nodes.forEach((node) => {
        markVisible(node)
        revealed.add(node)
      })
      return undefined
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            markVisible(entry.target)
            revealed.add(entry.target)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    nodes.forEach((node) => io.observe(node))

    /*
     * Safety net. If React re-renders an already-revealed element and drops
     * `is-visible` from its className, restore it immediately. Without this the
     * element would fade out and never return.
     */
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const node = mutation.target
        if (
          node.nodeType === 1 &&
          revealed.has(node) &&
          node.classList.contains('reveal') &&
          !node.classList.contains('is-visible')
        ) {
          markVisible(node)
        }
      })
    })

    mo.observe(document.body, {
      subtree: true,
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
