import { useState, useEffect, useRef } from 'react'
import { useLocalStorage } from '../../helpers/useLocaleStorage'

import detectDarkMode from '../../helpers/detectDarkMode'

import sun from './../../img/icons/sun.svg'
import moon from './../../img/icons/moon.svg'

import './style.css'

const BtnDarkMode = () => {
    const [theme, setTheme] = useLocalStorage('theme', detectDarkMode()) // замена useState()
    // const [theme, setTheme] = useState('light')
    const buttonRef = useRef(null)


    useEffect(() => {

        if (theme == 'dark') {
            document.body.classList.add('dark')
            buttonRef.current.classList.add('dark-mode-btn--active')
        } else {
            document.body.classList.remove('dark')
            buttonRef.current.classList.remove('dark-mode-btn--active')
        }
    }, [theme])

    const changeMode= () => {
        setTheme((currentValue) => {
            return currentValue == 'light' ? 'dark' : 'light'
        })
    }

    return ( 
        <button ref={buttonRef} onClick={changeMode} className="dark-mode-btn">
            <img src= {sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src= {moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
    );
}

export default BtnDarkMode;