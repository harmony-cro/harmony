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
        className="atelier-glass sticky top-0 z-10 flex items-center justify-between px-6 py-4"
        style={{ borderBottom: '1px solid var(--color-outline-variant)' }}
      >
        <span className="flex items-baseline gap-2 text-base tracking-tight">
          <span className="text-gold-gradient font-extrabold">Harmony</span>
          <span className="font-light text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>Dashboard</span>
        </span>
        <form action={logout}>
          <button
            type="submit"
            className="px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition-opacity hover:opacity-70"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            Logout
          </button>
        </form>
      </header>

      {/* Tab nav */}
      <nav
        className="flex gap-0 px-6"
        style={{ background: 'var(--color-surface-container-low)', borderBottom: '1px solid var(--color-outline-variant)' }}
      >
        {([
          { key: 'sites', label: 'Sites' },
          { key: 'migration', label: 'Migration' },
        ] as const).map(({ key, label }) => (
          <a
            key={key}
            href={`/dashboard?tab=${key}`}
            className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] border-b-2 -mb-px transition-colors"
            style={{
              borderColor: activeTab === key ? 'var(--color-primary)' : 'transparent',
              color: activeTab === key ? 'var(--color-on-surface)' : 'var(--color-on-surface-variant)',
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
