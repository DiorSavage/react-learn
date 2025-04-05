"use client"

import type { CreateOrderType } from '@/types/orders.type'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'
import { createNewOrder } from '../api/api'

const CreateOrder = ({ setIsOpenCreateOrder }: { setIsOpenCreateOrder: Dispatch<SetStateAction<boolean>> }) => {

  //? mutation optimistic updatex
  // useMutation({
  //   mutationFn: func,
  //   onMutate: async (newData) => { //! вызывается перед мутацией
  //     //? отменяем рефетчи
  //     queryClient.cancelQueries({ queryKey: ["<key_of_data>"] })
  //     const prevData = queryClient.getQueryData(["<key_of_data>"])
  //     queryClient.setQueryData(["<key_of_data>"], {...prevData, newData})
  //     return { prevData } //? возвращаем в context ( в контексте )
  //   },
  //   onError: (err, newData, context) => {
  //     queryClient.setQueryData(["<key_of_data>"], context?.prevData) //! при ошибке все откатываем до прошлого кэша
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries({ queryKey: ["<key_of_data>"] }) //? инваидируем запросы
  //   }
  // })
  //* Общий прикол: перед мутацией меняем кэш на новый, при ошибке все откатываем, а когда все ок просто invalidate данные

	const [promocode, setPromocode] = useState<string>("");
  const [userId, setUserId] = useState<number>(0);
	const [productsId, setProductsId] = useState<number[]>([])
  const [selectedProducts, setSelectedProducts] = useState<string>("");
	const queryClient = useQueryClient() //? - тут весь кэш нашего приложения
	const createOrderMutation = useMutation({
		// mutationKey: ["orderMutation"], //? нужен, если нужно узнать статус мутации из другого компонента
		mutationFn: createNewOrder,
		onSuccess: async () => {
      console.log('zaebis')
      setIsOpenCreateOrder(false)
			await queryClient.invalidateQueries({ queryKey: ["orders"] }) //? - помечает все запросы по ключу в stale и перезапрашивает, без параметров рефетчит все, при указывании ключей можем указать частично ( аля смотрит начинается на <переданный ключ>)
		},
    onError: (error, context) => {
      console.log(error)
    },
    onSettled: (data) => { //? и при ошибке, и при success вызывается
      console.log(data)
    }
	})
  //? optimistic update
  // const createOrderMutation = useMutation({
  //   mutationFn: createNewOrder,
  //   onMutate: async ( newOrder ) => {
  //     queryClient.cancelQueries({ queryKey: ["orders"] })
  //     const prevData = queryClient.getQueryData(["orders"]) as CreateOrderType[]
  //     console.log(newOrder)
  //     queryClient.setQueryData(["orders"], [ ...prevData, { ...newOrder.newOrder, products: newOrder.newOrder..products_details } ]) //? в products у newData чисто массив из айдишников, нужен массив из данных продуктов
      
  //     return { prevData }
  //   },
    // onError: (err, newData, context) => {
    //   console.log(`Error: ${err}\newData: ${newData}`)
    //   queryClient.setQueryData(["orders"], context.prevData)
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries({ queryKey: ["orders"] })
  //   }
  // })

  //! DELETE
  // const deleteOrderMutation = useMutation({
	// 	mutationFn: deleteOrder,
	// 	onSuccess: async (data, deletedId) => {
  //     console.log('zaebis')
  //     setIsOpenCreateOrder(false)
	// 		await queryClient.invalidateQueries({ queryKey: ["orders"] })
	// 	},
  //   onError: (error, context) => {
  //     console.log(error)
  //   },
  //   onSettled: (data) => {
  //     console.log(data)
  //   }
	// })
  //? USE
  // deleteOrderMutation.mutate({
  //   id: <id>
  // })
  //! UPDATE
  // const updateOrderMutation = useMutation({
	// 	mutationFn: updateOrder,
	// 	onSuccess: async () => {
  //     console.log('zaebis')
  //     setIsOpenCreateOrder(false)
	// 		await queryClient.invalidateQueries({ queryKey: ["orders"] })
	// 	},
  //   onError: (error, context) => {
  //     console.log(error)
  //   },
  //   onSettled: (data) => {
  //     console.log(data)
  //   }
	// })
  //? USE
  // deleteOrderMutation.mutate({
  //   updatedOrder: updatedOrder
  // })

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
      created_at: new Date().toISOString()
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