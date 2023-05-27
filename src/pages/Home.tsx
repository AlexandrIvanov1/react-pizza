import {Categories} from '../components/Categories/Categories';
import {Sort} from '../components/Sort/Sort';
import {Skeleton} from '../components/PizzaBlock/Skeleton';
import {PizzaBlock} from '../components/PizzaBlock/PizzaBlock';
import React, {useEffect, useState} from 'react';
import {api, ItemType, SortDirectionType} from '../api/api';

export const Home = () => {

    const [items, setItems] = useState<Array<ItemType>>([])
    const [isLoading, setIsLoading] = useState(false)

    const [categoryId, setCategoryId] = useState(0)

    const [sortType, setSortType] = useState(0)

    const [sortDirection, setSortDirection] = useState<SortDirectionType>('asc')

    useEffect(() => {
        const sort = sortType === 0 ? 'rating' : sortType === 1 ? 'price' : 'title'
        setIsLoading(true)
        api.getItems(categoryId, sort, sortDirection)
            .then(res => {
                setItems([...res])
                setIsLoading(false)
            })
        // window.scroll(0, 0)
    }, [categoryId, sortType, sortDirection])

    return (
        <div className="container">
            <div className="content__top">

                <Categories category={categoryId} setCategory={setCategoryId}/>

                <Sort
                    sortId={sortType}
                    setSortId={setSortType}
                    sortDirection={sortDirection}
                    setSortDirection={setSortDirection}
                />

            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? [...new Array(8)].map((item, i) => <Skeleton key={i}/>)
                        : items.map(p => <PizzaBlock key={p.id} {...p}/>)
                }
            </div>
        </div>
    )
}