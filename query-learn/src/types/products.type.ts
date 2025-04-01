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
