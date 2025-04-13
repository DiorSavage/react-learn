import { createNewOrder, loginUser } from '@/shared/api/api'
import { queryClient } from '@/shared/api/QueryClient'
import { AppThunk } from '@/store/store'
import { actions as userActions } from '@/store/slices/user.slice'
import { MutationObserver, useMutation, useMutationState } from '@tanstack/react-query'

export const loginThunk = ( email: string, password: string ): AppThunk => async ( //? потенциальные плюсики такого подхода - ретраи при отсутствии инета, подписаться на эту мутацию в компоненте
	dispatch,
	getState
) => {
	const mutationResult = await new MutationObserver(queryClient, {
		mutationKey: ['login'],
		mutationFn: loginUser,
	}).mutate({
		email, 
		password
	}, {
		onSettled: async () => {
			await queryClient.invalidateQueries({
				queryKey: ["userData"]
			})
		}
	})
	console.log(mutationResult)

	if (mutationResult) {
		dispatch(userActions.setUser(mutationResult))
	}
	return mutationResult
}

export const createOrderThunk = ( promocode: string, user_id: number, order_price: number, products_id: number[], created_at: string ): AppThunk => async (
	dispatch,
	getState
) => {
	const mutationResult = await new MutationObserver(queryClient, {
		mutationKey: ["ordercreate"],
		mutationFn: createNewOrder
	}).mutate({
		newOrder: {
			created_at: created_at,
			order_price: order_price,
			products_id: products_id,
			promocode: promocode,
			user_id: user_id
		}
	}, {
		onSettled: async () => {
			await queryClient.invalidateQueries({
				queryKey: ["orders"]
			})
		}
	})
	if (mutationResult) {
		return mutationResult
	}
}

// export const useLoginLoading = () => useMutationState({ filters: { mutationKey: ["login"] } })[0].status === "pending"
export const useLoginLoading = () => useMutation({
	mutationKey: ["login"]
}).isPending