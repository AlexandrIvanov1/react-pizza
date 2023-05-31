import React from 'react';
import logo from '../../assets/img/pizza-logo.svg'
import {Link, NavLink} from 'react-router-dom';
import {Search} from '../Search/Search';
import {useSelector} from 'react-redux';
import {selectItems, selectTotalPrice} from '../../store/cart-selector';
import cart from '../../assets/img/whiteCart.svg'
import styles from './Header.module.scss'

export const Header = () => {

    const items = useSelector(selectItems)
    
    const totalPrice = useSelector(selectTotalPrice)

    const totalCount = items.reduce((acc, res) => acc + res.count, 0)

    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <img width="38" src={logo} alt="Pizza logo"/>
                    <div>
                        <h1><Link to='/'>React Pizza</Link></h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>

                <Search />

                <div className="header__cart">
                    <NavLink to='cart' className="button button--cart">
                        <span>{totalPrice} ₽</span>
                        <div className="button__delimiter"></div>
                        <img src={cart} alt="cart" className={styles.cart}/>
                        <span>{totalCount}</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}