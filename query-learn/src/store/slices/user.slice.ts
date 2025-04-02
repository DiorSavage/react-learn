import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
	username: "",
	age: 0
}

const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {
		CreateUser: (state, { payload }: PayloadAction<{ username: string; age: number; }>) => {
			state = payload
			return state
		}
	}
})

export const { actions, reducer } = userSlice