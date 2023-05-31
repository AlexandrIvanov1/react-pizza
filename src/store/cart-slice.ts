import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ItemType} from '../api/api';


const slice = createSlice({
    name: 'cart',
    initialState: {
        items: [] as Array<ItemEntityType>,
        totalPrice: 0
    },
    reducers: {
        addItem: (state, action: PayloadAction<{item: ItemType}>) => {
            const findItem = state.items.find(item => item.id === action.payload.item.id)

            if (findItem) {
                findItem.count += 1
            } else {
                state.items.push({...action.payload.item, count: 1})
            }

            state.totalPrice = state.items.reduce((acc, res) => {
                return (res.price * res.count) + acc
            }, 0)
        },
        removeItem: (state, action: PayloadAction<{id: number}>) => {
            const findItem = state.items.find(item => item.id === action.payload.id)

            if (findItem) {
                findItem.count -= 1
                if (findItem.count === 0) {
                    state.items = state.items.filter(item => item.id !== action.payload.id)
                }
            }
            state.totalPrice = state.items.reduce((acc, res) => {
                return (res.price * res.count) + acc
            }, 0)
        },
        removeItems: (state, action: PayloadAction<{id: number}>) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
            state.totalPrice = state.items.reduce((acc, res) => {
                return (res.price * res.count) + acc
            }, 0)
        },
        clearCart: (state) => {
            state.items = []
            state.totalPrice = 0
        }
    }
})

export const {addItem, clearCart, removeItem, removeItems} = slice.actions

export const cartSlice = slice.reducer

export type ItemEntityType = ItemType & {count: number}