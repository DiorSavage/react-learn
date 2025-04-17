"use client"

import Link from 'next/link'
import { useAppSelector } from '../hooks/hooks'

const Header = () => {

	// const isActive = localStorage.getItem("fstfastapitoken")
	const userData = useAppSelector(state => state.userSlice)

	return (
		<header className='transition-all duration-300 -translate-y-16 hover:-translate-y-0 py-6 rounded-b-full items-center flex justify-center gap-x-6 bg-[#e9e7e7]'>
			<Link className='transition-all duration-300 hover:bg-blue-500 hover:text-white font-bold text-xl px-5 py-2 rounded-lg' href={'/orders'}>Orders</Link>
			{!userData.user.email ? <Link className='transition-all duration-300 hover:bg-blue-500 hover:text-white font-bold text-xl px-5 py-2 rounded-lg' href={'/login'}>Login</Link> : <Link className='transition-all duration-300 hover:bg-blue-500 hover:text-white font-bold text-xl px-5 py-2 rounded-lg' href={'/profile'}>Profile</Link>}
			{/* <Link className='transition-all duration-300 hover:bg-blue-500 hover:text-white font-bold text-xl px-5 py-2 rounded-lg' href={'/login'}>Login</Link>
			<Link className='transition-all duration-300 hover:bg-blue-500 hover:text-white font-bold text-xl px-5 py-2 rounded-lg' href={'/profile'}>Profile</Link> */}
		</header>
	);
}

export default Header