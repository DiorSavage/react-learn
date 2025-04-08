import { queryClient } from '@/shared/api/QueryClient'
import { UserLoginType } from '@/types/users.type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: UserLoginType = {
	user: {
		email: "",
		username: "",
		password: "",
		id: 0,
		age: 0
	},
	tokens: {
		access_token: "",
		token_type: "Bearer"
	}
}

//! сюда лучше сохранять айди пользователя, чтобы делать запрос, потому что в любом случае должно быть обновление данных с апи, куда передается тот же токен

const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {
		setUser: (state, { payload }: PayloadAction<UserLoginType>) => {
			state = payload
			return state
		},
		getUserData: (state) => {
			state = queryClient.getQueryData(["userData"]) || {
				user: {
					email: "",
					username: "",
					password: "",
					id: 0,
					age: 0
				},
				tokens: {
					access_token: "",
					token_type: "Bearer"
				}
			}
			return state
		}
	}
})

//? slice.injectInto(rootReducer)
export const { actions, reducer } = userSlice