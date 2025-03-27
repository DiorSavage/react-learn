"use client"

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { SiBurgerking } from 'react-icons/si'

export default function Header() {
  const session = useSession()
  console.log(session)
	return (
		<header>
      <div>
        <SiBurgerking />
      </div>
      <nav className='flex gap-3'>
        <Link href="/">Домой</Link>
        <Link href="/about">О Нас</Link>
        <Link href="/reviews">Отзывы</Link>
        <Link href="/burgers/">Бургеры</Link>
        {session && session.status === "unauthenticated" ? <Link href="/auth-next">Авторизация</Link> : session.status === "loading" ? <div>...Loading </div> : session.status === 'authenticated' ? <Link href="/profile">Профиль</Link> : <div>Nigger</div>}
        {session && session.status === 'authenticated' && <button onClick={() => signOut({ callbackUrl: "/auth-next" })}>Log out</button>}
      </nav>
    </header>
	)
}