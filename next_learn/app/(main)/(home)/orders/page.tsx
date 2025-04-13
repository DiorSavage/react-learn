import OrderDetails from '@/app/_components/OrderDetailts'
import { getOrders } from './getOrders'
import LoadingOrders from './loading'
import { Suspense } from 'react'

export type IProductInOrder = {
	count: number;
	price: number;
	description: string;
	name: string;
	category: string | null;
	id: number;
};

export type IProduct = {
	name: string;
	description: string;
	price: number;
	id: number;
}

export type IOrder = {
	user_id: number;
	order_price: number;
	id: number;
	promocode: string | null;
	created_at: string;
	products: IProductInOrder[]
}

const OrdersPage = async () => {

	const { data } = await getOrders()

	return (
		<>
			<section className='w-full flex flex-col gap-y-9 my-12'>
				<h1 className='mx-auto font-bold text-2xl'>Orders</h1>
				<div className='grid xl:grid-cols-4 lg:grid-cols-3 overflow-hidden gap-5 py-5'>
					{/* {isLoading ? <div>Loading...</div> : data ? data.map((order) => {
						return (
							<OrderDetails order={order} key={order.id} />
						)
					}) : <div>Error</div>} */}
					<Suspense fallback={<LoadingOrders />}>
						{data.map((order) => {
							return (
								<OrderDetails order={order} key={order.id} />
							)
						})}
					</Suspense>
				</div>
			</section>
		</>
	);
}

export default OrdersPage