import type { Site } from '@/data/sites'
import { ExpiryBadge } from '@/components/dashboard/ExpiryBadge'

const CATEGORY_LABEL: Record<number, string> = { 1: 'Brochure', 2: 'CMS', 3: 'Shop' }

const STATUS_COLOR: Record<string, string> = {
  live:    'var(--color-dash-green)',
  pending: 'var(--color-primary)',
  parked:  'var(--color-on-surface-variant)',
}

export function SiteCard({ site }: { site: Site }) {
  const costDisplay = site.annualCost != null
    ? `€${site.annualCost}/yr`
    : site.monthlyCost != null
    ? `€${site.monthlyCost}/mo`
    : '—'

  return (
    <tr style={{ borderBottom: '1px solid var(--color-outline-variant)' }} className="transition-colors hover:bg-[--color-surface-container]">
      <td className="px-4 py-3">
        <div className="font-medium" style={{ color: 'var(--color-on-surface)' }}>{site.name}</div>
        <a href={site.url} target="_blank" rel="noopener noreferrer"
          className="text-xs transition-colors hover:opacity-80"
          style={{ color: 'var(--color-on-surface-variant)' }}>
          {site.url.replace('https://', '')}
        </a>
      </td>
      <td className="px-4 py-3">
        <span className="rounded px-2 py-0.5 text-xs" style={{ background: 'var(--color-surface-container)', color: 'var(--color-on-surface-variant)' }}>
          {CATEGORY_LABEL[site.category]}
        </span>
      </td>
      <td className="px-4 py-3">
        <span className="text-xs font-medium" style={{ color: STATUS_COLOR[site.status] }}>{site.status}</span>
      </td>
      <td className="px-4 py-3"><ExpiryBadge date={site.hostingExpiry} /></td>
      <td className="px-4 py-3"><ExpiryBadge date={site.domainExpiry} /></td>
      <td className="px-4 py-3 text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>{costDisplay}</td>
      <td className="px-4 py-3">
        <div className="text-sm" style={{ color: 'var(--color-on-surface)' }}>{site.client.name}</div>
        {site.client.email && (
          <a href={`mailto:${site.client.email}`} className="text-xs hover:opacity-80" style={{ color: 'var(--color-on-surface-variant)' }}>
            {site.client.email}
          </a>
        )}
        {site.client.phone && <div className="text-xs" style={{ color: 'var(--color-on-surface-variant)' }}>{site.client.phone}</div>}
      </td>
    </tr>
  )
}
