export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary ${className}`}
      {...props}
    />
  )
}
