import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
	const cookie = request.cookies.get("fstfastapitoken")
	const response = await fetch(`${process.env.BASE_URL_API}auth-jwt-users/profile`, {
		headers: {
			// "Cookie": `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwiZW1haWwiOiJuaWdnZXIxMjNAZ21haWwuY29tIiwiZXhwIjoxNzQzODU2NzQwLjA2OTIwOSwiaWF0IjoxNzQzODU1ODQwLjA2OTIyMX0.ZQGJiOHj3Avp6SMWEN9h4oI4vnlCdi8iWAC9jutEXWWUInlAv5RPvd9LdEHdtPlfOSfm4spsKyT5sCfVxNryo0ymTLE3CqUDeNipVM3pwkaiH2LPhabgGxwU7uxBKNhEDiA9h3W45i_FRUARPAvYVMhJjOXlltUS4DHMPe5xXrsINy5Cd5ELVgkPoC7NCWMi-_kifKlVjXgCdc-K3UFcWVoQfHxvKYLXesWB3yX8rQOQBa-1B6CIqc4Qm2q0zU8hi7I6Ja41bVdYlJjeASFN2iX5-Tvxc0ghDdUD5nfg4ll3jF9ZU1TLjKbNOTyqFX73FzEr_Zop5aneBr_88oZiEg`,
			"accept": "application/json"
		}
	})
	const data = await response.json()
	console.log(data)
	return NextResponse.next()
}

export const config = {
	matcher: '/profile'
}