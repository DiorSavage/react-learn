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

export const { actions, reducer } = userSlice