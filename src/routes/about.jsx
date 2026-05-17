import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useRef, useState } from "react"

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vantage Rentals" },
      {
        name: "description",
        content:
          "Vantage is a small team obsessed with the experience of driving a great car.",
      },
      { property: "og:title", content: "About — Vantage Rentals" },
      {
        property: "og:description",
        content:
          "Vantage is a small team obsessed with the experience of driving a great car.",
      },
    ],
  }),

  component: AboutPage,
})

const stats = [
  { end: 8,    decimals: 0, suffix: "",  label: "Cars in the fleet" },
  { end: 4,    decimals: 0, suffix: "",  label: "Cities across Nigeria" },
  { end: 1.2,  decimals: 1, suffix: "k", label: "Drivers each year" },
  { end: 4.9,  decimals: 1, suffix: "",  label: "Average rating" },
]

function useCountUp(end, decimals, duration = 1800) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    const startTime = performance.now()
    const factor = Math.pow(10, decimals)

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * end * factor) / factor)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [started, end, decimals, duration])

  return { value, ref }
}

function StatItem({ end, decimals, suffix, label }) {
  const { value, ref } = useCountUp(end, decimals)
  const display = decimals > 0 ? value.toFixed(decimals) : String(Math.round(value))

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="font-display text-5xl text-primary">
        {display}{suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>
    </div>
  )
}

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-12 pt-40 lg:px-10">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">
          Our story
        </p>

        <h1 className="font-display text-5xl leading-tight md:text-6xl">
          Built for the people who care which car shows up.
        </h1>

        <p className="mt-8 text-lg text-muted-foreground">
          Vantage started in 2019 with a single Porsche 911, a garage in
          Victoria Island, and a stubborn idea: that renting a car shouldn't feel
          like the worst part of a trip. We kept the fleet small on purpose.
          Eight cars, each one chosen because we wanted to drive it ourselves.
        </p>

        <p className="mt-4 text-lg text-muted-foreground">
          Today we look after travellers, film crews, weekend escapists, and a
          handful of locals who'd rather not own a car. Every reservation is
          handled by a person. Every car arrives full, polished, and on time.
          That's the whole offer.
        </p>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 md:grid-cols-4 lg:px-10">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
        <h2 className="font-display text-3xl">What you can expect</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            [
              "Hand delivery",
              "We bring the car to you. Hotel, airport, address — your choice.",
            ],
            [
              "Real people",
              "A human answers the phone. No call centres, no scripts.",
            ],
            [
              "No surprises",
              "The price you see is the price you pay. Insurance included.",
            ],
            [
              "Immaculate cars",
              "Detailed inside and out before every single reservation.",
            ],
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
