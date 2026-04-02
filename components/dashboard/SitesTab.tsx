import { sites } from '@/data/sites'
import { SiteCard } from '@/components/dashboard/SiteCard'

export function SitesTab() {
  const live    = sites.filter(s => s.status === 'live').length
  const pending = sites.filter(s => s.status === 'pending').length
  const parked  = sites.filter(s => s.status === 'parked').length

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4">
        {[
          { label: 'Total',   value: sites.length, color: 'var(--color-on-surface)' },
          { label: 'Live',    value: live,          color: 'var(--color-dash-green)' },
          { label: 'Pending', value: pending,       color: 'var(--color-primary)' },
          { label: 'Parked',  value: parked,        color: 'var(--color-on-surface-variant)' },
        ].map(({ label, value, color }) => (
          <div key={label} className="p-4 min-w-[88px]"
            style={{ background: 'var(--color-surface-container-low)', border: '1px solid var(--color-outline-variant)', borderLeft: `3px solid ${color}` }}>
            <div className="text-3xl font-extrabold leading-none" style={{ color }}>{value}</div>
            <div className="mt-1.5 text-xs uppercase tracking-[0.15em]" style={{ color: 'var(--color-on-surface-variant)' }}>{label}</div>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto" style={{ border: '1px solid var(--color-outline-variant)', background: 'var(--color-surface-container-low)' }}>
        <table className="w-full text-left">
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-outline-variant)', background: 'var(--color-surface-container)' }}>
              {['Site', 'Category', 'Status', 'Hosting expiry', 'Domain expiry', 'Cost', 'Client'].map(h => (
                <th key={h} className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em]"
                  style={{ color: 'var(--color-on-surface-variant)' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sites.map(site => <SiteCard key={site.id} site={site} />)}
          </tbody>
        </table>
      </div>
    </div>
  )
}
