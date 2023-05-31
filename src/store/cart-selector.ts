import {AppStateType} from './store';


export const selectItems = (state: AppStateType) => state.cart.items

export const selectTotalPrice = (state: AppStateType) => state.cart.totalPrice