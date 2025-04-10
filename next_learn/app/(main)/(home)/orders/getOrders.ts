import { IOrder } from './page'

export const getOrders = async (): Promise<{ data: IOrder[]; isLoading: boolean }> => {
	let loading = true
	const response = await fetch("http://localhost:8000/orders/", {
		headers: {
			"Content-Type": "application/json"
		}
	})
	const data = await response.json()
	loading = false
	return {
		isLoading: loading,
		data: data
	}
}

export const getOrderById = async (id: string): Promise<IOrder> => {
	const response = await fetch(`http://localhost:8000/orders/${id}`, {
		headers: {
			"Content-Type": "application/json"
		}
	})
	const data = await response.json()
	console.log(data)
	return data
}