export function Label({ className = "", children, ...props }) {
  return (
    <label
      className={`text-xs uppercase tracking-[0.15em] text-muted-foreground ${className}`}
      {...props}
    >
      {children}
    </label>
  )
}
