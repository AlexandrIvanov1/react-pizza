import axios from 'axios';

export const api = {
    getItems: (categoryId: number, sortType: string, sortDirection: SortDirectionType) => {
        return axios.get<Array<ItemType>>(
            `https://646cf83d7b42c06c3b2c5b7d.mockapi.io/items?${categoryId ? `category=${categoryId}` : ''}&sortBy=${sortType}&order=${sortDirection}`)
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