import { IProductInOrder } from './products.type'

export type IOrder = {
	user_id: number;
	order_price: number;
	id: number;
	promocode: string | null;
	created_at: string;
	products: IProductInOrder[]
}

export type CreateOrderType = {
	promocode: string | null;
	user_id: number;
	order_price: number;
	products_id: number[]
}