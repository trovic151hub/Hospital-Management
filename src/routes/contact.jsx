import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vantage Rentals" },
      {
        name: "description",
        content:
          "Talk to the Vantage concierge. We answer in minutes during business hours.",
      },
      {
        property: "og:title",
        content: "Contact — Vantage Rentals",
      },
      {
        property: "og:description",
        content:
          "Talk to the Vantage concierge. We answer in minutes during business hours.",
      },
    ],
  }),

  component: ContactPage,
})

function ContactPage() {
  const [sending, setSending] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSending(true)

    setTimeout(() => {
      setSending(false)
      toast.success("Message sent — we'll be in touch shortly.")
      e.target.reset()
    }, 700)
  }

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-40 lg:px-10">
      <p className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">
        Concierge
      </p>

      <h1 className="font-display text-5xl md:text-6xl">
        Tell us where you're going.
      </h1>

      <p className="mt-4 max-w-xl text-muted-foreground">
        Need a specific car, a long-term rental, or pick-up outside our hours?
        Drop us a line.
      </p>

      <div className="mt-16 grid gap-12 lg:grid-cols-5">

        {/* Contact Info */}
        <div className="space-y-8 lg:col-span-2">
          <ContactRow icon={<Mail className="h-4 w-4" />} title="Email">
            hello@vantagerentals.ng
          </ContactRow>

          <ContactRow icon={<Phone className="h-4 w-4" />} title="Phone">
            +234 801 000 0000
          </ContactRow>

          <ContactRow icon={<MapPin className="h-4 w-4" />} title="Studio">
            10 Adeola Odeku Street, Victoria Island, Lagos
          </ContactRow>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="space-y-5 rounded-2xl border border-border bg-card p-8 lg:col-span-3"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name">
              <Input required name="name" placeholder="Ada Lovelace" />
            </Field>

            <Field label="Email">
              <Input
                required
                type="email"
                name="email"
                placeholder="ada@example.com"
              />
            </Field>
          </div>

          <Field label="Subject">
            <Input
              required
              name="subject"
              placeholder="Weekend in Abuja"
            />
          </Field>

          <Field label="Message">
            <Textarea
              required
              name="message"
              rows={6}
              placeholder="When are you travelling, and what kind of car do you have in mind?"
            />
          </Field>

          <Button
            type="submit"
            disabled={sending}
            className="w-full rounded-full bg-primary py-6 text-sm font-medium text-primary-foreground hover:bg-accent"
          >
            {sending ? "Sending…" : "Send message"}
          </Button>
        </form>
      </div>
    </section>
  )
}

/* Contact Row */
function ContactRow({ icon, title, children }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
        {icon}
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {title}
        </p>
        <p className="mt-1 text-sm text-foreground">{children}</p>
      </div>
    </div>
  )
}

/* Field Wrapper */
function Field({ label, children }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  )
}