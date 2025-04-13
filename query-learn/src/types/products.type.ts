export type ProductAllType = {
	name: string,
	description: string,
	price: number,
	id: number
}

export type IProductInOrder = {
	count: number;
	price: number;
	description: string;
	name: string;
	category: string | null;
	id: number;
};

export type IOrderInProduct = {
  promocode: string;
  created_at: Date;
  order_price: number;
  user_id: number;
  id: number;
}

export type IProduct = {
	name: string;
	category: string | null;
	id: number;
	price: number;
	count: number;
	description: string;
	orders: IOrderInProduct[]
}