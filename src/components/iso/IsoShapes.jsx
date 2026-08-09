import { useId } from 'react'

/**
 * Hand-built isometric primitives.
 *
 * The reference design used rendered 3D assets. Rather than pull in a 3D
 * runtime or ship heavy images, these reproduce the look with plain SVG
 * polygons in a true isometric projection. They are resolution independent,
 * weigh almost nothing, and recolour themselves from the theme.
 *
 * Projection: for a cube occupying a w x h box, the top face is a rhombus and
 * the two visible side faces are parallelograms. Shading the three faces
 * light/mid/dark is what sells the volume.
 */

function shade(hex, amount) {
  const normalized = hex.replace('#', '')
  const num = Number.parseInt(normalized, 16)

  let r = (num >> 16) & 0xff
  let g = (num >> 8) & 0xff
  let b = num & 0xff

  if (amount >= 0) {
    r = Math.round(r + (255 - r) * amount)
    g = Math.round(g + (255 - g) * amount)
    b = Math.round(b + (255 - b) * amount)
  } else {
    const factor = 1 + amount
    r = Math.round(r * factor)
    g = Math.round(g * factor)
    b = Math.round(b * factor)
  }

  return `rgb(${r}, ${g}, ${b})`
}

export function IsoCube({ size = 120, color = '#c9c2f7', className = '', style }) {
  const w = size
  const h = size * 1.1547 // keeps the 30deg iso angle correct

  const top = `0,${h * 0.25} ${w * 0.5},0 ${w},${h * 0.25} ${w * 0.5},${h * 0.5}`
  const left = `0,${h * 0.25} ${w * 0.5},${h * 0.5} ${w * 0.5},${h} 0,${h * 0.75}`
  const right = `${w},${h * 0.25} ${w * 0.5},${h * 0.5} ${w * 0.5},${h} ${w},${h * 0.75}`

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <polygon points={top} fill={shade(color, 0.32)} />
      <polygon points={left} fill={shade(color, -0.12)} />
      <polygon points={right} fill={shade(color, -0.34)} />
    </svg>
  )
}

export function IsoSlab({ size = 200, height = 0.34, color = '#4b32e0', className = '', style }) {
  const w = size
  const thickness = size * height
  const h = size * 0.5774 + thickness

  const top = `0,${size * 0.2887} ${w * 0.5},0 ${w},${size * 0.2887} ${w * 0.5},${size * 0.5774}`
  const left = `0,${size * 0.2887} ${w * 0.5},${size * 0.5774} ${w * 0.5},${size * 0.5774 + thickness} 0,${size * 0.2887 + thickness}`
  const right = `${w},${size * 0.2887} ${w * 0.5},${size * 0.5774} ${w * 0.5},${size * 0.5774 + thickness} ${w},${size * 0.2887 + thickness}`

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <polygon points={top} fill={shade(color, 0.18)} />
      <polygon points={left} fill={shade(color, -0.2)} />
      <polygon points={right} fill={shade(color, -0.42)} />
    </svg>
  )
}

export function IsoSphere({ size = 60, color = '#ff7a00', className = '', style }) {
  const id = useId().replace(/:/g, '')

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={`sphere-${id}`} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor={shade(color, 0.55)} />
          <stop offset="55%" stopColor={color} />
          <stop offset="100%" stopColor={shade(color, -0.32)} />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill={`url(#sphere-${id})`} />
    </svg>
  )
}

export function IsoBar({ width = 200, depth = 90, color = '#ffd500', className = '', style }) {
  const w = width
  const d = depth
  const thickness = depth * 0.62
  const h = w * 0.29 + d * 0.29 + thickness

  const frontTopY = w * 0.29
  const rightTopY = 0
  const midY = w * 0.29 + d * 0.29

  const top = `0,${frontTopY} ${w * 0.62},${rightTopY} ${w},${d * 0.29} ${w - w * 0.62 + 0.001},${midY}`
  const left = `0,${frontTopY} ${w * 0.38},${midY} ${w * 0.38},${midY + thickness} 0,${frontTopY + thickness}`
  const right = `${w * 0.38},${midY} ${w},${d * 0.29} ${w},${d * 0.29 + thickness} ${w * 0.38},${midY + thickness}`

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <polygon points={top} fill={shade(color, 0.3)} />
      <polygon points={left} fill={shade(color, -0.1)} />
      <polygon points={right} fill={shade(color, -0.35)} />
    </svg>
  )
}

