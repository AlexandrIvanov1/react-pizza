import React from 'react';
import {Link} from 'react-router-dom';
import styles from './NotFound.module.scss'

export const NotFound = () => {
    return (
        <div className={styles.content}>
            <h1>This page not found. Back <Link to='/' style={{color: 'red'}}>home</Link></h1>
        </div>
    )
}