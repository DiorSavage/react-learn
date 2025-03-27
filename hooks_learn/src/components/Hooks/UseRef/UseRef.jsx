import { useRef, useEffect, useState } from 'react';

import styles from './UseRef.module.scss';

export const UseRef = () => {

    const ref = useRef();
    const [data_bl, setdata] = useState(true)

    const [startTime, setStart] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    const handleStart = () => {
        setStart(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10)
    }

    const handleStop = () => {
        console.log(intervalRef)
        clearInterval(intervalRef.current);
    }
    
    let SecondPassed = 0;
    if (startTime != null && now != null) {
        SecondPassed = (now - startTime) / 1000;
    }

    useEffect(() => {
        document.getElementsByTagName('button')[0].setAttribute('data-bool', data_bl)

        data_bl ? ref.current.classList.add(styles.active) : ref.current.classList.remove(styles.active)
    }, [data_bl]);

    return(
        
        <main>
            <p className={styles.info}>Хук useRef позволяет сохранить некоторый объект, который можно можно изменять и который хранится в течение всей жизни компонента. По сути нужен, чтобы ссылаться на значение, которое не нужно для рендеринга. </p>
            <p className={styles.info}>Можно прописать свойство ref для элемента в DOM таким образом: {"ref={ref}"}, где ref в фигурных скобках - изначально прописанный ref = {"useRef()"}. Теперь мы можем так сказать доставать значение. </p>
            <p className={styles.info}>Так же в качестве параметра функция {"useRef()"} принимает начальное значение хранимого объекта. А возвращаемое значение - ссылка-объект, из свойства current которого можно получить хранимое значение. const refUser = useRef {'("Tom")'}; console.log {"(refUser.current)"}; // Tom.</p>
            <p className={styles.info}>ref идеально используют для поиска элемента в DOM дереве</p>
            <p className={styles.info}>Различия между useRef И useState есть: нет повторного рендеринга, как у useState, Изменяемый — вы можете изменять и обновлять значение current вне процесса рендеринга.</p>
            <div className={styles.ref__practice}>
                <button data-bool={data_bl} onClick={() => setdata(!data_bl)}>Xyu</button>
                <div className={styles.ref__block} ref={ref}></div>
                <div className={styles.timer}>
                    <h1>Time passed: {SecondPassed.toFixed(3)} </h1>
                    <button onClick={handleStart}>Start</button>
                    <button onClick={handleStop}>Stop</button>
                </div>
            </div>
        </main>
    )
}
