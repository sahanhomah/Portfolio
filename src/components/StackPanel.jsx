import { marquee } from '../data/site'
import { ClusterScene } from './iso/IsoShapes'
import ScrollCue from './ScrollCue'

/**
 * The full-bleed indigo panel from the reference clip. Text is inverted here,
 * so `bg-brand-300` becomes the surface and `text-brand-900` the foreground.
 */
export default function StackPanel() {
  const track = [...marquee.stack, ...marquee.stack]

  return (
    <section className="relative overflow-hidden bg-brand-300 py-24 text-brand-900 lg:py-36">
      {/* Concentric rings echoing the reference background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-[10%] top-1/2 h-[820px] w-[820px] -translate-y-1/2 rounded-full border border-brand-900/10" />
        <div className="absolute -right-[4%] top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full border border-brand-900/10" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow reveal text-accent-pink">{marquee.eyebrow}</p>

            <h2 className="mt-8 text-[2.75rem] font-extrabold leading-[1.05] tracking-tightest text-brand-900 sm:text-6xl lg:text-[4rem]">
              {marquee.headline.map((line, index) => (
                <span
                  key={line}
                  className="reveal block"
                  style={{ '--reveal-delay': `${index * 90}ms` }}
                >
                  {line}
                </span>
              ))}
            </h2>

            <p
              className="reveal mt-8 max-w-md text-lg leading-relaxed text-brand-900/80"
              style={{ '--reveal-delay': '180ms' }}
            >
              {marquee.body}
            </p>

            <div className="reveal mt-14" style={{ '--reveal-delay': '260ms' }}>
              <ScrollCue href="#projects" label={marquee.scrollLabel} tone="light" />
            </div>
          </div>

          <div className="relative h-[380px] sm:h-[460px] lg:h-[560px]">
            <ClusterScene className="absolute inset-0" />
          </div>
        </div>
      </div>

      {/* Infinite tech marquee */}
      <div className="relative mt-20 flex overflow-hidden border-y border-brand-900/15 py-6">
        <div className="flex min-w-full flex-shrink-0 animate-marquee items-center gap-12 pr-12">
          {track.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="whitespace-nowrap text-2xl font-extrabold uppercase tracking-tight text-brand-900/70"
            >
              {item}
              <span className="ml-12 text-accent-pink">*</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
