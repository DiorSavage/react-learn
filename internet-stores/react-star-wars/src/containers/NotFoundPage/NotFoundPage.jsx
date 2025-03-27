import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './NotFoundPage.module.css'
import img from '../../img/transistor-404.png'

export const NotFoundPage = () => {

    let location = useLocation()
    return(
        <>
            <img className={styles.img} src={img} alt="" />
            <p className={styles.text}>Not Found Content on address <u>{location.pathname}</u></p>
        </>
    )
}
