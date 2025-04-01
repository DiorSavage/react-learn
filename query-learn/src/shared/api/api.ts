"use server"

import { CreateOrderType, IOrder } from '@/types/orders.type'
import type { ProductAllType } from '@/types/products.type'
import type { UserAllType } from '@/types/users.type'
import { ApiError } from 'next/dist/server/api-utils'

// export const usersListApi = {
// 	getAllUsers: async (): Promise<UserAllType[]> => {
// 		const response = await fetch(`${process.env.BASE_URL_API}/auth-jwt-users/`, {
// 			headers: {
// 				"Content-Type": "application/json"
// 			}
// 		})
// 		return response.json()
// 	}
// }

export const getAllOrders = async (): Promise<IOrder[]> => {
	const response = await fetch(`${process.env.BASE_URL_API}orders`,
		{
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const data = await response.json()
	return data
}

export const createNewOrder = async ({ newOrder }: { newOrder: CreateOrderType }) => {
	const response =  await fetch(`${process.env.BASE_URL_API}orders/create`, {
		method: "POST",
		body: JSON.stringify(newOrder),
		headers: {
			"Content-Type": "application/json"
		}
	})

	if (response.status !== 200) {
		console.log(response.status, response.text)
	}
	console.log(response)

	return response
}

// export const updateOrder = async () => {}
// export const deleteOrder = async () => {}

export const getAllUsers = async ({ abortSignal }: { abortSignal: AbortSignal }): Promise<UserAllType[]> => { //? abortSignal - отменяет запрос
	const response = await fetch(`${process.env.BASE_URL_API}auth-jwt-users/`, {
		signal: abortSignal,
		headers: {
			"Content-Type": "application/json"
		}
	})
	return response.json()
}

// export const getAllProductsQueryOptions = ( pageNumber: { start: number, end: number } ) => {
// 	return queryOptions({
// 		queryKey: ['products', pageNumber], 
// 		queryFn:  () => getAllProducts({ pageParam: pageNumber.end }),
// 		placeholderData: keepPreviousData, 
// 	})
// }

export const getAllProducts = async ({ pageParam, signal }: { signal?: AbortSignal, pageParam?: number }): Promise<ProductAllType[]> => {
	const response = await fetch(`${process.env.BASE_URL_API}products/?end=${pageParam}`, {
		// signal: signal,
		headers: {
			"Content-Type": "application/json"
		}
	})
	return response.json()
}

export const getAllOrdersRedis = async ({ signal }: { signal: AbortSignal }) => {
	const response1 = await fetch(`${process.env.BASE_URL_API}redis-learn/orders/`, {
		headers: {
			"Content-Type": "application/json",
			"accept": "application/json"
		}
	})

	return response1.json()
}

//? Чтобы изменить это поведение, вы можете настроить свои запросы как глобально, так и для каждого запроса с помощью параметра staleTime. Указание большего значения staleTime означает, что запросы не будут повторно загружать свои данные так часто



// Устаревшие запросы автоматически повторно запрашиваются в фоновом режиме, когда:
// Новые экземпляры запроса монтируются
// Окно перефокусируется
// Сеть переподключается
// Запрос опционально настраивается с интервалом повторной загрузки
//! Чтобы изменить эту функциональность, вы можете использовать такие параметры refetchOnMount, refetchOnWindowFocus, refetchOnReconnect и refetchInterval