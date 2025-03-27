import { useContext } from 'react'
import styles from './UseContext.module.scss'
import Context from './UseContext';
// import Context from './Context';
import { Info } from './Info';

export const Doch = () => {

    const {number, setNumber, data } = useContext(Context);

    return(
        <div className={styles.text__style}>
            <button onClick={() => setNumber(number + 1)} type='button'>Value: {number}</button>
            <Info />
        </div>
    );
};
