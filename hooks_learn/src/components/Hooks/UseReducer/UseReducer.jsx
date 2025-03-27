import React, { useReducer} from 'react';
import styles from './UseReducer.module.scss'

export const UseReducer = () => {

    const initialState = { count: 0 };

    const reducer = (state, action) => { // можно еще деструктуризацию юзануть, типо вместо action { type, payload}, лучше всего использовать деструктуризацию юзать для дефолтных значений каких то ключей
        switch (action.type) { // просто type
            case 'increment':
                return { ...state, count: state.count + 100};
            case 'decrement':
                return { ...state, count: state.count - 100 };
            case 'payload':
                return { ...state, count: state.count + action.payload }; // просто payload
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <main>
            <p className={styles.info}>Хук useReducer является альтернативой хуку useState и применяется в случаях, когда первоначальный стейт является более сложным и многосоставным или в моменты, когда новое состояние зависит от предыдущего.</p>
            <p className={styles.info}>
                Хук useReducer принимает три параметра: <br /><br />
                Функция редьюсер, идея взята из Redux. Получает текущее состояние и action с type для его изменения. <br /> <br />
                Начальное состояние, которое попадает в первый аргумент редьюсера. <br /> <br />
                Функция для «ленивой» инициализации первоначального состояния.</p>
            <div className={styles.reducer__practice}>
                <h1>Count: {state.count} </h1>
                <button
                    className={styles.button}
                    onClick={() => dispatch({ type: 'decrement' })}
                >
                    -
                </button>
                <button
                    className={styles.button}
                    onClick={() => dispatch({ type: 'increment' })}
                >
                    +
                </button>
                <button
                    className={styles.button}
                    onClick={() => dispatch({ type: 'payload', payload: 20 })}
                >
                    payload
                </button>
            </div>
        </main>
    );
}
