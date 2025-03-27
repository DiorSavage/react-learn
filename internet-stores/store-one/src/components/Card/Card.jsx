import arrowImg from './../../img/icons/arrow.svg'
import styles from './Card.module.css'


const Card = (props) => {
    return (
        <div className={styles.card}>
            <a href="#" className={styles}></a>
            <img className={styles.card__img} src={props.data.img} alt="Category..." />
            <div className={styles.card__body}>
                <div className={styles.card__text}> 
                    <div className={styles.card__title}>{props.data.title}</div>
                    <div className={styles.card__muted}>Explore Now!</div>
                </div>
                <div className={styles.card__icon}>
                    <img src={arrowImg} alt="Open" />
                </div>
            </div>
        </div>
    );
}

export default Card;