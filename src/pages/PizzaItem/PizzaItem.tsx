import React, {useEffect} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {ItemType} from '../../api/api';
import {getItem} from '../../store/pizza-slice';
import {useSelector} from 'react-redux';
import {AppStateType, useAppDispatch} from '../../store/store';
import styles from './PizzaItem.module.scss'
import {selectStatus} from '../../store/pizza-selector';

export const PizzaItem = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const item = useSelector<AppStateType, ItemType | null>(state => state.pizza.item)

    const status = useSelector(selectStatus)

    useEffect(() => {
        if (!id) return
        dispatch(getItem({id}))
    }, [id, dispatch])

    if (!item) {
        return (
            <div className="container">
                <h2 className={styles.loading}>Ошибка...</h2>
                <Link to={'/'} className={styles.button}>Назад</Link>
            </div>
        )
    }

    return (

        <div className="container">
            {status === 'loading'
                ? <h2 className={styles.loading}>Загрузка...</h2>
                : <div>
                    <img src={item.imageUrl} alt="pizza" className={styles.img}/>
                    <h3 className={styles.title}>{item.title}</h3>
                    <h4 className={styles.price}>{item.price} Р</h4>
                    <button onClick={() => navigate(-1)} className={styles.button}>Назад</button>
                </div>
            }
        </div>
    )
}