import { Action, combineReducers } from 'redux';
import { configureStore, ThunkAction,  } from '@reduxjs/toolkit';
import { actions as userActions, reducer as userReducer } from './slices/user.slice';

const reducers = combineReducers({
	"userSlice": userReducer
})

export const store = configureStore({
	reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,      // Тип возвращаемого значения thunk (например, Promise<void>)
  RootState,       // Тип состояния Redux-стора
  unknown,         // Дополнительные аргументы (например, extraArgument, если они используются)
  Action<string>   // Тип действия Redux
>;