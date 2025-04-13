import OrderPageInfo from '@/app/(main)/_components/OrderPageInfo'
import { getAllOrders, getOrderById } from '@/shared/api/api'
import { dehydrate, hydrate, QueryClient } from '@tanstack/react-query'

export async function generateStaticParams() {
	const orders = await getAllOrders()
	const params = orders.map(order => ({
		id: order.id.toString()
	}))
	return params
}

export default async function OrderPage({ params }: { params: { id: string } }) {
	const pageParam = await params
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery({
		queryKey: ["orders", Number(pageParam.id)],
		queryFn: () => getOrderById({ order_id: Number(pageParam.id) })
	})

	return (
		<OrderPageInfo order_id={Number(pageParam.id)} dehydratedState={dehydrate(queryClient)} />
	);
}