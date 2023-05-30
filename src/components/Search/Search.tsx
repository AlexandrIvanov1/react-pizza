import React, {ChangeEvent, useCallback, useContext, useRef, useState} from 'react';
import styles from './Search.module.scss'
import close from '../../assets/img/close.svg'
import search from '../../assets/img/search.svg'
import {SearchContext} from '../../App';
import debounce from 'lodash.debounce'

type PropsType = {}

export const Search: React.FC<PropsType> = () => {

    const {setSearchValue} = useContext(SearchContext)

    const [inputValue, setInputValue] = useState('')

    const inputRef = useRef<HTMLInputElement | null>(null)

    // const debounce = (fn: Function, ms: number) => {
    //     let timerId: any;
    //     return function () {
    //         const fnCall = () => {
    //             // debugger
    //             // @ts-ignore
    //             fn.apply(this, arguments)
    //         }
    //         clearTimeout(timerId)
    //         timerId = setTimeout(fnCall, ms)
    //     }
    // }

    const clearInput = () => {
        setInputValue('')
        inputRef.current?.focus()
    }

    const updateSearchValue = useCallback(debounce((value: string) => {
        setSearchValue(value)
    }, 200), [])

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
        updateSearchValue(e.target.value)
    }

    return (
        <div className={styles.wrapper}>
            <img src={search} alt="search" className={styles.iconSearch}/>
            <input
                type="text"
                ref={inputRef}
                placeholder="Search..."
                className={styles.search}
                value={inputValue}
                onChange={onChangeInput}
            />
            {inputValue && <img src={close} alt="close" className={styles.iconClose} onClick={clearInput}/>}
        </div>
    )
}