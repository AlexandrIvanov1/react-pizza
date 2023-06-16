import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {selectItems, selectTotalPrice} from '../../store/cart/cart-selector';
import {AppStateType} from '../../store/store';
import {clearCart, ItemEntityType} from '../../store/cart/cart-slice';
import {CartItem} from '../../components/CartItem/CartItem';
import cart from '../../assets/img/cart.svg'
import arrow from '../../assets/img/grey-arrow-left.svg'
import styles from './Cart.module.scss'
import {EmptyCart} from '../../components/EmptyCart/EmptyCart';

const Cart = () => {

    const items = useSelector<AppStateType, Array<ItemEntityType>>(selectItems)
    const totalPrice = useSelector<AppStateType, number>(selectTotalPrice)

    const dispatch = useDispatch()

    const totalCount = items.reduce((acc, res) => acc + res.count, 0)

    const clearCartCallback = () => dispatch(clearCart())

    if (totalCount === 0) {
        return <EmptyCart/>
    }

    return (
        <div className="container container--cart">
            <div className="cart">
                <div className="cart__top">
                    <h2 className="content__title">
                        <img src={cart} alt="cart" className={styles.cart}/>
                        Корзина
                    </h2>
                    <div onClick={clearCartCallback} className="cart__clear">

                        <div className={`${styles.trash} cart__clear`}></div>

                        <span>Очистить корзину</span>
                    </div>
                </div>
                <div className="content__items">

                    {items.map(item => <CartItem key={item.id} {...item}/>)}

                </div>
                <div className="cart__bottom">
                    <div className="cart__bottom-details">
                        <span> Всего пицц: <b>{totalCount} шт.</b> </span>
                        <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
                    </div>
                    <div className="cart__bottom-buttons">
                        <Link to="/" className="button button--outline button--add go-back-btn">
                            <img src={arrow} alt="arrow" className={styles.arrow}/>
                            <span>Вернуться назад</span>
                        </Link>
                        <div className="button pay-btn">
                            <span>Оплатить сейчас</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;