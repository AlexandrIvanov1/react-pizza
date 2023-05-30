import {AppStateType} from './store';

export const selectCategoryId = (state: AppStateType) => state.filter.categoryId
export const selectSortType = (state: AppStateType) => state.filter.sortType
export const selectSortDirection = (state: AppStateType) => state.filter.sortDirection
export const selectCurrentPage = (state: AppStateType) => state.filter.currentPage