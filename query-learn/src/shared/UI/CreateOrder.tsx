"use client"

import { CreateOrderType } from '@/types/orders.type'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { createNewOrder } from '../api/api'

const CreateOrder = () => {

	const [promocode, setPromocode] = useState<string>("");
  const [userId, setUserId] = useState<number>(0);
	const [productsId, setProductsId] = useState<number[]>([])
  const [selectedProducts, setSelectedProducts] = useState<string>("");
	const queryClient = useQueryClient() //? - тут весь кэш нашего приложения
	const createOrderMutation = useMutation({
		mutationKey: ["orderMutation"], //? нужен, если нужно узнать статус мутации из другого компонента
		mutationFn: createNewOrder,
		onSuccess: () => {
			console.log('nigger')
			queryClient.invalidateQueries({ queryKey: ["orders"] }) //? - помечает все запросы по ключу в stale и перезапрашивает, без параметров рефетчит все, при указывании ключей можем указать частично ( аля смотрит начинается на <переданный ключ>)
		}
	})

	//? onSuccess: (data, variables) => {
	//? 	refetch() - refetch из запроса, в котором нужно делать обновления, но есть варик получше
	//? }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: CreateOrderType = {
      promocode: promocode || null,
      user_id: userId,
      order_price: 100000,
      products_id: selectedProducts.split(",").map(id => Number(id)),
    };
		const response = createOrderMutation.mutate({ newOrder: formData }) //? не асинхронная, не выбрасывает ошибку при неудаче, заебись
		// createOrderMutation.mutateAsync() //? асинхронная, не особо заебись, ибо придется оборачивать в try catch, чтобы отлавливать ошибки
  };

	return (
		<form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 bg-white shadow-lg rounded-lg overflow-hidden">

      <div className="bg-gray-100 px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800">Создание нового заказа</h2>
      </div>

      <div className="px-6 py-4 space-y-4">

        <div>
          <label htmlFor="promocode" className="block text-sm font-medium text-gray-700">
            Промокод (опционально)
          </label>
          <input
            type="text"
            id="promocode"
            value={promocode}
            onChange={(e) => setPromocode(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Введите промокод"
          />
        </div>
        <div>
          <label htmlFor="user_id" className="block text-sm font-medium text-gray-700">
            ID пользователя
          </label>
          <input
            type="number"
            id="user_id"
            value={userId}
            onChange={(e) => setUserId(Number(e.target.value))}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Введите ID пользователя"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Напишите продукты</label>
          <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectedProducts(e.target.value)} type="text" className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' value={selectedProducts} placeholder='Введите id товаров через запятую ез пробелов' />
        </div>

        <div>
          <p className="text-gray-700">
            Общая стоимость: <span className="font-bold text-green-600">{5000} ₽</span>
          </p>
        </div>
      </div>

      <div className="px-6 py-4 bg-gray-50 text-right">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Создать заказ
        </button>
      </div>
    </form>
	);
}

export default CreateOrder