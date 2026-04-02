import { sites, type MigrationStatus } from '@/data/sites'
import { PipelineColumn } from '@/components/dashboard/PipelineColumn'

const STAGES: MigrationStatus[] = [
  'pending', 'dump-received', 'template-built',
  'content-migrated', 'client-approved', 'live',
]

export function MigrationTab() {
  const total = sites.length
  const done  = sites.filter(s => s.migrationStatus === 'live').length
  const pct   = Math.round((done / total) * 100)

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded px-5 py-4"
        style={{ background: 'var(--color-surface-container-low)', border: '1px solid var(--color-outline-variant)' }}>
        <div className="mb-2 flex items-center justify-between text-sm">
          <span style={{ color: 'var(--color-on-surface-variant)' }}>Migration progress</span>
          <span className="font-semibold" style={{ color: 'var(--color-on-surface)' }}>{done} / {total} live</span>
        </div>
        <div className="h-2 w-full rounded-full overflow-hidden" style={{ background: 'var(--color-surface-container-highest)' }}>
          <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: 'var(--color-dash-green)' }} />
        </div>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="flex gap-3" style={{ minWidth: 'max-content' }}>
          {STAGES.map(stage => (
            <div key={stage} style={{ width: '180px' }}>
              <PipelineColumn stage={stage} sites={sites.filter(s => s.migrationStatus === stage)} />
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs" style={{ color: 'var(--color-outline)' }}>
        Read-only — update migration status by editing <code className="font-mono">data/sites.ts</code> and redeploying.
      </p>
    </div>
  )
}
