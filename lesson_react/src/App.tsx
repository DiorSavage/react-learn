// график не работает, можно даже не пытаться, у него ебанутый код с диаграммами не выложен
// но основы изучены более менее


import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost'
import React, { useState } from 'react'
import Block from './components/WithTS/Block.tsx'
import Arrow from './components/WithTS/Arrow.tsx'

export interface IData {
  count: number
  text: string
  nigger: boolean
}

export type TypeDataArr = {
  id: number
  fucking: boolean
  text: string
}


const initial_cost = [
  {
    id: 'c1',
    date: new Date(2023, 2, 12),
    description: 'Холодильник',
    amount: 999.99
  },
  {
    id: 'c2',
    date: new Date(2023, 11, 25),
    description: 'MacBook',
    amount: 1254.72
  },
  {
    id: 'c3',
    date: new Date(2023, 3, 14),
    description: 'Джинсы',
    amount: 49.99
  },
]

const data:IData[] = [
  {
    text: 'fuck your mother',
    nigger: true,
    count: 214,
  }
]

const dataArr: TypeDataArr[] = [
  {
    text: 'fuck niggers',
    fucking: false,
    id: 123
  }
]

export const App = () =>  {

  const [costs, setCosts] = useState(initial_cost)

  const addCostHandler = (InputCostData) => {
    setCosts((previousCosts) => {
      return [
        InputCostData,
        ...previousCosts,
      ]
    })
  }

  return (
    <div>
      <NewCost onSaveCostDataApp={addCostHandler}/>
      <Costs costs={costs}></Costs>
    </div>
  );
}
// Главный компонент на странице





// Как было в ранних версиях
// первый атрибут - тег, второй - атрибуты, третий ( а также четвертый тд) - контент ( еще теги, а значит и React.createElement())
// return React.createElement(
//   'div',
//   {},
//   React.createElement(
//     'h1', 
//     {},
//     'Начнем изучение React!'),
//     React.createElement(Costs, {costs: costs}, )
//   )
