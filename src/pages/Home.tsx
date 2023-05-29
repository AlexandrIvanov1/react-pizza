import {Categories} from '../components/Categories/Categories';
import {Sort} from '../components/Sort/Sort';
import {Skeleton} from '../components/PizzaBlock/Skeleton';
import {PizzaBlock} from '../components/PizzaBlock/PizzaBlock';
import React, {useEffect, useState} from 'react';
import {api, ItemType} from '../api/api';
import {useSelector} from 'react-redux';
import {selectCategoryId, selectSortDirection, selectSortType} from '../store/filter-selector';

type PropsType = {
    searchValue: string
}

export const Home: React.FC<PropsType> = ({searchValue}) => {

    const categoryId = useSelector(selectCategoryId)

    const sortType = useSelector(selectSortType)

    const sortDirection = useSelector(selectSortDirection)

    const [items, setItems] = useState<Array<ItemType>>([])
    const [isLoading, setIsLoading] = useState(false)

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

    const skeletons = [...new Array(8)].map((item, i) => <Skeleton key={i}/>)

    const pizzas = items.filter(p => p.title.toLowerCase().includes(searchValue.toLowerCase())).map(p => <PizzaBlock key={p.id} {...p}/>)

    return (
        <div className="container">
            <div className="content__top">

                <Categories category={categoryId} />

                <Sort
                    sortId={sortType}
                    sortDirection={sortDirection}
                />

            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? skeletons
                        : pizzas
                }
            </div>
        </div>
    )
}