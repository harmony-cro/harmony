import { logout } from '@/app/dashboard/actions'
import { SitesTab } from '@/components/dashboard/SitesTab'
import { MigrationTab } from '@/components/dashboard/MigrationTab'

export const metadata = { title: 'Harmony Dashboard' }

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>
}) {
  const { tab } = await searchParams
  const activeTab = tab === 'migration' ? 'migration' : 'sites'

  return (
    <div className="flex min-h-screen flex-col" style={{ background: 'var(--color-background)', color: 'var(--color-on-surface)' }}>
      {/* Top bar */}
      <header
        className="sticky top-0 z-10 flex items-center justify-between px-6 py-3"
        style={{ background: 'var(--color-surface-container-low)', borderBottom: '1px solid var(--color-outline-variant)' }}
      >
        <span className="text-base font-bold tracking-tight">
          <span style={{ color: 'var(--color-primary)' }}>Harmony</span>
          {' '}
          <span className="font-normal" style={{ color: 'var(--color-on-surface-variant)' }}>Dashboard</span>
        </span>
        <form action={logout}>
          <button
            type="submit"
            className="rounded px-3 py-1.5 text-xs transition-colors"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            Logout
          </button>
        </form>
      </header>

      {/* Tab nav */}
      <nav
        className="flex gap-1 px-6"
        style={{ background: 'var(--color-surface-container-low)', borderBottom: '1px solid var(--color-outline-variant)' }}
      >
        {([
          { key: 'sites', label: 'Sites' },
          { key: 'migration', label: 'Migration' },
        ] as const).map(({ key, label }) => (
          <a
            key={key}
            href={`/dashboard?tab=${key}`}
            className="px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors"
            style={{
              borderColor: activeTab === key ? 'var(--color-primary)' : 'transparent',
              color: activeTab === key ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
            }}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Tab content */}
      <main className="flex-1 p-6">
        {activeTab === 'sites' ? <SitesTab /> : <MigrationTab />}
      </main>
    </div>
  )
}
