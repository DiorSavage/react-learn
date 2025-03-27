import styles from './UseLC.module.scss';
import { useState } from 'react';
import { useLocalStorage } from './source/useLocalStorage.ts';

export const UseLC = () => {

    const [value, setValue] = useState('');
    const { setItem, getItem, removeItem } = useLocalStorage('value')

    return(
        <main>
            <p className={styles.info}>Перехватчик реакции useLocalStorage предоставляет удобный способ синхронизации состояния компонента с данными, хранящимися в локальном хранилище. Он автоматически считывает начальное значение из локального хранилища, когда компонент монтирует, и обновляет локальное хранилище при изменении состояния. Кроме того, он отслеживает изменения в локальном хранилище, внесенные другими вкладками или окнами, и поддерживает состояние компонента в актуальном состоянии.</p>
            <div className={styles.local__block}>
                <h1>UseLocalStorage</h1>
                <input
                    type="text" 
                    value={value}
                    id='field'
                    onChange={(e) => setValue(e.target.value)}
                />
                <div className={styles.buttons_block}>
                    <button onClick={() => setItem(value)} type='button'>Set</button>
                    <button onClick={() => document.getElementById('field').value = getItem()} type='button'>Get</button>
                    <button onClick={() => removeItem()} type='button'>Remove</button>
                </div>
            </div>
        </main>
    );
};
