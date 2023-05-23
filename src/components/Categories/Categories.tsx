import React, {useState} from 'react';

export const Categories = () => {

    const [active, setActive] = useState(0)

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const onClickHandler = (index: number) => {
        setActive(index)
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((c, i) => {
                    return <li key={i} className={active === i ? 'active' : ''} onClick={() => onClickHandler(i)}>{c}</li>
                })}
            </ul>
        </div>
    )
}