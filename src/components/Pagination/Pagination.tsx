import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'

type PropsType = {
    setCurrentPage: (value: number) => void
}

export const Pagination: React.FC<PropsType> = ({setCurrentPage}) => {

    const onChangePageHandler = (e: { selected: number }) => {
        setCurrentPage(e.selected + 1)
    }

    return (
        <>
            <ReactPaginate
                className={styles.pagination}
                breakLabel="..."
                previousLabel="<"
                nextLabel=">"
                onPageChange={onChangePageHandler}
                // pageRangeDisplayed={4}
                pageCount={3}
                renderOnZeroPageCount={null}
            />
        </>
    )
}