import { useState } from 'react'
import styles from './UseState.module.scss'

export const UseState = () => {

    const [count, setCount] = useState(0) // первое - само состояние, которое будет изменяться, второе - функция, которая будет изменять, в скобках функции useState() - начальное значение

    const [todoList, setList] = useState([
        {id: 1, title: 'First todo', completed: false},
        {id: 2, title: 'Second todo', completed: false},
    ])
    const [todoTitle, setTitle] = useState('')

    const addTodo = (event) => {
        if (event.key == 'Enter') {
            setList([
                ...todoList,
                {
                    id: Date.now(),
                    title: todoTitle,
                    completed: false
                }
            ])
        }
    }

    const counterHandler = (event) => {
        setCount(count + 1)
    }

    return(
        <main>
            <div className={styles.counter}>
                <label htmlFor="penis">Count - {count}</label>
                <button name='penis' onClick={counterHandler} className={styles.button__counter}>More</button>
            </div>
            <div className={styles.input_field}>
                <h1>TodoList</h1>
                <input 
                    type="text"
                    value={todoTitle}
                    onChange={event => setTitle(event.target.value)}
                    onKeyPress={addTodo}
                />
                <label>Todo Name</label>
            </div>
            <div className={styles.todoList}>
                {todoList.map((el) => {
                    return (
                        <div className={styles.component}>
                            <p>{el.id}</p>
                            <p>{el.title}</p>
                            <p>{el.completed ? 'Yes' : 'No'}</p>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}
