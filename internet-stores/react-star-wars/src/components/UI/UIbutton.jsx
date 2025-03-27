import React, {  } from 'react'
import PropTypes from 'prop-types'
import styles from './UIbutton.module.css'
import cn from 'classnames'
import './index.css'

export const UIbutton = ( {text, handleChange, disabled, theme='dark' } ) => {
    return(
        <button 
            onClick={handleChange}
            disabled={disabled} 
            className={cn(styles.button, styles[theme])}
            > {text}
        </button>
    )
}

UIbutton.propTypes = {
    handleChange: PropTypes.func,
    text: PropTypes.string,
    disabled: PropTypes.bool,
    theme: PropTypes.string
}