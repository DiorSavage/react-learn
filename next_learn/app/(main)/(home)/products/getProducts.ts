import { IProduct } from '../orders/page'

export const getProducts = async (): Promise<IProduct[]> => {
	const response = await fetch("http://localhost:8000/products", {
		headers: {
			"content-type": "application/json"
		},
	})
	const data = await response.json()
	return data
}

export const getProductById = async (product_id: string) => {
	const response = await fetch(`http://localhost:8000/products/${product_id}`, {
		headers: {
			"content-type": "application/json"
		}
	})
	const data = await response.json()
	return data
}