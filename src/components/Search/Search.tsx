import React, {ChangeEvent, useContext} from 'react';
import styles from './Search.module.scss'
import close from '../../assets/img/close.svg'
import search from '../../assets/img/search.svg'
import {SearchContext} from '../../App';

type PropsType = {
    // searchValue: string
    // setSearchValue: (value: string) => void
}

export const Search: React.FC<PropsType> = () => {

    const {searchValue, setSearchValue} = useContext(SearchContext)


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }
    const clearInput = () => {
        setSearchValue('')
    }

    return (
        <div className={styles.wrapper}>
            <img src={search} alt="search" className={styles.iconSearch}/>
            <input
                type="text"
                placeholder="Search..."
                className={styles.search}
                value={searchValue}
                onChange={onChangeHandler}
            />
            {searchValue && <img src={close} alt="close" className={styles.iconClose} onClick={clearInput}/>}
        </div>
    )
}