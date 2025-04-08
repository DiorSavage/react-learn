import { loginUser } from '@/shared/api/api'
import { queryClient } from '@/shared/api/QueryClient'
import { AppThunk } from '@/store/store'
import { actions as userActions } from '@/store/slices/user.slice'
import { MutationObserver } from '@tanstack/react-query'

export const loginThunk = ( email: string, password: string ): AppThunk => async ( //? потенциальные плюсики такого подхода - ретраи при отсутствии инета, подписаться на эту мутацию в компоненте
	dispatch,
	getState
) => {
	const mutationResult = await new MutationObserver(queryClient, {
		mutationFn: loginUser,
	}).mutate({
		email, 
		password
	})

	if (mutationResult) {
		dispatch(userActions.setUser(mutationResult))
	}
}