import { configureStore } from '@reduxjs/toolkit'
import {filterSlice} from './filter-slice';
import {cartSlice} from './cart-slice';

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        cart: cartSlice
    },
})

export type AppStateType = ReturnType<typeof store.getState>