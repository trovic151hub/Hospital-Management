import { useState } from "react"
import { X } from "lucide-react"
import { toast } from "sonner"

export function BookingDialog({ car, open, onOpenChange }) {
  const [sending, setSending] = useState(false)

  if (!open) return null

  const onSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      toast.success(`Reservation request sent for ${car.name}. We'll be in touch shortly.`)
      onOpenChange(false)
    }, 700)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onOpenChange(false)
      }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-2xl">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <h2 className="font-display text-2xl">Reserve {car.name}</h2>
        <p className="mt-1 text-sm text-muted-foreground">€{car.pricePerDay}/day · All inclusive</p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Name</label>
              <input
                required
                name="name"
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Email</label>
              <input
                required
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Pickup date</label>
              <input
                required
                type="date"
                name="start"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Return date</label>
              <input
                required
                type="date"
                name="end"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Notes (optional)</label>
            <textarea
              name="notes"
              rows={3}
              placeholder="Delivery address, special requests..."
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send reservation request"}
          </button>
        </form>
      </div>
    </div>
  )
}
