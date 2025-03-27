import React, {  } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export const Header = () => {
    return(
        <div className={styles.container}>
            <ul className={styles.list__container}>
                <li><NavLink to='/' exact='true' className='header__text'>
                Home
                </NavLink>
            </li>
                <li><NavLink to='/people/?page=1' exact='true' className='header__text'>
                People
                </NavLink>
            </li>
            </ul>
        </div>
    )
}
