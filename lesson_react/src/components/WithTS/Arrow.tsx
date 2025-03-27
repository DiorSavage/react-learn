import React, { FC } from 'react';
import { TypeDataArr } from '../../App';

// типизация стрелочной функции
// синтаксис
// const Компонент: FC<интерфейс/тип> = ({ свойства }) => { код }

const Arrow: FC<TypeDataArr> = ({id, fucking, text}) => { // FС импортируется из React 
    return (
        <div>
            {text} his number is {id} he is {fucking ? 'Yes' : 'No'}
        </div>
    )
}
export default Arrow    