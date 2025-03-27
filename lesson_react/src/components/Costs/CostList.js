import CostItem from "./Costitem"
import './CostList.css'


const CostList = (props) => {


    if (props.costs.length === 0) {
        return ( 
            <h2 className='cost-list_fallback'>В Это Году Расходов Нет</h2>
        )
    }


    return (
        <ul className="cost-list">
            {props.costs.map((cost) => (
                <CostItem 
                    key={cost.id} // нужно для react
                    date={cost.date}
                    description={cost.description}
                    amount={cost.amount}
                />
            ))}
        </ul>
    )
}

export default CostList