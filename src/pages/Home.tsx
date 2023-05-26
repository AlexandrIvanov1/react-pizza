import {Categories} from '../components/Categories/Categories';
import {Sort} from '../components/Sort/Sort';
import {Skeleton} from '../components/PizzaBlock/Skeleton';
import {PizzaBlock} from '../components/PizzaBlock/PizzaBlock';
import React, {useEffect, useState} from 'react';
import {api, ItemType} from '../api/api';

export const Home = () => {

    const [items, setItems] = useState<Array<ItemType>>([])

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        api.getItems()
            .then(res => {
                setItems([...res])
                setIsLoading(false)
            })
    }, [])

    return (
        // <div className="content">
        //     <div className="container">
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? [...new Array(8)].map((item, i) => <Skeleton key={i}/>)
                        : items.map(p => <PizzaBlock key={p.id} {...p}/>)
                }
            </div>
        </>
            // </div>
        // </div>
    )
}