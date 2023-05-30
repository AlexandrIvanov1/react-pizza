import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SortDirectionType} from '../api/api';


const slice = createSlice({
    name: 'sort',
    initialState: {
        categoryId: 0,
        sortType: 0,
        currentPage: 1,
        sortDirection: 'asc' as SortDirectionType
    },
    reducers: {
        changeCategoryId: (state, action: PayloadAction<{categoryId: number}>) => {
            state.categoryId = action.payload.categoryId
        },
        changeSortType: (state, action: PayloadAction<{sortType: number}>) => {
            state.sortType = action.payload.sortType
        },
        changeSortDirection: (state, action: PayloadAction<{sortDirection: SortDirectionType}>) => {
            state.sortDirection = action.payload.sortDirection
        },
        changeCurrentPage: (state, action: PayloadAction<{currentPage: number}>) => {
            state.currentPage = action.payload.currentPage
        }
    }
})

export const {changeCategoryId, changeSortType, changeSortDirection, changeCurrentPage} = slice.actions

export const filterSlice = slice.reducer