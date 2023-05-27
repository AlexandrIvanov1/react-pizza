import React from 'react';

type PropsType = {
    category: number
    setCategory: (value: number) => void
}

export const Categories: React.FC<PropsType> = ({category, setCategory}) => {
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">
            <ul>
                {categories.map((c, i) => <li key={i}
                                              className={category === i ? 'active' : ''}
                                              onClick={() => setCategory(i)}
                    >{c}</li>
                )}
            </ul>
        </div>
    )
}