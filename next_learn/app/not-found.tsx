'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function NotFound() {

	const router = useRouter()
	useEffect(() => {
		setTimeout(() => {
			router.push('/')
		}, 2000);
	}, [])

	return (
		<div>
			poshel naxyu
		</div>
	)
}