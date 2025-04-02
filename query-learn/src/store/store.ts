import { combineReducers } from 'redux';
import { configureStore,  } from '@reduxjs/toolkit';
import { actions as userActions, reducer as userReducer } from './slices/user.slice';

const reducers = combineReducers({
	"userSlice": userReducer
})

export const store = configureStore({
	reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch