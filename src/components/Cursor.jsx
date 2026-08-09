import { useEffect, useRef } from 'react'

const INTERACTIVE =
  'a, button, input, textarea, select, label, summary, [role="button"], [data-cursor="hover"]'

/**
 * Fraction of the remaining distance covered per 60fps frame.
 * Higher = tighter to the pointer. 0.45 keeps a subtle trail without feeling
 * detached; the previous value of 0.18 took ~250ms to catch up, which is what
 * read as lag.
 */
const FOLLOW = 0.45

/**
 * The morphing outline cursor from the reference clip.
 *
 * Performance notes, since a cursor is the one element where latency is
 * immediately visible:
 *
 * - React renders this component exactly once. Every subsequent update is a
 *   direct DOM write. The previous version called setState on each mousemove,
 *   which meant a full React render + style diff at pointer-event rate.
 * - Per frame the only write is `transform: translate3d(...)` on the outer
 *   element, which is GPU-composited and skips layout and paint entirely.
 * - Size and colour changes live on the inner element and are driven by CSS
 *   class toggles, so they run only on hover/press changes rather than per
 *   frame.
 * - The rAF loop stops once the ring has caught up and restarts on the next
 *   pointer move, so an idle page burns no frames.
 */
export default function Cursor() {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current

    if (
      !root ||
      !window.matchMedia('(hover: hover) and (pointer: fine)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined
    }

    document.documentElement.classList.add('has-custom-cursor')

    const target = { x: 0, y: 0 }
    const pos = { x: 0, y: 0 }

    let raf = 0
    let running = false
    let seeded = false
    let lastElement = null
    let lastTime = 0

    const draw = () => {
      root.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
    }

    const tick = (now) => {
      // Clamp dt so returning to a backgrounded tab does not teleport the ring.
      const dt = Math.min(now - lastTime, 64)
      lastTime = now

      /*
       * Frame-rate independent exponential smoothing. Without the dt term the
       * ring would follow at a different speed on 60Hz vs 144Hz displays.
       */
      const amount = 1 - (1 - FOLLOW) ** (dt / 16.6667)

      pos.x += (target.x - pos.x) * amount
      pos.y += (target.y - pos.y) * amount

      draw()

      if (Math.abs(target.x - pos.x) < 0.05 && Math.abs(target.y - pos.y) < 0.05) {
        pos.x = target.x
        pos.y = target.y
        draw()
        running = false
        return
      }

      raf = requestAnimationFrame(tick)
    }

    const startLoop = () => {
      if (running) return
      running = true
      lastTime = performance.now()
      raf = requestAnimationFrame(tick)
    }

    const onMove = (event) => {
      target.x = event.clientX
      target.y = event.clientY

      if (!seeded) {
        // Appear exactly under the pointer rather than sliding in from 0,0.
        seeded = true
        pos.x = target.x
        pos.y = target.y
        draw()
        root.classList.add('is-visible')
      }

      /*
       * closest() walks up the tree, so only run it when the element under the
       * pointer actually changed rather than on every single move event.
       */
      const element = event.target
      if (element !== lastElement) {
        lastElement = element
        const isInteractive =
          element instanceof Element && element.closest(INTERACTIVE) !== null
        root.classList.toggle('is-hover', isInteractive)
      }

      startLoop()
    }

    const onDown = () => root.classList.add('is-press')
    const onUp = () => root.classList.remove('is-press')
    const onEnter = () => root.classList.add('is-visible')
    const onLeave = () => root.classList.remove('is-visible')

    /*
     * pointerrawupdate is not throttled to the frame rate, so a high polling
     * rate mouse delivers positions sooner. Falls back to pointermove where it
     * is unsupported.
     */
    const moveEvent = 'onpointerrawupdate' in window ? 'pointerrawupdate' : 'pointermove'

    window.addEventListener(moveEvent, onMove, { passive: true })
    window.addEventListener('pointerdown', onDown, { passive: true })
    window.addEventListener('pointerup', onUp, { passive: true })
    document.addEventListener('pointerenter', onEnter)
    document.addEventListener('pointerleave', onLeave)

    return () => {
      window.removeEventListener(moveEvent, onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      document.removeEventListener('pointerenter', onEnter)
      document.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(raf)
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [])

  return (
    <div ref={rootRef} className="cursor-root hidden md:block" aria-hidden="true">
      <div className="cursor-ring" />
    </div>
  )
}
