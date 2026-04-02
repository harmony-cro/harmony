import { login } from '@/app/dashboard/actions'

export const metadata = { title: 'Login — Harmony Dashboard' }

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'var(--color-background)' }}>
      <div className="w-full max-w-sm">
        <div className="mb-10 text-center">
          <h1 className="text-gold-gradient text-4xl font-extrabold tracking-tight">Harmony</h1>
          <div className="mt-3 mx-auto h-px w-10" style={{ background: 'var(--color-primary)' }} />
          <p className="mt-3 text-xs uppercase tracking-[0.25em]" style={{ color: 'var(--color-on-surface-variant)' }}>Dashboard</p>
        </div>

        <div className="p-6" style={{ background: 'var(--color-surface-container-low)', border: '1px solid var(--color-outline-variant)', borderTop: '2px solid var(--color-primary)' }}>
          <h2 className="mb-6 text-base font-semibold" style={{ color: 'var(--color-on-surface)' }}>
            Sign in
          </h2>

          <form action={login} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-xs font-medium uppercase tracking-wide"
                style={{ color: 'var(--color-on-surface-variant)' }}
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoFocus
                autoComplete="current-password"
                className="px-3 py-2 text-sm rounded outline-none"
                style={{
                  background: 'var(--color-surface-container)',
                  border: '1px solid var(--color-outline-variant)',
                  color: 'var(--color-on-surface)',
                }}
                placeholder="Enter password"
              />
            </div>

            {error && (
              <p className="text-sm" style={{ color: 'var(--color-error)' }}>Incorrect password.</p>
            )}

            <button
              type="submit"
              className="mt-1 px-4 py-2 text-sm font-semibold rounded transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-primary)', color: 'var(--color-on-primary)' }}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
