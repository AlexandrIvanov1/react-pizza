import {AppStateType} from './store';


export const selectPizzas = (state: AppStateType) => state.pizza.items

export const selectStatus = (state: AppStateType) => state.pizza.status