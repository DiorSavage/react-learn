"use client"

import { deleteOrder, getAllOrders } from '@/shared/api/api'
import { queryClient } from '@/shared/api/QueryClient'
import CreateOrder from '@/shared/UI/CreateOrder'
import OrderDetails from '@/shared/UI/OrderDetails'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const OrdersPage = () => {

	const [isNewOrder, setIsNewOrder] = useState<boolean>(false)
	const { data: OrdersData, isFetching, isLoading, isError, status } = useQuery({
		queryKey: ["orders"],
		queryFn: () => getAllOrders(),
	})

	const deleteOrderMutation = useMutation({
    mutationFn: deleteOrder,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders"]
      })
    }
  })
	console.log(OrdersData)

	return (
		<>
			<section className='w-full flex flex-col gap-y-9 my-12'>
				<h1 className='mx-auto font-bold text-2xl'>Orders</h1>
				<div className='grid xl:grid-cols-4 lg:grid-cols-3 overflow-hidden gap-5 py-5'>
					{isLoading ? <div>Loading...</div> : status == "success" && !isError ?OrdersData.map((order) => {
						return (
							<OrderDetails deleteOrderMutation={deleteOrderMutation} order={order} key={order.id} />
						)
					}) : <div>Error</div>}
				</div>
				{isNewOrder && <CreateOrder setIsOpenCreateOrder={setIsNewOrder} />}
				<button onClick={() => setIsNewOrder(!isNewOrder)} className='w-1/6 h-12 text-center bg-green-500 text-white mx-auto font-semibold text-lg rounded-md transition-all duration-300 hover:text-green-500 hover:bg-white shadow-md cursor-pointer'>{isNewOrder ? "Cancel" : "Create New Order"}</button>
			</section>
		</>
	);
}

export default OrdersPage
