import { Link } from "@tanstack/react-router"
import { Users, Gauge, Fuel } from "lucide-react"

export function CarCard({ car }) {
  return (
    <Link
      to="/fleet/$carId"
      params={{ carId: car.id }}
      className="group block overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"
    >
      <div className="overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary">
              {car.category}
            </p>
            <h3 className="mt-1 font-display text-xl">{car.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
              {car.tagline}
            </p>
          </div>

          <div className="shrink-0 text-right">
            <span className="font-display text-2xl text-primary">
              €{car.pricePerDay}
            </span>
            <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              /day
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" />
            {car.seats}
          </span>
          <span className="flex items-center gap-1.5">
            <Gauge className="h-3.5 w-3.5" />
            {car.transmission}
          </span>
          <span className="flex items-center gap-1.5">
            <Fuel className="h-3.5 w-3.5" />
            {car.fuel}
          </span>
        </div>
      </div>
    </Link>
  )
}
