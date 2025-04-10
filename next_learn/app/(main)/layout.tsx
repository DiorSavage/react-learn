'use client'

import React from 'react'
import Header from '../_components/Header'
import Footer from '../_components/Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<main className='min-h-[92vh]'>
				{ children }
			</main>
			<Footer />
		</>
	)
}