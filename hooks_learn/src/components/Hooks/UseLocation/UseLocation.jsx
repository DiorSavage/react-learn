import React, { useEffect } from 'react';
import styles from './UseLocation.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';

export const UseLocation = () => {

    const navigate = useNavigate(); // Хук useNavigate возвращает функцию, которая позволяет вам перемещаться программно, например, в эффекте:

    function tonav(){
        navigate('/effect', {
        state: {
            heyya: '12333',
        }
        })
    }

    console.log(useLocation());

    return(
        <main>
            <p className={styles.info}>Этот перехват возвращает текущий location объект. Это может быть полезно, если вы хотите выполнить какой-либо побочный эффект при изменении текущего местоположения. это удобный способ передавать состояние между компонентами при навигации. Однако у него есть один существенный недостаток, который заключается в том, что состояние существует только при навигации внутри вашего приложения. Если пользователь переходит по ссылке на ваш веб-сайт, к местоположению не будет привязано состояние.</p>
            <p className={styles.info}>
                Свойства <br />
                location.hash --{"> "}
                Хэш текущего URL-адреса. <br />

                location.key --{"> "}
                Уникальный ключ этого местоположения. <br />

                location.pathname --{"> "}
                Путь к текущему URL-адресу. <br />

                location.search --{"> "}
                Строка запроса текущего URL-адреса. <br />

                location.state --{"> "}
                Значение состояния местоположения, созданного с помощью {"<Link state>"} или navigate.</p>
            <div className={styles.location__practice}>
            <button className={styles.home_button} onClick={tonav}>sdfadf</button>
            </div>
        </main>
    );
};