import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import { useState } from "react"
import {
  ArrowLeft,
  Users,
  Gauge,
  Zap,
  Timer,
  Fuel,
  Check,
} from "lucide-react"

import { getCar, cars } from "@/data/cars"
import { BookingDialog } from "@/components/booking-dialog"
import { CarCard } from "@/components/car-card"

export const Route = createFileRoute("/fleet/$carId")({
  loader: ({ params }) => {
    const car = getCar(params.carId)
    if (!car) throw notFound()
    return { car }
  },

  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.car.name} — Vantage Rentals` },
          {
            name: "description",
            content: `${loaderData.car.tagline}. Reserve the ${loaderData.car.name} from ₦${loaderData.car.pricePerDay.toLocaleString()}/day.`,
          },
          {
            property: "og:title",
            content: `${loaderData.car.name} — Vantage Rentals`,
          },
          {
            property: "og:description",
            content: loaderData.car.tagline,
          },
          {
            property: "og:image",
            content: loaderData.car.image,
          },
        ]
      : [{ title: "Car — Vantage Rentals" }],
  }),

  notFoundComponent: () => (
    <div className="mx-auto max-w-7xl px-6 py-32 text-center lg:px-10">
      <h1 className="font-display text-5xl">Car not found</h1>
      <p className="mt-4 text-muted-foreground">
        That car isn't in our fleet.
      </p>

      <Link
        to="/fleet"
        className="mt-6 inline-flex rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground"
      >
        Back to fleet
      </Link>
    </div>
  ),

  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-7xl px-6 py-32 text-center lg:px-10">
      <h1 className="font-display text-3xl">Something went wrong</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {error.message}
      </p>

      <button
        onClick={reset}
        className="mt-6 rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground"
      >
        Try again
      </button>
    </div>
  ),

  component: CarPage,
})

function CarPage() {
  const { car } = Route.useLoaderData()
  const [open, setOpen] = useState(false)

  const others = cars.filter((c) => c.id !== car.id).slice(0, 3)

  const specs = [
    {
      icon: <Users className="h-4 w-4" />,
      label: "Seats",
      value: String(car.seats),
    },
    {
      icon: <Gauge className="h-4 w-4" />,
      label: "Gearbox",
      value: car.transmission,
    },
    {
      icon: <Fuel className="h-4 w-4" />,
      label: "Fuel",
      value: car.fuel,
    },
    {
      icon: <Zap className="h-4 w-4" />,
      label: "Top speed",
      value: car.topSpeed,
    },
    {
      icon: <Timer className="h-4 w-4" />,
      label: "Acceleration",
      value: car.acceleration,
    },
  ]

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-28 lg:px-10">
        <Link
          to="/fleet"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to fleet
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-5">

          {/* Image */}
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-3xl border border-border bg-card">
              <img
                src={car.image}
                alt={car.name}
                width={1280}
                height={896}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">
              {car.category}
            </p>

            <h1 className="mt-3 font-display text-5xl leading-tight">
              {car.name}
            </h1>

            <p className="mt-3 text-muted-foreground">
              {car.tagline}
            </p>

            <div className="my-8 flex items-baseline gap-2">
              <span className="font-display text-5xl text-primary">
                ₦{car.pricePerDay.toLocaleString()}
              </span>

              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                per day · all in
              </span>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="w-full rounded-full bg-primary py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
            >
              Reserve this car
            </button>

            {/* Specs */}
            <dl className="mt-10 grid grid-cols-2 gap-4">
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-card p-4"
                >
                  <dt className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {s.icon} {s.label}
                  </dt>

                  <dd className="mt-2 font-display text-lg">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Features */}
            <div className="mt-8">
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Features
              </h3>

              <ul className="mt-4 space-y-2">
                {car.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-sm"
                  >
                    <Check className="h-4 w-4 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Cars */}
      <section className="border-t border-border/60 bg-card/20">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <h2 className="mb-10 font-display text-3xl">
            You might also like
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {others.map((c) => (
              <CarCard key={c.id} car={c} />
            ))}
          </div>
        </div>
      </section>

      <BookingDialog
        car={car}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  )
}