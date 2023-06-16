import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {addItem, ItemEntityType} from '../../store/cart/cart-slice';
import {AppStateType, useAppDispatch} from '../../store/store';
import {selectItems} from '../../store/cart/cart-selector';
import styles from './PizzaBlock.module.scss'
import {Link} from 'react-router-dom';

type PropsType = {
    id: string
    title: string
    price: number
    imageUrl: string
    sizes: Array<number>
    types: Array<number>
    category: number
    rating: number
}

export const PizzaBlock: React.FC<PropsType> = (props) => {

    const {imageUrl, title, sizes, price, types, id} = props

    const typeNames = ['тонкое', 'традиционное']

    const [activeType, setActiveType] = useState(0)
    const [activeSize, setActiveSize] = useState(0)

    const itemsArray = useSelector<AppStateType, Array<ItemEntityType>>(selectItems)

    const dispatch = useAppDispatch()

    const addItemCallback = () => {
        dispatch(addItem({item: props}))
    }

    const item = itemsArray.find(item => item.id === id)

    const itemCount = item ? item.count : 0

    return (
        <div className="pizza-block">
            <Link to={`/pizza/${id}`}>
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
            </Link>
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types.map(type => {
                        return <li key={type} className={activeType === type ? 'active' : ''}
                                   onClick={() => setActiveType(type)}>{typeNames[type]}</li>
                    })}
                </ul>
                <ul>
                    {sizes.map((s, i) => <li key={i} className={activeSize === i ? 'active' : ''}
                                             onClick={() => setActiveSize(i)}>{s} см.</li>)}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <button className="button button--outline button--add" onClick={addItemCallback}>

                    <div className={`${styles.plus} button--add`}></div>

                    <span>Добавить</span>
                    {itemCount > 0 && <i>{itemCount}</i>}
                </button>
            </div>
        </div>
    )
}