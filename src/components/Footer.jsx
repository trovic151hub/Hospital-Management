import { Link } from "@tanstack/react-router"

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4 lg:px-10">

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            <span className="font-display text-xl">Vantage</span>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Rentals
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            A curated fleet of luxury, sports and electric cars. Delivered across Portugal.
          </p>
        </div>

        <FooterCol title="Drive">
          <FooterLink to="/fleet">Full fleet</FooterLink>
          <FooterLink to="/locations">Locations</FooterLink>
          <FooterLink to="/contact">Concierge</FooterLink>
        </FooterCol>

        <FooterCol title="Company">
          <FooterLink to="/about">About us</FooterLink>
          <FooterLink to="/contact">Press</FooterLink>
          <FooterLink to="/contact">Careers</FooterLink>
        </FooterCol>

        <FooterCol title="Contact">
          <p className="text-sm text-muted-foreground">Rua Garrett 42, Lisboa</p>
          <p className="text-sm text-muted-foreground">+351 210 000 000</p>
          <p className="text-sm text-muted-foreground">hello@vantagerentals.pt</p>
        </FooterCol>

      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row lg:px-10">
          <span>© {new Date().getFullYear()} Vantage Rentals. All rights reserved.</span>
          <span>Lisbon · Porto · Algarve</span>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }) {
  return (
    <div className="space-y-3">
      <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-foreground">
        {title}
      </h4>

      <div className="flex flex-col gap-2">
        {children}
      </div>
    </div>
  )
}

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  )
}

export default Footer