import React, {useEffect, useState} from 'react';
import './scss/app.scss';
import {Header} from './components/Header/Header';
import {Categories} from './components/Categories/Categories';
import {Sort} from './components/Sort/Sort';
import {PizzaBlock} from './components/PizzaBlock';
import {api, ItemType} from './api/api';

function App() {
    const [items, setItems] = useState<Array<ItemType>>([])

    useEffect(() => {
        api.getItems()
            .then(res => setItems([...res]))
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {items.map(p => {
                            return <PizzaBlock key={p.id} {...p}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;