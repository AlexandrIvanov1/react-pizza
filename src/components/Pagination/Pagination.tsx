import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'
import {useDispatch} from 'react-redux';
import {changeCurrentPage} from '../../store/filter-slice';

type PropsType = {
    currentPage: number
}


export const Pagination: React.FC<PropsType> = ({currentPage}) => {

    const dispatch = useDispatch()

    const onChangePageHandler = (e: { selected: number }) => {
        dispatch(changeCurrentPage({currentPage: e.selected + 1}))
    }

    return (
        <>
            <ReactPaginate
                className={styles.pagination}
                breakLabel="..."
                previousLabel="<"
                nextLabel=">"
                onPageChange={onChangePageHandler}
                pageRangeDisplayed={4}
                pageCount={3}
                renderOnZeroPageCount={null}
                forcePage={currentPage - 1}
            />
        </>
    )
}