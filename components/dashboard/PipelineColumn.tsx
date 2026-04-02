import type { Site, MigrationStatus } from '@/data/sites'

const STAGE_LABEL: Record<MigrationStatus, string> = {
  'pending':          'Pending',
  'dump-received':    'Dump received',
  'template-built':   'Template built',
  'content-migrated': 'Content migrated',
  'client-approved':  'Client approved',
  'live':             'Live',
}

const STAGE_COLOR: Record<MigrationStatus, string> = {
  'pending':          'var(--color-on-surface-variant)',
  'dump-received':    '#60a5fa',
  'template-built':   '#c084fc',
  'content-migrated': '#fb923c',
  'client-approved':  'var(--color-primary)',
  'live':             'var(--color-dash-green)',
}

const CATEGORY_LABEL: Record<number, string> = { 1: 'Brochure', 2: 'CMS', 3: 'Shop' }

export function PipelineColumn({ stage, sites }: { stage: MigrationStatus; sites: Site[] }) {
  return (
    <div className="flex flex-col gap-2 min-w-[180px]">
      <div className="flex items-center justify-between px-3 py-2.5"
        style={{ background: 'var(--color-surface-container)', borderTop: `2px solid ${STAGE_COLOR[stage]}`, borderRight: '1px solid var(--color-outline-variant)', borderBottom: '1px solid var(--color-outline-variant)', borderLeft: '1px solid var(--color-outline-variant)' }}>
        <span className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: STAGE_COLOR[stage] }}>{STAGE_LABEL[stage]}</span>
        <span className="ml-2 px-1.5 py-0.5 text-xs font-mono"
          style={{ background: 'var(--color-surface-container-highest)', color: 'var(--color-on-surface-variant)' }}>
          {sites.length}
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        {sites.length === 0 ? (
          <div className="rounded px-3 py-4 text-center text-xs border border-dashed"
            style={{ borderColor: 'var(--color-outline-variant)', color: 'var(--color-outline)' }}>
            Empty
          </div>
        ) : sites.map(site => (
          <div key={site.id} className="px-3 py-2.5 transition-colors"
            style={{ background: 'var(--color-surface-container-low)', borderTop: '1px solid var(--color-outline-variant)', borderRight: '1px solid var(--color-outline-variant)', borderBottom: '1px solid var(--color-outline-variant)', borderLeft: `2px solid ${STAGE_COLOR[stage]}` }}>
            <div className="text-sm font-medium leading-tight" style={{ color: 'var(--color-on-surface)' }}>{site.name}</div>
            <div className="mt-0.5 flex items-center gap-1.5">
              <a href={site.url} target="_blank" rel="noopener noreferrer"
                className="text-xs truncate hover:opacity-80"
                style={{ color: 'var(--color-outline)' }}>
                {site.url.replace('https://', '')}
              </a>
              <span className="shrink-0 rounded px-1 py-0.5 text-xs"
                style={{ background: 'var(--color-surface-container)', color: 'var(--color-on-surface-variant)' }}>
                {CATEGORY_LABEL[site.category]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
