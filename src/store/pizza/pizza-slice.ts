import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api, ItemType, SortDirectionType} from '../../api/api';

export type FetchPizzasArgType = {
    currentPage: number,
    categoryId: number
    sort: string
    sortDirection: SortDirectionType
    searchValue: string
}

enum StatusesEnum {
    Loading = 'loading',
    Success = 'success',
    Error = 'error'
}

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async (arg: FetchPizzasArgType, {rejectWithValue}) => {
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
            return rejectWithValue(null)
        }
    }
)

const slice = createSlice({
    name: 'pizza',
    initialState: {
        items: [] as Array<ItemType>,
        item: {} as ItemType | null,
        status: StatusesEnum.Loading
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = StatusesEnum.Loading
            state.items = []
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.status = StatusesEnum.Success
            state.items = action.payload
        })
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = StatusesEnum.Error
            state.items = []
        })
        builder.addCase(getItem.pending, (state) => {
            state.status = StatusesEnum.Loading
        })
        builder.addCase(getItem.fulfilled, (state, action) => {
            state.item = action.payload
            state.status = StatusesEnum.Success
        })
        builder.addCase(getItem.rejected, (state) => {
            state.item = null
            state.status = StatusesEnum.Error
        })
    }
})

export const pizzaSlice = slice.reducer