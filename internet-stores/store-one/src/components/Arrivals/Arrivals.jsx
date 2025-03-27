import Card from '../Card/Card';
import './Arrivals.css'
import data from './../helper/data'


const Arrivals = () => {
    return (
        <section className="arrivals">
            <div className="container">
                <div className="arrivals__header"><h2 className="title-2">NEW ARRIVALS</h2></div>
                <div className="arrivals__cards">
                    {data.map((card) => {
                        return (
                            <Card key={card.id} data={card} />
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Arrivals;