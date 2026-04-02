/**
 * start-hostinger-next.mjs
 *
 * Entry point for Hostinger Node.js hosting (git integration).
 * Set this as the "Application startup file" in hPanel.
 */

import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'

const root = process.cwd()
const serverJs = join(root, '.next', 'standalone', 'server.js')

if (!existsSync(serverJs)) {
  console.error('Error: .next/standalone/server.js not found. Run "npm run build" first.')
  process.exit(1)
}

const port = process.env.PORT ?? '3000'
console.log(`Starting Harmony on port ${port}...`)

const result = spawnSync(process.execPath, [serverJs], {
  stdio: 'inherit',
  env: { ...process.env, PORT: port, HOSTNAME: '0.0.0.0' },
})

process.exit(result.status ?? 0)
