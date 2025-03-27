import React, {UseDebounce} from 'react';
import styles from './UseDebounceH.module.scss';

export const UseDebounceH = () => {
    return (
    <main>
        <p className={styles.info}>UseDebounce — это крючок в React, который задерживает
        выполнение функций или обновление состояния до тех пор, пока не пройдёт
        указанный период времени без каких-либо дальнейших изменений входного значения.
        </p>
        <p className={styles.info}>Это особенно полезно в таких сценариях, как обработка
        пользовательского ввода или инициирование сетевых запросов. Там он эффективно
        уменьшает ненужные вычисления и гарантирует, что ресурсоёмкие операции
        выполняются только после паузы во входной активности.</p>
        <div className={styles.debounce__practice}></div>
    </main>
    );
};
