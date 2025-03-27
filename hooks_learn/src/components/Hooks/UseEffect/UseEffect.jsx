import { useState, useEffect } from 'react'
import styles from './UseEffect.module.scss'

export const UseEffect = () => {

    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            console.log('wheel')
        }

        document.addEventListener('wheel', onScroll);
        return () => {
            document.removeEventListener("wheel", onScroll);
        }
    }, [])  

    useEffect(() => {
        console.log("useEffect");
        console.log(first, second, third)
    }, [first, second])
    return(
        <main>
            <p className={styles.info}>UseEffect предназначен для обработки изменения компонента. 
            В аргументы в передается массив с элементами, за изменениями которых следим. При пустом массиве отслеживаются любые изменения, включая начальный рендеринг компонента
            </p>
            <div className={styles.buttons}>
                <button onClick={() => setFirst(!first)}>First</button> 
                <button onClick={() => setSecond(!second)}>Second</button>
                <button onClick={() => setThird(!third)}>Third</button>
            </div>
        </main>
    )
}
