import './Button.scss'

const buttonSizeClassName = {
    "sm": 'button-size-sm',
    "md": 'button-size-md',
    "lg": 'button-size-lg',
}

const buttonTypeClassName = {
    "succes": 'button-type-succes',
    "error": 'button-type-error',
    "info": 'button-type-info',
}

export const Button = ({ title, onClick, size='sm', type='info', disabled = false }) => {
    return (
        <button className={`button button-size-${size} ${buttonTypeClassName[type]}`} onClick={onClick} disabled={disabled}>
            <span className='button__title'>{title}</span>
        </button>
    )
}