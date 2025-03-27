import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials';
import type { AuthOptions, User } from 'next-auth';

const users: { email: string; password: string; name: string }[] = [
	{
		email: "nigger123@gmail.com",
		password: "qwerty123",
		name: "nigger123"
	}
]

export const authConfig: AuthOptions = {
	// callbacks: {
	// 	async session({ session, token, user }) {
	// 		console.log(user, token)
	// 		session.user.accesstoken = "asdfasdf"
	// 		return session
	// 	},
	// },
	providers: [
		Credentials({
			credentials: {
				email: { label: "email", type: "email", required: true },
				password: { label: "password", type: "password", required: true },
				username: { label: "username", type: "text", required: true }
			},
			async authorize(credentials) { //? можно и не асинхронный
				if (!credentials?.email || !credentials.password) return null
				const currentUser = users.find(user => user.email === credentials.email) //? здесь вместо users - поиск по бд из бека
				if (currentUser && currentUser.password === credentials.password) {//? ну проверка на пароль в беке
					const { password, ...userData } = currentUser
					return userData as { email: string; name: string }
				} else {
					return null
				}
				// if (credentials) {
				// 	const { username, ...payload } = credentials && credentials 
				// 	const response = await fetch("http://localhost:8000/auth-jwt-users/login", {
				// 		headers: {
				// 			"Content-Type": "application/json"
				// 		},
				// 		body: JSON.stringify(payload),
				// 		credentials: "include",
				// 		method: 'post',
				// 	})
				// 	const currentUser = response.json()
				// 	if (response.ok) {
				// 		return {accesstoken: "nigger", currentUser}
				// 	}
				// } else {
				// 	return null
				// }
			}
		}),
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID!,
			clientSecret: process.env.GITHUB_CLIENT_SECRET!,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],
	pages: {
		signIn: "/auth-next",
	}
}

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }