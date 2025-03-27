import { useState, useEffect } from 'react'
import { Card } from './Card'

export const CardShowroom = () => {
    const [theme, setTheme] = useState('theme1')

    const toggleTheme = () => {
        setTheme(theme === 'theme1' ? 'theme2' : 'theme1')
    }

    useEffect(() => {
        const backgroundColor = `var(--background-color-${theme})`
        const fontColor = `var(--font-color-${theme})`

        document.body.style.setProperty('--background-color', backgroundColor)
        document.body.style.setProperty('--font-color', fontColor)
    }, [theme])

    return (
        <div>
            <Card title='This is a title' subtitle='This is a subtitle.' />
            <button type="button" onClick={toggleTheme}>
                Toggle theme {theme}
            </button>
        </div>    
    )
}