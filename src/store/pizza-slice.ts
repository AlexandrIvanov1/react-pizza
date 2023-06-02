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
            return rejectWithValue(null)
        }
    }
)
export const getItem = createAsyncThunk('pizza/getItem', async (arg: {id: string}, {rejectWithValue}) => {
        try {
            return await api.getItem(arg.id)
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
        item: {} as ItemType | null,
        status: 'loading' as StatusType
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
        builder.addCase(getItem.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(getItem.fulfilled, (state, action) => {
            state.item = action.payload
            state.status = 'success'
        })
        builder.addCase(getItem.rejected, (state) => {
            state.item = null
            state.status = 'error'
        })
    }
})

export const pizzaSlice = slice.reducer

export type StatusType = 'loading' | 'success' | 'error'