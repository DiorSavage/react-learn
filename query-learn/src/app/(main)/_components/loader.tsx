import { Suspense } from 'react'

export function loader({ children }: { children: React.ReactNode }) {
	return <Suspense fallback={<div>...Loading</div>}>
		{children}
	</Suspense>
}