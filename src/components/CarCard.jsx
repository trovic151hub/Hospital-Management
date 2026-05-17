import { Link } from "@tanstack/react-router"
import { ArrowUpRight, Users, Gauge } from "lucide-react"

export function CarCard({ car }) {
  return (
    <Link
      to="/fleet/$carId"
      params={{ carId: car.id }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_rgba(201,168,76,0.35)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={car.image}
          alt={car.name}
          loading="lazy"
          width={1280}
          height={896}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-foreground backdrop-blur">
          {car.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl leading-tight">
              {car.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {car.tagline}
            </p>
          </div>

          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
        </div>

        <div className="mt-auto flex items-end justify-between border-t border-border/60 pt-4">
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5" />
              {car.seats}
            </span>

            <span className="flex items-center gap-1.5">
              <Gauge className="h-3.5 w-3.5" />
              {car.transmission}
            </span>
          </div>

          <div className="text-right">
            <div className="font-display text-2xl text-primary">
              ₦{car.pricePerDay.toLocaleString()}
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              per day
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CarCard