import OrderDetails from '@/app/_components/OrderDetailts'
import { getOrderById, getOrders } from '../getOrders'

//? SSG
//? Так как это статика, при добавлении, допустим, новых заказов нужно будет делать билд заново
//? 
export const dynamicParams = false //? если дин маршруты явно не были указаны, вернет 404, то есть
//? если generateStaticParams вернул мне два айди ( 1, 2 ), то при попытке обратиться к 3 будет 404. При true страница сгенериться динамически
export const dynamic = "force-dynamic" //? решает, использовать чисто статику или прибегать к ssr методам
//? dynamic = "force-static" | "force-dynamic" | "auto" | "error"

export async function generateStaticParams() { //? выполняется только при в процессе билда
  const { data } = await getOrders()
	
  return data.map(order => ({
		id: order.id.toString(), //? потому что должно быть строкой\
	}))
}

export default async function OrderPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
	const orderData = await getOrderById(id)

  return (
		<OrderDetails order={orderData} />
	)
}