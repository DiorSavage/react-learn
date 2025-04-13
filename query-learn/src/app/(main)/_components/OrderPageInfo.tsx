"use client"

import { getOrderById } from '@/shared/api/api'
import { queryClient } from '@/shared/api/QueryClient'
import OrderDetails from '@/shared/UI/OrderDetails'
import { IOrder } from '@/types/orders.type'
import { DehydratedState, HydrationBoundary, keepPreviousData, useQuery } from '@tanstack/react-query'

const OrderPageInfo = ({ order_id, dehydratedState }: { order_id: number; dehydratedState: DehydratedState }) => {

	const { data: order, isPending, isSuccess } = useQuery({
		queryKey: ["orders", order_id],
		queryFn: () => getOrderById({ order_id }),
		placeholderData: keepPreviousData,
		refetchInterval: 30 * 1000
	})

	return (
		<div className='grid xl:grid-cols-4 lg:grid-cols-3 overflow-hidden gap-5 py-5'>
			<HydrationBoundary state={dehydratedState}>
				{ isSuccess ? <OrderDetails order={order} key={order.id} /> : isPending ? <div>Loading</div> : <>error</> }
			</HydrationBoundary>
		</div>
	);
}

export default OrderPageInfo