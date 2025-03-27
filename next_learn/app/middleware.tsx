//! МОЙ ВАРИАНТ

import { cookies } from 'next/headers'
import {	NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
	const isAcc = request.url.includes('account', 0) ? '/account' : request.url
	const isLogin = 1 == 1
	// cookies().get('token') //? у Next можем получать куки
	console.log(isLogin)
	if (isAcc) {
		if (isLogin) return NextResponse.next() // зареган, идет дальше
			else return NextResponse.redirect(new URL("/", request.url))
	} else {
		return NextResponse.redirect(new URL("/burgers", request.url))
	}
}

export const config = {
	matcher: [
		'/',
		'/profile',
		'/account',
		'/account',
		'/account/forgot-password',
		'/account/reset-password',
	]
}

//! ВАРИАНТ ЧЕРЕЗ NEXTAUTH
// export { default } from "next-auth/middleware"

// export const config = { matcher: ["/profile", "/protected/:path*"] } //? matcher - набор роутов на проверку



//! ОБЯЗАТЕЛЬНО ЧЕКНУТЬ ЭТО