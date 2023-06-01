import {Categories} from '../../components/Categories/Categories';
import {Sort} from '../../components/Sort/Sort';
import {Skeleton} from '../../components/PizzaBlock/Skeleton';
import {PizzaBlock} from '../../components/PizzaBlock/PizzaBlock';
import React, {useEffect, useRef} from 'react';
import {ItemType, SortDirectionType} from '../../api/api';
import {useDispatch, useSelector} from 'react-redux';
import {Pagination} from '../../components/Pagination/Pagination';
import {useNavigate} from 'react-router-dom';
import qs from 'qs';
import {setFilterSetting} from '../../store/filter-slice';
import {AppStateType} from '../../store/store';
import {fetchPizzas, StatusType} from '../../store/pizza-slice';
import styles from './Home.module.scss'

type PropsType = {
    searchValue: string
}

export const Home: React.FC<PropsType> = ({searchValue}) => {

    const categoryId = useSelector<AppStateType, number>(state => state.filter.categoryId)
    const sortType = useSelector<AppStateType, number>(state => state.filter.sortType)
    const sortDirection = useSelector<AppStateType, SortDirectionType>(state => state.filter.sortDirection)
    const currentPage = useSelector<AppStateType, number>(state => state.filter.currentPage)

    const items = useSelector<AppStateType, Array<ItemType>>(state => state.pizza.items)
    const status = useSelector<AppStateType, StatusType>(state => state.pizza.status)

    const isSearch = useRef(false)
    const isMounted = useRef(false)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const getPizzas = async () => {
        const sort = sortType === 0 ? 'rating' : sortType === 1 ? 'price' : 'title'
        // @ts-ignore
        dispatch(fetchPizzas({currentPage, categoryId, sort, sortDirection, searchValue}))
    }


    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                page: currentPage,
                category: categoryId,
                sortBy: sortType,
                order: sortDirection
            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true
    }, [currentPage, categoryId, sortType, sortDirection, searchValue, navigate])

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))

            // const {page, category, sortBy, order} = params

            const currentPage = Number(params.page)
            const categoryId = Number(params.category)
            const sortType = Number(params.sortBy)
            const sortDirection = params.order

            // @ts-ignore
            dispatch(setFilterSetting({currentPage, categoryId, sortType, sortDirection}))

            isSearch.current = true
        }
    }, [dispatch])


    useEffect(() => {
        if (!isSearch.current) {
            getPizzas()
        }
        isSearch.current = false
    }, [currentPage, categoryId, sortType, sortDirection, searchValue])

    const skeletons = [...new Array(8)].map((item, i) => <Skeleton key={i}/>)

    const pizzas = items.filter(p => p.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map(p => <PizzaBlock key={p.id} {...p}/>)

    return (
        <div className="container">
            <div className="content__top">

                <Categories category={categoryId}/>

                <Sort
                    sortId={sortType}
                    sortDirection={sortDirection}
                />

            </div>

            {status !== 'error' && <h2 className="content__title">Все пиццы</h2>}

            {
                status === 'error'
                    ? <div className={styles.errorBlock}>
                        <h2>Ошибка!</h2>
                        <p>Не удалось загрузить данные, попробуйте позже...</p>
                    </div>
                    :
                    <div className="content__items">
                        {status === 'loading'
                            ? skeletons
                            : pizzas}
                    </div>
            }


            <Pagination currentPage={currentPage}/>

        </div>
    )
}