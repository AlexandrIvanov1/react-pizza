import {AnyAction, configureStore, ThunkDispatch} from '@reduxjs/toolkit'
import {filterSlice} from './filter-slice';
import {cartSlice} from './cart-slice';
import {pizzaSlice} from './pizza-slice';
import {useDispatch} from 'react-redux';

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        cart: cartSlice,
        pizza: pizzaSlice
    },
})

export type AppStateType = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()

export type AppThunkDispatch = ThunkDispatch<AppStateType, any, AnyAction>