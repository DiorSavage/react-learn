import { NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import styles from './Home.module.scss'

export const Home = () => {

    const location = useLocation();
    useEffect(() => {
        console.log(location)
    })
    return(
        <main>
            <section className={styles.hooks}>
                <NavLink to='/state' className={styles.button}>UseState</NavLink>
                <NavLink to='/effect' className={styles.button}>UseEffect</NavLink>
                <NavLink to='/ref' className={styles.button}>UseRef</NavLink>
                <NavLink to='/localstorage' className={styles.button}>UseLocalStorage</NavLink>
                <NavLink to='/location' className={styles.button} state={{adsf: location.pathname}}>UseLocation and UseNavigate</NavLink>
                <NavLink to='/context' className={styles.button}>UseContext</NavLink>
                <NavLink to='/reducer' className={styles.button}>UseReducer</NavLink>
                <NavLink to='/memo' className={styles.button}>UseMemo</NavLink>
                <NavLink to='/callback' className={styles.button}>UseCallback</NavLink>
                <NavLink to='/async' className={styles.button}>UseAsync</NavLink>
                <NavLink to='/debounce' className={styles.button}>UseDebounce</NavLink>
                <NavLink to='/params' className={styles.button}>UseParams</NavLink>
                <NavLink to='/trackerr' className={styles.button}>UseTrackErrors</NavLink>
                <NavLink to='/modalstate' className={styles.button}>UseModalState</NavLink>
                <NavLink to='/queryparams' className={styles.button}>UseQueryParams</NavLink>
            </section>
        </main>
    )
}
