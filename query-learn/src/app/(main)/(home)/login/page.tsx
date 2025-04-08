"use client"

import { actions as userActions } from '@/store/slices/user.slice'
import { queryClient } from '@/shared/api/QueryClient'
import { useAppDispatch } from '@/shared/hooks/hooks'
import { useMutation } from '@tanstack/react-query'
import { UserLoginType } from '@/types/users.type'
import { loginUser } from '@/shared/api/api'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const LoginPage = () => {

	const [userData, setUserData] = useState<{ email: string; password: string }>({ email: "", password: "" })
	const dispatch = useAppDispatch()
	const router = useRouter()
	const { data, isPending, mutate: loginMutation } = useMutation({
		mutationFn: loginUser,
		onError: (err, _, context) => {
			queryClient.cancelQueries({ queryKey: ["userData"] })
			console.log(`Error: ${err}`)
		},
		onSettled: (data) => {
			queryClient.invalidateQueries({ queryKey: ["userData"] })
			return data
		},
		onSuccess: ( data ) => {
			// router.push("/profile")
			dispatch(userActions.setUser(data))
			localStorage.setItem("fstfastapitoken", `${data.tokens.token_type} ${data.tokens.access_token}`)
			return data
		},
	})

	const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		loginMutation(userData)
	}

	return (
		<section className='w-full flex items-center h-[100vh] justify-center'>
			{isPending ? <div>...Loading</div> : <div>{data?.user.email}</div>}
			<form onSubmit={handleLogin} className='w-1/5 h-2/3 flex flex-col gap-y-5 items-center'>
				<div className='flex flex-col gap-y-1 w-full'>
					<label htmlFor="email" className="block text-sm font-medium text-gray-700">
						Email
					</label>
					<input
						type="email"
						id="email"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({
							...userData,
							email: e.target.value
						})}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						placeholder="Введите email"
					/>
				</div>
				<div className='flex flex-col gap-y-1 w-full'>
					<label htmlFor="password" className="block text-sm font-medium text-gray-700">
						Пароль
					</label>
					<input
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({
							...userData,
							password: e.target.value
						})}
						type="password"
						id="password"
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						placeholder="Введите пароль"
					/>
				</div>
				<button type='submit' className='w-1/2 bg-green-500 transition-all duration-300 hover:text-green-500 hover:bg-white cursor-pointer text-white rounded-md mt-3 h-12 text-lg font-semibold'>Login</button>
			</form>
		</section>
	);
}

export default LoginPage