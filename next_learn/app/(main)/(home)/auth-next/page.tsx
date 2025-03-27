"use client"

// import { signIn } from '../auth'

// import { auth, signIn, signOut } from '@/api_auth/auth'
import { useSession, signIn, signOut } from 'next-auth/react';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
// import { signOutFunc, signInFunc } from '@/app/(main)/auth';


const NextAuthPage = () => {

	const searchParams = useSearchParams()
	const [userData, setUserData] = useState<{ email: string; password: string; username: string  }>({email: "", password: '', username: ''})
	const router = useRouter()
	const callbackUrl = searchParams.get("callbackUrl") || "/profile"

	const signInForm = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		// const formData = new FormData(e.currentTarget)
		// const response = await signIn("credentials", {
		// 	email: formData.get('email'),
		// 	password: formData.get("password"),
		// 	redirect: false, //? отказь от редиректа при ошибке
		// })
		const response = await signIn("credentials", {
			email: userData.email,
			password: userData.password,
			username: userData.username,
			redirect: false,
		})
		if (response && !response.error) {
			router.push("/profile")
		} else {
			console.log(response)
			//! React toastify для обработки ошибок
		}
	}

	return (
		<div>
			<form className='flex flex-col gap-y-5 [&>*]:w-1/4' onSubmit={signInForm}>
				<input className='bg-white border-2 rounded-md border-[#00000034] placeholder:text-sm placeholder:text-gray-400 px-3 py-2' type='email' placeholder='Enter your email' onChange={(e) => {
					setUserData({
						...userData,
						"email": e.target.value
					})
				}} />
				<input className='bg-white border-2 rounded-md border-[#00000034] placeholder:text-sm placeholder:text-gray-400 px-3 py-2' type='password' placeholder='Enter your password' onChange={(e) => {
					setUserData({
						...userData,
						"password": e.target.value
					})
				}}/>
				<input className='bg-white border-2 rounded-md border-[#00000034] placeholder:text-sm placeholder:text-gray-400 px-3 py-2' type='text' placeholder='Enter your username' onChange={(e) => {
					setUserData({
						...userData,
						"username": e.target.value
					})
				}}/>
				<button type="submit" className='border-2 rounded-lg py-3 text-center transition-all duration-300 hover:bg-black hover:text-white' >Login</button>
				<p className='text-center'>Or</p>
			</form>
			<button onClick={() => signIn("google", { callbackUrl: callbackUrl })} className='w-1/4 border-2 rounded-lg py-3 text-center transition-all duration-300 hover:bg-black hover:text-white'>Auth with Google</button>
		</div>
	);
}

export default NextAuthPage