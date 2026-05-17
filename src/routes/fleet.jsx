import { createFileRoute } from "@tanstack/react-router"
import { useState, useMemo } from "react"

import { cars, categories } from "@/data/cars"
import { CarCard } from "@/components/car-card"
import { cn } from "@/lib/utils"

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Our fleet — Vantage Rentals" },
      {
        name: "description",
        content:
          "Browse every car in the Vantage fleet — sedans, sports cars, SUVs, electric and more.",
      },
      {
        property: "og:title",
        content: "Our fleet — Vantage Rentals",
      },
      {
        property: "og:description",
        content:
          "Browse every car in the Vantage fleet — sedans, sports cars, SUVs, electric and more.",
      },
    ],
  }),

  component: FleetPage,
})

function FleetPage() {
  const [active, setActive] = useState("All")
  const [maxPrice, setMaxPrice] = useState(850000)

  const filtered = useMemo(() => {
    return cars.filter(
      (c) =>
        (active === "All" || c.category === active) &&
        c.pricePerDay <= maxPrice
    )
  }, [active, maxPrice])

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 lg:px-10">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">
            The collection
          </p>

          <h1 className="font-display text-5xl md:text-6xl">
            Every car in the fleet.
          </h1>

          <p className="mt-4 max-w-xl text-muted-foreground">
            Eight cars. Hand-picked for character — not catalogue depth.
            Filter by what you need.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-xs uppercase tracking-[0.15em] transition-colors",
                  active === cat
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Price Filter */}
          <div className="flex items-center gap-4">
            <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Up to ₦{maxPrice.toLocaleString()}/day
            </label>

            <input
              type="range"
              min={120000}
              max={850000}
              step={10000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-40 accent-[var(--primary)]"
            />
          </div>
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">
            No cars match those filters.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}