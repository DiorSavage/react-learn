import { getAllProducts } from '@/shared/api/api'
import { ProductAllType } from '@/types/products.type'
import { dehydrate, DehydratedState, keepPreviousData, QueryClient, useQuery } from '@tanstack/react-query'
import { useState } from 'react'


//? У такого вариант есть минусы ( например при вложенности нужно будет в каждом писать initialData, что создает много лишнего кода )
// export async function getServerSideProps() {
// 	const products = await getAllProducts({ pageParam: 3 })
// 	return { props: { prefetchedProducts: products } }
// }

// export default function ProductPage({ prefetchedProducts }: { prefetchedProducts: ProductAllType[] }) {
	// const [pageParam, setPageParam] = useState<number>(3)
	// const { data, isPending, isSuccess } = useQuery({
	// 	queryKey: ["products", pageParam],
	// 	queryFn: () => getAllProducts({ pageParam: pageParam }),
	// 	placeholderData: keepPreviousData,
	// 	initialData: pageParam === 3 ? prefetchedProducts : undefined
	// })
	// ... }

export async function getServerSideProps() {
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery({
		queryKey: ["products", 3],
		queryFn: () => getAllProducts({ pageParam: 3 })
	})

	return { props: { dehydratedState: dehydrate(queryClient) } }
}

export default function ProductPage({ dehydratedState }: { dehydratedState: DehydratedState }) {
	const [pageParam, setPageParam] = useState<number>(3)
	console.log(dehydratedState.queries)
	const { data, isPending, isSuccess } = useQuery({
		queryKey: ["products", pageParam],
		queryFn: () => getAllProducts({ pageParam: pageParam }),
		placeholderData: keepPreviousData,
		refetchInterval: 17 * 1000
	})

	return (
		<div className='flex flex-col items-center gap-y-12'>
			<div className='w-full grid grid-cols-3 gap-5'>
				{ isPending ? <>Loading</> : isSuccess ? data.products.map(product => {
					return (
						<div className="bg-white rounded-lg w-1/2 mx-auto shadow-md overflow-hidden transition-transform duration-300 my-12 hover:scale-105">
						<div className="p-6">
							<h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
							<p className="mt-2 text-gray-600">{product.description}</p>
							<p className="mt-4 text-lg font-semibold text-indigo-600">
								Price: ${product.price.toLocaleString()}
							</p>
						</div>
					</div>
					)
				}) : <>Error</> }
			</div>
			<button onClick={() => setPageParam(pageParam+3)} className='w-56 h-12 text-center bg-green-500 text-white cursor-pointer transition-all duration-300 hover:bg-white hover:text-green-500 shadow-md rounded-lg'>Next</button>
		</div>
	);
}