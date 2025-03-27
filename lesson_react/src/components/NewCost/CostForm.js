import React, { useState } from 'react'
import './CostForm.css'

const CostForm = (props) => {
    
    const [inputName, setInputName] = useState('')
    const [inputAmount, setInputAmount] = useState('')
    const [inputDate, setInputDate] = useState('')

    // const [userInput, setUserInput] = useState({ 
    //     name: '',
    //     amount: '',
    //     date: ''
    // })
    // вариантик, но трудный, нужно спред юзать


    const nameChangeHandler = (event) => {
        setInputName(event.target.value)
        // setUserInput({    ----> неправильные варианты
        //     ...userInput, // СПРЕД, из прошлого userInput в данный перенесутся все св-ва, иначе все слетит
        //     name: event.target.value,
        // })

        // setUserInput((previousState) => { // когда обновление состояния зависит от предыдущего состояния, то нужно использовать этот способ обновления
        //     return {
        //         ...previousState,
        //         name: event.target.value,
        //     }
        // })
    }

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setInputDate(event.target.value)
    } 

    const submitHandler = (event) => {
        event.preventDefault() // Удаляем дефолтное поведение кнопки submit

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate),
        }

        props.onSaveCostData(costData)
        setInputAmount('')
        setInputDate('')
        setInputName('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost_controls">
                <div className="new-cost_control">
                    <label>Название</label>
                    <input type="text" onChange={nameChangeHandler} value={inputName}/>
                    {/* для того, чтобы обновлять данные в формах, нужно ввести атрибут value и передать ему состояние */}
                    {/* в итоге функция setInputName и тд могут обновлять и данные в формах, т.е. в value */}
                </div>
                <div className="new-cost_control">
                    <label>Сумма</label>
                    <input type="number" min='0.01' step='0.01' value={inputAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-cost_control">
                    <label>Название</label>
                    <input type="date" min='2020-01-01' max='2023-12-31' value={inputDate} onChange={dateChangeHandler}/>
                </div>
                <div className='new-cost_actions'>
                    <button type="submit">Добавить расход</button>
                    <button  type='button' onClick={props.cancel}>Отмена</button>
                </div>
            </div>
        </form>
    )
}

export default CostForm