import {AnyAction, combineReducers, configureStore, ThunkDispatch} from '@reduxjs/toolkit'
import {filterSlice} from './filter-slice';
import {cartSlice} from './cart-slice';
import {pizzaSlice} from './pizza-slice';
import {useDispatch} from 'react-redux';
// @ts-ignore
import storage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const reducer = combineReducers({
    filter: filterSlice,
    cart: cartSlice,
    pizza: pizzaSlice
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
})

export type AppStateType = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export type AppThunkDispatch = ThunkDispatch<AppStateType, any, AnyAction>