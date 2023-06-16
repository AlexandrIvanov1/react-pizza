import React from 'react';
import {useDispatch} from 'react-redux';
import {changeCategoryId} from '../../store/filter/filter-slice';

type PropsType = {
    category: number
}

export const Categories: React.FC<PropsType> = React.memo(({category}) => {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const dispatch = useDispatch()

    const onClickHandler = (categoryId: number) => {
        dispatch(changeCategoryId({categoryId}))
        // dispatch(changeCurrentPage({currentPage: 1}))
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((c, i) => <li key={i}
                                              className={category === i ? 'active' : ''}
                                              onClick={() => onClickHandler(i)}
                    >{c}</li>
                )}
            </ul>
        </div>
    )
})