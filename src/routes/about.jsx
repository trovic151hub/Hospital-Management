import { createFileRoute } from "@tanstack/react-router"

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
  { v: "8", l: "Cars in the fleet" },
  { v: "4", l: "Cities across Portugal" },
  { v: "1.2k", l: "Drivers each year" },
  { v: "4.9", l: "Average rating" },
]

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
          Alcântara, and a stubborn idea: that renting a car shouldn't feel
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
            <div key={s.l}>
              <div className="font-display text-5xl text-primary">{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {s.l}
              </div>
            </div>
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