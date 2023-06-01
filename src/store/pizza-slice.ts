import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api, ItemType, SortDirectionType} from '../api/api';

type ArgType = {
    currentPage: number,
    categoryId: number
    sort: string
    sortDirection: SortDirectionType
    searchValue: string
}

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async (arg: ArgType, {rejectWithValue}) => {
        try {
            return await api.getItems(arg.currentPage, arg.categoryId, arg.sort, arg.sortDirection, arg.searchValue)
        } catch (e) {
            debugger
            return rejectWithValue(null)
        }
    }
)

const slice = createSlice({
    name: 'pizza',
    initialState: {
        items: [] as Array<ItemType>,
        status: 'error' as StatusType
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = 'loading'
            state.items = []
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.status = 'success'
            state.items = action.payload
        })
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = 'error'
            state.items = []
        })
    }
})

export const pizzaSlice = slice.reducer

export type StatusType = 'loading' | 'success' | 'error'