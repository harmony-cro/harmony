import createIntlMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { routing } from './i18n/routing'

const intlMiddleware = createIntlMiddleware(routing)
const COOKIE = 'harmony-dash-auth'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Dashboard routes — auth check, skip next-intl entirely
  if (pathname.startsWith('/dashboard')) {
    if (!pathname.startsWith('/dashboard/login')) {
      if (request.cookies.get(COOKIE)?.value !== 'authenticated') {
        const url = request.nextUrl.clone()
        url.pathname = '/dashboard/login'
        return NextResponse.redirect(url)
      }
    }
    return NextResponse.next()
  }

  // All other routes — next-intl locale routing
  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
