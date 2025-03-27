"use client"

import { useQuery } from '@tanstack/react-query'
import { getAllOrders, getAllProducts, getAllUsers } from '@shared/api/api'
import { useState } from 'react'

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

	const [pageNumber, setPageNumber] = useState<{ start: number; end: number }>({
		start: 0,
		end: 2
	})

	const { data: ProductsData, isSuccess: ProductsIsSuccess } = useQuery({ queryKey: ['products', pageNumber], queryFn: () => getAllProducts({ start: pageNumber.start, end: pageNumber.end }) })
	console.log(ProductsData)
	const { data, isError, isPending, isSuccess } = useQuery({ queryKey: ['tasks', 'list'], queryFn: getAllUsers }) //? queryKey - помогает отличать запросы друг от друга, 
	if (isPending) {
		return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>
	}
	if (isSuccess && ProductsIsSuccess) {
		return (
			<>
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
					{ProductsData.map(product => (
						<div key={product.id} className='flex flex-col gap-y-3 p-4 bg-white rounded-lg shadow-sm'>
							<span className='font-semibold text-lg'>Product Name: <span className='font-normal'>{product.name}</span></span>
							<span className='font-semibold text-lg'>Price: <span className='font-normal'>${product.price}</span></span>
							<span className='font-semibold text-lg'>Description: <span className='font-normal'>{product.description}</span></span>
						</div>
					))}
				</div>
				<div className='flex justify-between mt-4 w-1/2 mx-auto'>
					<button disabled={pageNumber.start == 0} onClick={() => {
						setPageNumber({
							start: pageNumber.start - 2,
							end: pageNumber.end - 2
						})
					}} className='px-4 py-2 cursor-pointer disabled:cursor-default disabled:bg-[#00000054] bg-blue-500 text-white rounded hover:bg-blue-600'>
						Prev Page
					</button>
					<button onClick={() => {
						console.log(pageNumber)
						setPageNumber({
							start: pageNumber.start + 2,
							end: pageNumber.end + 2
						})
					}} className='px-4 py-2 cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600'>
						Next Page
					</button>
				</div>
			</>

		);
	}
	return <div className="text-center text-red-500">Ошибка загрузки данных</div>
}

export default HomePage