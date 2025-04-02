import { IOrder } from '@/types/orders.type'
import type { UseMutationResult } from '@tanstack/react-query'

const OrderDetails = ({ order, deleteOrderMutation }: { order: IOrder, deleteOrderMutation: UseMutationResult<string, Error, {
  order_id: number;
}, unknown> }) => {

	const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  const handleDelete = () => {
    const elem = document.getElementById(`order_${order.id}`) as HTMLDivElement
    elem.classList.add("opacity-0")
    setTimeout(() => {
      elem.classList.add("hidden")
      deleteOrderMutation.mutate({ order_id: order.id })
    }, 300);
  }
  // deleteOrderMutation.variables //? хранит состояния текущей мутации
  
	return (
    <div id={`order_${order.id}`} className={"transition-all duration-300 flex flex-col items-center max-w-2xl mx-auto mt-8 bg-white shadow-lg rounded-lg"}>
      <div className="bg-gray-100 px-6 py-4 w-full">
        <h2 className="text-xl font-bold text-gray-800">Заказ №{order.id}</h2>
      </div>
      <div className="px-6 py-4 space-y-2">
        <p className="text-gray-700">
          Цена: <span className="font-bold text-green-600">{order.order_price} ₽</span>
        </p>
        <p className="text-gray-700">
          Промокод:{" "}
          {order.promocode ? (
            <span className="font-bold text-blue-600">{order.promocode}</span>
          ) : (
            <span className="italic text-gray-500">не использован</span>
          )}
        </p>
        <p className="text-gray-700">
          Дата создания: <span className="font-medium">{formatDate(order.created_at)}</span>
        </p>
      </div>

      {/* Product List */}
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Товары в заказе:</h3>
        <ul className="space-y-4">
          {order.products.map((product) => (
            <li key={product.id} className="flex flex-col bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <h4 className="text-base font-medium text-gray-900">{product.name}</h4>
                <span className="text-sm text-gray-600">{product.count} шт.</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{product.description}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-700">
                  Категория:{" "}
                  {product.category ? (
                    <span className="italic">{product.category}</span>
                  ) : (
                    <span className="italic text-gray-400">нет данных</span>
                  )}
                </span>
                <span className="text-base font-bold text-green-600">
                  {product.price} ₽
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleDelete} className='w-1/3 h-12 mt-auto mb-3 cursor-pointer rounded-md bg-red-500 transition-all duration-300 hover:bg-white text-white hover:text-red-500'>Delete</button>
    </div>
  );
}

export default OrderDetails