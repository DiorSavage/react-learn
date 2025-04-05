"use client"

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ReduxProvider from './_components/ReduxProvider';
import TanstackProvider from './_components/TanstackProvider';
import Link from 'next/link'
import { queryClient } from '@/shared/api/QueryClient'

const MainLayout = ({ children }: { children: React.ReactNode }) => {

	const isActive = localStorage.getItem("querylearnfstkey")

	return (
		<TanstackProvider>
			<ReduxProvider>
				<header className='transition-all duration-300 -translate-y-16 hover:-translate-y-0 py-6 rounded-b-full items-center flex justify-center gap-x-6 bg-[#e9e7e7]'>
					<Link className='transition-all duration-300 hover:bg-blue-500 hover:text-white font-bold text-xl px-5 py-2 rounded-lg' href={'/orders'}>Orders</Link>
					{!isActive ? <Link className='transition-all duration-300 hover:bg-blue-500 hover:text-white font-bold text-xl px-5 py-2 rounded-lg' href={'/login'}>Login</Link> : <Link className='transition-all duration-300 hover:bg-blue-500 hover:text-white font-bold text-xl px-5 py-2 rounded-lg' href={'/profile'}>Profile</Link>}
					{/* <Link className='transition-all duration-300 hover:bg-blue-500 hover:text-white font-bold text-xl px-5 py-2 rounded-lg' href={'/login'}>Login</Link>
					<Link className='transition-all duration-300 hover:bg-blue-500 hover:text-white font-bold text-xl px-5 py-2 rounded-lg' href={'/profile'}>Profile</Link> */}
				</header>
				<main>
					{children}
				</main>
				<ReactQueryDevtools initialIsOpen={false} />
			</ReduxProvider>
		</TanstackProvider>
	);
}

//? TanstackQuery работает с любой асинхронной логикой, не только с запросами

export default MainLayout