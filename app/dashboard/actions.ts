'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const COOKIE = 'harmony-dash-auth'

export async function login(formData: FormData) {
  if (!process.env.DASHBOARD_PASSWORD || formData.get('password') !== process.env.DASHBOARD_PASSWORD) {
    redirect('/dashboard/login?error=1')
  }

  const store = await cookies()
  store.set(COOKIE, 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  })

  redirect('/dashboard')
}

export async function logout() {
  const store = await cookies()
  store.delete(COOKIE)
  redirect('/dashboard/login')
}
