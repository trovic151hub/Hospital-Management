import { createFileRoute } from "@tanstack/react-router"
import { MapPin, Clock, Phone } from "lucide-react"

import lisbon from "@/assets/lisbon.jpg"

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations — Vantage Rentals" },
      {
        name: "description",
        content:
          "Pick up your car at Lisbon Airport, downtown Lisbon, Porto or the Algarve. Or have it delivered.",
      },
      {
        property: "og:title",
        content: "Locations — Vantage Rentals",
      },
      {
        property: "og:description",
        content:
          "Pick up your car at Lisbon Airport, downtown Lisbon, Porto or the Algarve.",
      },
    ],
  }),

  component: LocationsPage,
})

const locations = [
  {
    name: "Lisbon Airport",
    address: "Terminal 1, Arrivals · Lisboa",
    hours: "06:00 – 23:30",
    phone: "+351 210 000 001",
  },
  {
    name: "Lisbon — Chiado",
    address: "Rua Garrett 42, Lisboa",
    hours: "09:00 – 20:00",
    phone: "+351 210 000 002",
  },
  {
    name: "Porto Airport",
    address: "Terminal 1, Arrivals · Porto",
    hours: "07:00 – 22:00",
    phone: "+351 220 000 003",
  },
  {
    name: "Faro (Algarve)",
    address: "Av. da República 10, Faro",
    hours: "08:00 – 21:00",
    phone: "+351 289 000 004",
  },
]

function LocationsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={lisbon}
            alt="Lisbon at twilight"
            className="h-full w-full object-cover opacity-50"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-40 lg:px-10">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">
            Where we operate
          </p>

          <h1 className="font-display text-5xl md:text-6xl">
            Four cities. One standard.
          </h1>

          <p className="mt-4 max-w-xl text-muted-foreground">
            Pick up at any of our four locations — or have your car delivered
            to your hotel or address.
          </p>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          {locations.map((l) => (
            <div
              key={l.name}
              className="rounded-2xl border border-border bg-card p-8"
            >
              {/* Title */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </div>

                <h2 className="font-display text-2xl">{l.name}</h2>
              </div>

              {/* Details */}
              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                  {l.address}
                </p>

                <p className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 text-primary" />
                  {l.hours}
                </p>

                <p className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-primary" />
                  {l.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}