/** The layered composition that sits on the indigo half of the hero. */
export function HeroScene({ className = '' }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      {/* Upper cluster. Kept below ~18% so it clears the fixed header. */}
      <div className="absolute left-[34%] top-[20%] animate-float-slow" style={{ animationDelay: '0.4s' }}>
        <IsoCube size={92} color="#f5b8cb" />
      </div>
      <div className="absolute left-[18%] top-[30%] animate-float" style={{ animationDelay: '1.1s' }}>
        <IsoCube size={84} color="#c9c2f7" />
      </div>
      <div className="absolute left-[52%] top-[28%] animate-float" style={{ animationDelay: '0.2s' }}>
        <IsoCube size={80} color="#b4a8f6" />
      </div>

      {/* Central platform with objects resting on it */}
      <div className="absolute left-[8%] top-[48%]">
        <IsoSlab size={286} height={0.26} color="#3b23c9" />
      </div>

      <div className="absolute left-[56%] top-[50%] animate-float-slow">
        <IsoBar width={168} depth={84} color="#ffd500" />
      </div>

      <div className="absolute left-[40%] top-[58%] animate-float" style={{ animationDelay: '0.7s' }}>
        <IsoSphere size={56} color="#ff7a00" />
      </div>
      <div className="absolute left-[28%] top-[62%] animate-float" style={{ animationDelay: '1.4s' }}>
        <IsoSphere size={30} color="#ffffff" />
      </div>
      <div className="absolute left-[80%] top-[74%] animate-float-slow" style={{ animationDelay: '0.9s' }}>
        <IsoSphere size={34} color="#f4f2fe" />
      </div>

      <div className="absolute left-[16%] top-[80%] animate-float" style={{ animationDelay: '1.8s' }}>
        <IsoCube size={48} color="#f5b8cb" />
      </div>
    </div>
  )
}

/** The floating cluster used by the stack section. */
export function ClusterScene({ className = '' }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <div className="absolute left-1/2 top-[6%] -translate-x-1/2 animate-float-slow">
        <IsoCube size={128} color="#f5b8cb" />
      </div>
      <div className="absolute left-[4%] top-[36%] animate-float" style={{ animationDelay: '0.6s' }}>
        <IsoCube size={120} color="#c9c2f7" />
      </div>
      <div className="absolute right-[4%] top-[42%] animate-float" style={{ animationDelay: '1.2s' }}>
        <IsoCube size={120} color="#b4a8f6" />
      </div>
      <div className="absolute left-1/2 top-[62%] -translate-x-1/2 animate-float-slow" style={{ animationDelay: '0.9s' }}>
        <IsoCube size={124} color="#3b23c9" />
      </div>

      <div className="absolute left-1/2 top-[46%] -translate-x-1/2 animate-float" style={{ animationDelay: '0.3s' }}>
        <IsoSphere size={52} color="#ff7a00" />
      </div>
      <div className="absolute left-[22%] top-[26%] animate-float" style={{ animationDelay: '1.5s' }}>
        <IsoSphere size={30} color="#ffffff" />
      </div>
      <div className="absolute right-[18%] top-[30%] animate-float-slow" style={{ animationDelay: '0.5s' }}>
        <IsoSphere size={24} color="#ffffff" />
      </div>
    </div>
  )
}

/** Sparse drifting cubes for the light sections. */
export function DriftScene({ className = '' }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <div className="absolute right-[12%] top-[8%] animate-float-slow opacity-90">
        <IsoCube size={120} color="#f4f2fe" />
      </div>
      <div className="absolute right-[46%] top-[38%] animate-float opacity-80" style={{ animationDelay: '1s' }}>
        <IsoCube size={64} color="#e2ddfb" />
      </div>
      <div className="absolute right-[24%] top-[62%] animate-float opacity-95" style={{ animationDelay: '0.5s' }}>
        <IsoCube size={88} color="#ffffff" />
      </div>
      <div className="absolute right-[64%] top-[74%] animate-float-slow opacity-70" style={{ animationDelay: '1.6s' }}>
        <IsoCube size={48} color="#f5b8cb" />
      </div>
    </div>
  )
}
