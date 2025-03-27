import React from 'react';
import { IData } from '../../App';

// типизация обычной функции
function Block({ count, text, nigger }: IData) { // типизация входных данных
    return (
        <div>
            Я {text} {count} раз . Ты негритос {nigger ? 'Да' : 'Нет'}
        </div>
    )
}

export default Block