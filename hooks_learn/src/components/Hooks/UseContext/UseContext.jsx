import React, { useState } from 'react'
import styles from './UseContext.module.scss';
import { Doch } from './Doch';
// import Context from './Context';

const Context = React.createContext();
export default Context

export const UseContext = () => {


    const [number, setNumber] = useState(0);
    const data = [
        {
            "name": "Alex",
            "age": 27,
        },
        {
            "name": "Richard",
            "age": 19,
        }
    ]
    return(
        <main>
            <p className={styles.info}>Нужен для более удобной передачи данных дочерним компонентам. Допустим, есть компонент, в котором еще несколько дочерних. Через пропсы передавать данные не оч, а вот useContext хорошо подходит</p>
            <p className={styles.info}>Как бл это использоватьвоаждлфывоа</p>
            <p className={styles.info}>Сначало создаем файл context ( а можно и в род компоненте, где мы экспортируем context, а потом импортируем в доч компонтентах контекст и род ), где создаем context с помощью React.createContext:
            <br />import React from 'react' <br />
            const Context = React.createContext{"()"}; <br />
            export default Context
            </p>
            <p className={styles.info}>В род компоненте используем такую конструкцию, изначально импортировав context
            <br /> {" <Context.Provider value={{number, setNumber, data}}> "}<br /> 
                {" <Doch></Doch> "}<br /> 
            {"</Context.Provider>"} <br />
            Где Doch - дочерний компонент, в value мы закинем данные, которые теперь будут передаваться во все компоненты, которые идут как бы после род компонента 
            </p>
            <p className={styles.info}>Теперь в дочернем компоненте, где собираемся использовать данные из главного компонента делаем это:
                <br /> Импортируем context и хук useContext
                <br /> Теперь создаем переменную, в которую с помощью метода деструктуризации берем необходимые данные и записываем в переменную таааким образом: <br />
                {"const {number, setNumber, data } = useContext(Context);"} <br />
                В скобках хука наш context, которые мы еще в файле создали <br />
                как то так епт
            </p>
            <div className={styles.context__practice}>
                <Context.Provider value={{number, setNumber, data}}>
                    <Doch></Doch>
                </Context.Provider>
            </div>
        </main>
    );

};
