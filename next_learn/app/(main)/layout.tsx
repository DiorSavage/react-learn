'use client'

import React from 'react'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import { Providers } from '../_components/Provider'

export default function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<Providers>
			<Header />
			<main className='min-h-[92vh]'>
				{ children }
			</main>
			<Footer />
		</Providers>
	)
}