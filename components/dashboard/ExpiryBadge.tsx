function daysUntil(isoDate: string): number {
  return Math.ceil((Date.parse(isoDate) - Date.now()) / 86_400_000)
}

export function ExpiryBadge({ date }: { date: string | null }) {
  if (!date) return <span style={{ color: 'var(--color-outline)' }}>—</span>

  const days = daysUntil(date)
  const isExpired = days < 0
  const isWarning = days >= 0 && days <= 30

  if (isExpired) return (
    <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: 'var(--color-error)' }}>
      {date}
      <span className="rounded px-1 py-0.5 text-xs" style={{ background: 'color-mix(in srgb, var(--color-error-container) 60%, transparent)' }}>expired</span>
    </span>
  )

  if (isWarning) return (
    <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>
      {date}
      <span className="rounded px-1 py-0.5 text-xs" style={{ background: 'var(--color-surface-container-highest)' }}>{days}d</span>
    </span>
  )

  return <span className="text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>{date}</span>
}
