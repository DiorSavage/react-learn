"use server"

import type { UserAllType } from '@/types/users.type'
import type { ProductAllType } from '@/types/products.type'

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

export const getAllUsers = async ({ abortSignal }: { abortSignal: AbortSignal }): Promise<UserAllType[]> => { //? abortSignal - отменяет запрос
	const response = await fetch(`${process.env.BASE_URL_API}auth-jwt-users/`, {
		signal: abortSignal,
		headers: {
			"Content-Type": "application/json"
		}
	})
	return response.json()
}

export const getAllProducts = async ({ start = 0, end = 0, signal }: { signal: AbortSignal, start: number, end: number }): Promise<ProductAllType[]> => {
	const response = await fetch(`${process.env.BASE_URL_API}products/?start=${start}&end=${end}`, {
		// signal: signal,
		headers: {
			"Content-Type": "application/json"
		}
	})
	return response.json()
}

export const getAllOrders = async ({ signal }: { signal: AbortSignal }) => {
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