import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Truck,
  Star,
} from "lucide-react"

import heroImg from "@/assets/hero.jpg"
import heroVideo from "@/assets/hero.mp4"
import { cars } from "@/data/cars"
import { CarCard } from "@/components/car-card"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vantage Rentals — Premium car hire in Lisbon" },
      {
        name: "description",
        content:
          "Hand-picked luxury, sports and electric cars delivered to you anywhere in Portugal.",
      },
      {
        property: "og:title",
        content: "Vantage Rentals — Premium car hire",
      },
      {
        property: "og:description",
        content:
          "Hand-picked luxury, sports and electric cars delivered to you anywhere in Portugal.",
      },
      {
        property: "og:image",
        content: heroImg,
      },
    ],
  }),

  component: HomePage,
})

function HomePage() {
  const featured = cars.filter((c) => c.featured)

  return (
    <>
      {/* HERO */}
      <section className="relative -mt-16 overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={heroImg}
            className="h-full w-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 lg:px-10">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-background/40 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-primary backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Lisbon · Porto · Algarve
          </span>

          <h1 className="font-display text-5xl leading-[1.02] text-foreground md:text-7xl lg:text-[5.5rem]">
            A car worth the <br />
            <span className="text-primary italic">drive home.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Vantage curates a small fleet of luxury, sports and electric cars —
            delivered to your door, immaculate, every single time.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/fleet"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-accent"
            >
              Browse the fleet
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-border px-6 py-3 text-sm text-foreground hover:bg-card"
            >
              Talk to concierge
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 lg:px-10">
          <Value
            icon={<Truck className="h-5 w-5" />}
            title="Delivered to you"
            text="We bring the car to your hotel, airport or address. No queues, no counters."
          />
          <Value
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Fully insured"
            text="Comprehensive insurance is included on every reservation, with zero excess options."
          />
          <Value
            icon={<Sparkles className="h-5 w-5" />}
            title="Always immaculate"
            text="Every car is hand-detailed before delivery — inside and out, no exceptions."
          />
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">
              The fleet
            </p>
            <h2 className="font-display text-4xl md:text-5xl">
              This week's picks
            </h2>
          </div>

          <Link
            to="/fleet"
            className="hidden text-sm text-muted-foreground hover:text-foreground md:inline-flex md:items-center md:gap-1"
          >
            See all cars <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
          <div className="mb-6 flex justify-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>

          <blockquote className="font-display text-3xl leading-snug md:text-4xl">
            "The Obsidian GT was waiting outside the hotel, polished and full.
            The whole weekend felt effortless — that's the only word for it."
          </blockquote>

          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-muted-foreground">
            Marta R. · Lisbon
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card via-card to-background p-12 md:p-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl">
              Plan something memorable.
            </h2>

            <p className="mt-4 text-muted-foreground">
              Tell us where you're going. We'll pair you with the right car and
              arrange delivery.
            </p>

            <Link
              to="/fleet"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-accent"
            >
              Start a reservation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* VALUE COMPONENT */
function Value({ icon, title, text }) {
  return (
    <div className="space-y-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
        {icon}
      </div>

      <h3 className="font-display text-xl">{title}</h3>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  )
}