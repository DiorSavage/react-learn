"use client"

import { useQuery, keepPreviousData, useInfiniteQuery } from '@tanstack/react-query'
import { getAllOrders, getAllProducts, getAllProductsQueryOptions, getAllUsers } from '@shared/api/api'
import { useCallback, useRef, useState } from 'react'
import { jsonApiInstance } from '@/shared/api/api-instance'

type Todo = {
	id: number;
	text: string;
	done: boolean
}

export const getTasks = () => {
	return new Promise<Todo[]>(resolve => {
		setTimeout(() => {
			resolve([
				{
					id: 1, 
					text: "nigger",
					done: true
				},
				{
					id: 2, 
					text: "qwerty",
					done: false
				},
				{
					id: 3, 
					text: "layout",
					done: false
				},
			])
		}, 3000);
	})
}

const HomePage = () => {

	//! РАЗНИЦА МЕЖДУ isFetching, isLoading, isPending
	//! isLoading, isPending - зависят от кеша, если допустим поставить placeholderData, то isLoading, isPending даже при повторном запросе они всегда будут false
	//? isPending, isLoading - наличие данных в кеше, будут false даже при повторном запросе, если данные в кеше есть

	//? isFetching - при любом повторном запросе будет true, пока запрос идет

	const [pageNumber, setPageNumber] = useState<{ start: number; end: number }>({
		start: 0,
		end: 2
	})

	const [enabled, setEnable] = useState<boolean>(true)

	// const { data: ProductsData, isSuccess: ProductsIsSuccess } = useQuery({ queryKey: ['products', pageNumber], queryFn: () => getAllProducts({ start: pageNumber.start, end: pageNumber.end }), placeholderData: [] })]

	//? queryOptions - аля закидываем все в одно, из одного импортируем все в useQuery с помощью спред оператора. Также есть infiniteQueryOptions для useInfiniteQuery
	// const getAllProductsQueryOptions = ( pageNumber: { start: number, end: number } ) => {
	// 	return queryOptions({
	// 		queryKey: ['products', pageNumber], 
	// 		queryFn:  () => getAllProducts({ pageParam: pageNumber.end }),
	// 		placeholderData: keepPreviousData, 
	// 	})

	// const { data: ProductsData, isSuccess: ProductsIsSuccess, isFetching, isLoading, isPending, status, fetchStatus } = useQuery({ 
	// 	...getAllProductsQueryOptions({ ...pageNumber }),
	// 	enabled: enabled 
	// })
	
	// const { data: ProductsData, isSuccess: ProductsIsSuccess, isFetching, isLoading, isPending, status, fetchStatus } = useQuery({ 
	// 	queryKey: ['products', pageNumber], 
	// 	queryFn:  () => getAllProducts({ pageParam: pageNumber.end }), placeholderData: keepPreviousData, 
	// 	enabled: enabled 
	// })

	const { data: ProductsData, isSuccess: ProductsIsSuccess, isFetching, isLoading, isPending, status, fetchStatus } = useQuery({ 
		queryKey: ['products', pageNumber], 
		queryFn:  (meta) => jsonApiInstance(`products/?end=${pageNumber.end}`)(),
		placeholderData: keepPreviousData, 
		enabled: enabled 
	})
	
	//? placeholderData - данные дефолтные, пока идет запрос, для медленного инета помогает. В placeholderData можно еще прокидывать функции
	//? Также в placeholderData можно прокинуть keepPreviousData, который показывает предыдущие данные, пока идет запрос
	//? isPlaceholderData - для placeholderData имба, вместо того же isFetching
	//? initialData - примеры: приходит из localStorage, preFetch в SSR - пойдет в кеш ( наполнение кеша из другого источника, для SSR имба вещь )
	//? enabled - декларативно выключает/включает запрос
	//? select - изменяет данные перед возвращанием, аля transformResponse в RTKQuery
	// const { data: ProductsData, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
	// 	queryKey: ["products", "nextCursor"], queryFn: ({ pageParam = 2 }) => getAllProducts({ pageParam }), enabled: enabled, initialPageParam: 2, getNextPageParam: (lastPage, pages) => {
	// 		return lastPage.nextCursor
	// 	}, select: result => result.pages.flat()
	// })
	console.log(ProductsData)
	const { data, isError, isPending: UserPending, isSuccess } = useQuery({ queryKey: ['tasks', 'list'], queryFn: getAllUsers }) //? queryKey - помогает отличать запросы друг от друга, 
	if (isPending) {
		return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>
	}
	if (isSuccess) {
		return (
			<>
			{/* useInfiniteQuery */}
				{/* <div className='flex flex-col gap-y-5 px-10 py-5 bg-gray-100 rounded-lg shadow-md'>
					{ProductsData ? ProductsData.map(product => (
						<div key={product.id} className={`flex flex-col gap-y-3 p-4 bg-white rounded-lg shadow-sm`}>
							<span className='font-semibold text-lg'>Product Name: <span className='font-normal'>{product.name}</span></span>
							<span className='font-semibold text-lg'>Price: <span className='font-normal'>${product.price}</span></span>
							<span className='font-semibold text-lg'>Description: <span className='font-normal'>{product.description}</span></span>
						</div>
					)) : <div>Loading...</div>}
					<button disabled={!enabled} onClick={() => 
						fetchNextPage()
					} className='px-4 py-2 cursor-pointer disabled:cursor-default disabled:bg-[#00000054] bg-blue-500 text-white rounded hover:bg-blue-600'>
						Next Page
					</button>
				</div> */}
				{/* useQuery */}
				<div className='flex flex-col gap-y-5 px-10 py-5 bg-gray-100 rounded-lg shadow-md'>
					{data.map(user => {
						return (
							<div key={user.email} className='flex flex-col gap-y-3 p-4 bg-white rounded-lg shadow-sm'>
								<span className='font-semibold text-lg'>Email: <span className='font-normal'>{user.email}</span></span>
								<span className='font-semibold text-lg'>Username: <span className='font-normal'>{user.username}</span></span>
								<span className='font-semibold text-lg'>Age: <span className='font-normal'>{user.age}</span></span>
							</div>
						)
					})}
				</div>
				<h1 className='text-2xl font-bold text-center my-5'>Products</h1>
				<div className='flex flex-col gap-y-5 px-10 py-5 bg-gray-100 rounded-lg shadow-md'>
					{!isLoading && ProductsData ? ProductsData.slice(0, pageNumber.end - 2).map(product => (
						<div key={product.id} className={`flex flex-col gap-y-3 p-4 bg-white rounded-lg shadow-sm ${isFetching ? "opacity-40" : "opacity-100"}`}>
							<span className='font-semibold text-lg'>Product Name: <span className='font-normal'>{product.name}</span></span>
							<span className='font-semibold text-lg'>Price: <span className='font-normal'>${product.price}</span></span>
							<span className='font-semibold text-lg'>Description: <span className='font-normal'>{product.description}</span></span>
						</div>
					)) : <div>Loading...</div>}
					{!isFetching && status == 'success' ? ProductsData.slice(pageNumber.end - 2).map(product => (
						<div key={product.id} className={`flex flex-col gap-y-3 p-4 bg-white rounded-lg shadow-sm ${isFetching ? "opacity-40" : "opacity-100"}`}>
							<span className='font-semibold text-lg'>Product Name: <span className='font-normal'>{product.name}</span></span>
							<span className='font-semibold text-lg'>Price: <span className='font-normal'>${product.price}</span></span>
							<span className='font-semibold text-lg'>Description: <span className='font-normal'>{product.description}</span></span>
						</div>
					)) : <div>Fetching...</div>}
				</div>
				<div className='flex justify-between mt-4 w-1/2 mx-auto'>
					<button disabled={pageNumber.start == 0 || !enabled} onClick={() => {
						setPageNumber({
							start: pageNumber.start - 2,
							end: pageNumber.end - 2
						})
					}} className='px-4 py-2 cursor-pointer disabled:cursor-default disabled:bg-[#00000054] bg-blue-500 text-white rounded hover:bg-blue-600'>
						Prev Page
					</button>
					<button disabled={!enabled} onClick={() => {
						setPageNumber({
							start: pageNumber.start + 2,
							end: pageNumber.end + 2
						})
					}} className='px-4 py-2 cursor-pointer disabled:cursor-default disabled:bg-[#00000054] bg-blue-500 text-white rounded hover:bg-blue-600'>
						Next Page
					</button>
					<button onClick={() => setEnable(!enabled)} className={`transition-all duration-300 px-5 py-3 text-white hover:text-[${enabled ? "#ff0505" : "#29ff21"}] bg-[${enabled ? "#ff0505" : "#29ff21"}] hover:bg-white shadow-md rounded-md cursor-pointer`}>{enabled ? "Disable Query" : "Enable Query"}</button>
				</div>
			</>

		);
	}
	return <div className="text-center text-red-500">Ошибка загрузки данных</div>
}

export default HomePage

//! че за гавно, разобраться
// export function useIntersection(onIntersect: () => void) {

// 	const unsubscribe = useRef(() => {})

// 	return useCallback((el: HTMLDivElement | null) => {
// 		const observer = new IntersectionObserver((entries) => {
// 			entries.forEach(intersection => {
// 				if (intersection.isIntersecting) {
// 					onIntersect()
// 				}
// 			})
// 		})
// 		if (el) {
// 			observer.observe(el)
// 			unsubscribe.current = () => observer.disconnect()
// 		} else {
// 			unsubscribe.current()
// 		}
// 	}, [])
// }