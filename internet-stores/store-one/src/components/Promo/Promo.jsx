import './Promo.css'
import promoImg from './../../img/images/header-img.jpg'

const Promo = () => {
    return ( 
        <section className="promo">
            <div className="container">
                <div className="promo__content">
                    <div className="promo__text">
                        <div className="promo_title">
                            <span className='highlight'>
                                <span>
                                    LET'S
                                </span>
                            </span> 
                            EXPLORE 
                            <span className='highlight highlight--yellow'>
                                <span>
                                    UNIQUE
                                </span>
                            </span> 
                            CLOTHES
                        </div>
                        <div className="promo_description">
                            Innovative fashion!
                        </div>
                        <div className="promo_btn-wrapper">
                            <a href="#" className="promo__btn"> Shop now</a>
                        </div>
                    </div>
                    <div className="promo__image">
                        <img src={promoImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promo;