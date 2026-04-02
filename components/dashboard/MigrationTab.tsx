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
      <div className="px-5 py-5"
        style={{ background: 'var(--color-surface-container-low)', border: '1px solid var(--color-outline-variant)', borderLeft: '3px solid var(--color-dash-green)' }}>
        <div className="mb-3 flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.15em]" style={{ color: 'var(--color-on-surface-variant)' }}>Migration progress</div>
            <div className="mt-1 text-3xl font-extrabold leading-none" style={{ color: 'var(--color-dash-green)' }}>{pct}%</div>
          </div>
          <div className="text-right">
            <span className="text-sm font-semibold" style={{ color: 'var(--color-on-surface)' }}>{done} live</span>
            <span className="text-sm" style={{ color: 'var(--color-on-surface-variant)' }}> / {total} total</span>
          </div>
        </div>
        <div className="h-1.5 w-full overflow-hidden" style={{ background: 'var(--color-surface-container-highest)' }}>
          <div className="h-full transition-all" style={{ width: `${pct}%`, background: 'var(--color-dash-green)' }} />
        </div>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="flex gap-3" style={{ minWidth: 'max-content' }}>
          {STAGES.map(stage => (
            <div key={stage} style={{ width: '200px' }}>
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
