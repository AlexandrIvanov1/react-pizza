import axios from 'axios';

export const api = {
    getItems: (currentPage: number, categoryId: number, sortType: string, sortDirection: SortDirectionType, searchValue: string) => {
        return axios.get<Array<ItemType>>(
            `https://646cf83d7b42c06c3b2c5b7d.mockapi.io/items?page=${currentPage}&limit=4&${categoryId ? `category=${categoryId}&` : ''}sortBy=${sortType}&order=${sortDirection}&search=${searchValue}`)
            .then(res => res.data)
    }
}

export type ItemType = {
    id: number
    title: string
    price: number
    imageUrl: string
    sizes: Array<number>
    types: Array<number>
    category: number
    rating: number
}

export type SortDirectionType = 'asc' | 'desc'